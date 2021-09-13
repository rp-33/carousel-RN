import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	item:{
		borderWidth:1,
		marginHorizontal:5,
		width:120,
		height:120,
		borderRadius:20,
		overflow:'hidden',
		backgroundColor:'blue'
	},
	image:{
		flex:1,
		alignItems:'center',
		justifyContent:'flex-end'
	},
	title:{
		fontWeight:'bold',
		color:'white'
	},
})

export default styles;