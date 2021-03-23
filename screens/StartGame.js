import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import CardComponent from '../components/Card';
import InputComponent from '../components/Input'
import Colors from '../constants/colors';

const StartGameComponent = () => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [seletectedNumber,setSeletectedNumber]=useState();

    const handleSubmit = (enterNumber) => {
        setEnteredValue(enterNumber.replace(/[^0-9]/g,''))
    }

    const closeKeyboard = () => {
        Keyboard.dismiss();
    }

    const resetInputHandle =()=>{
        setEnteredValue('');
        setConfirmed(false);
    }

    const handleConfirm = () => {
        const choosenNumber = parseInt(enteredValue);
        //console.log(typeof(choosenNumber));
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert("Invalid Number","Choose number between 1-99",[{
                text:'okay',
              style:'destructive',
                onPress:resetInputHandle
            }])
        }
        setConfirmed(true);
        console.log(confirmed);
        setSeletectedNumber(choosenNumber);
        setEnteredValue('');
        console.log(confirmed);
    }
    let ConfirmedOutpout;
    if(confirmed){
        ConfirmedOutpout = <Text>You Number is : {seletectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <View style={styles.screen}>
                <Text style={styles.inputTitle}>Start A New Game -:)</Text>
                <CardComponent style={styles.inputView} >
                    <InputComponent
                        style={styles.inputContainer}
                        keyboardType="number-pad"
                        maxLength="2"
                        onChangeText={handleSubmit}
                        value={enteredValue}
                    />
                    <View style={styles.pressableView} >
                        <Pressable style={[styles.button, styles.buttonReset]} onPress={resetInputHandle} >
                            <Text style={styles.textStyle}>Reset</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.buttonStart]} onPress={handleConfirm} >
                            <Text style={styles.textStyle}>Start</Text>
                        </Pressable>
                    </View>
                </CardComponent>
                {ConfirmedOutpout}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    inputView: {
        marginTop: 10,
        padding: 25,
        alignItems: 'center',

    },
    inputContainer: {
        width: 50,
        textAlign: 'center'
    },
    inputTitle: {
        fontWeight: '600',
        fontSize: 15
    },
    pressableView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        width: 200
    },
    button: {
        borderRadius: 20,
        elevation: 2,
        padding: 10,
        width: 90
    },
    buttonStart: {
        backgroundColor: Colors.buttonPrimary
    },
    buttonReset: {
        backgroundColor: Colors.secondary
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default StartGameComponent