import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionRelativaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}
//Posición de forma relativa.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan'
    },
    cajaMorada: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        bottom: 25,
        left: 25

    },
    cajaNaranja: {
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        top: 25,
        right: 25
    },

});
