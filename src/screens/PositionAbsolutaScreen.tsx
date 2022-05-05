import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionAbsolutaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaVerde} />
            <View style={styles.cajaAzul} />
        </View>
    )
}
//Posición de forma absoluta relativa al padre.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 300,
        // height: 400,
        backgroundColor: 'cyan'
    },
    cajaMorada: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0
    },
    cajaNaranja: {
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
    },
    cajaVerde: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaAzul: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
});
