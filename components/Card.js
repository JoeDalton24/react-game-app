import React from 'react';
import  {StyleSheet,View} from 'react-native';


const CardComponent = (props) =>{
    return(
        <View  style={{...sytles.card,...props.style}} >{props.children}</View>
    )
}

const sytles = StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.2,
        backgroundColor:'white',
        borderRadius:5,
        elevation:8
    }
})

export default CardComponent;