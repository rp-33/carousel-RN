import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import styles from './styles';

const NavigationControl = ({data,position,handleBack,handleNext,handlePosition})=>{
	return(
		<View style={styles.ctnBtn}>
			<TouchableOpacity
				style={styles.btn}
				onPress={handleBack}
				disabled= {position === 0}
			>
				<Text>back</Text>
			</TouchableOpacity>
			<View style={styles.ctnThumbnail}>
				{
					data.map((item,index)=>(
						<TouchableOpacity 
							key = {index}
							onPress={()=>handlePosition(index)}
							style={[styles.thumbnail,{backgroundColor:index === position ? 'red' : '#c7c7c7'}]}
						/>
					))
				}
			</View>
			<TouchableOpacity 
				style={styles.btn}
				onPress={handleNext}
				disabled= {position === data.length - 1}
			>
				<Text>Next</Text>
			</TouchableOpacity>
		</View>
	)
}

export default NavigationControl;