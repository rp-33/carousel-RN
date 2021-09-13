import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	ctnBtn:{
		zIndex:2,
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-between',
		paddingHorizontal:10,
		alignItems:'center'
	},
	btn:{
		width:50,
		height:50,
		borderRadius:25,
		backgroundColor:'rgba(255,255,255,0.7)',
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:'#c7c7c7'
	},
	ctnThumbnail:{
		flexDirection:'row'
	},
	thumbnail:{
		width:10,
		height:10,
		borderRadius:5,
		backgroundColor:'#c7c7c7',
		marginHorizontal:3
	}
});

export default styles;