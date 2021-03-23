import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
import Colors from '../constants/colors'

const InputComponent =(props) =>{
    return(
        <TextInput {...props} style={{...styles.input,...props.style}}/>
    )
}

const styles = StyleSheet.create({
    input:{
        borderColor: Colors.greyColor,
        borderBottomWidth: 1,
    }
})
export default InputComponent;