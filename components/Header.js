import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

const HeaderComponent = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontWeight: "700",
        letterSpacing:0.2,
        fontSize:18
    }
})

export default HeaderComponent;