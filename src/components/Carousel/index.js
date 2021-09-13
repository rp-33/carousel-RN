import React,{useState,useEffect,useRef} from 'react';
import {View,ImageBackground,Text,TouchableOpacity,FlatList,Animated} from 'react-native';
import Item from './Item';
import NavigationControl from './NavigationControl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';


const Carousel = ({data,width})=>{
	const [position,setPosition] = useState(0);
	const refContainer = useRef(null);

	useEffect(()=>{        
        getData();  
    },[]);

	useEffect(()=>{
       storeData(position);
    },[position]);


    const handleBack = ()=>{
    	let newPosition = position - 1;
    	setPosition(newPosition);
    	refContainer.current.scrollToIndex({ animated: true,index : newPosition }); 	
    }

    const handleNext = ()=>{
    	let newPosition = position + 1;
    	setPosition(newPosition);
    	refContainer.current.scrollToIndex({ animated: true,index : newPosition }); 
    }

    const handlePosition = (index)=>{
    	setPosition(index);
    	refContainer.current.scrollToIndex({ animated: true,index : index }); 
    }

    const storeData = async (value) => {  
    	await AsyncStorage.setItem('position',value.toString());
	}

    const getData = async () => {  
    	const value = await AsyncStorage.getItem('position');
    	let positionValue = value!==null ? parseInt(value) : 0;
		setPosition(positionValue);
	}

	const handleScrollPositionFailed = (info)=>{
		refContainer.current.scrollToIndex({animated:true,index:info.index});
		setPosition(info.index)
	}


	return(
		<View style={styles.ctn}>
			<FlatList
			contentContainerStyle ={styles.carousel}
			showsHorizontalScrollIndicator = {false}
			scrollEnabled = {false}
			ref={refContainer}
			horizontal={true}
			showsVerticalScrollIndicator={false}
			onScrollToIndexFailed={handleScrollPositionFailed}
			data = {data}
			initialScrollIndex = {3}
			keyExtractor={(item, index) => index.toString()}
			renderItem = {({item,index})=>(
				<Item 
					key = {index}
					{...item}
				/>
			)}
			/>
			<NavigationControl 
				position = {position}
				handleBack = {handleBack}
				handleNext = {handleNext}
				handlePosition = {handlePosition}
				data = {data}
			/>
		</View>			
	)
}

export default Carousel;
