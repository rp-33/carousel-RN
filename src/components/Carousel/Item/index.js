import React from 'react';
import {View,ImageBackground,Text} from 'react-native';
import styles from './styles';


const Item = ({image,title})=>{
	return(
		<View 
			style={styles.item} 
		>
			<ImageBackground 
				source ={{uri:image}}
				style={styles.image}
			>
				<Text style={styles.title}>{title}</Text>
			</ImageBackground>
		</View>
	)
}

export default Item;