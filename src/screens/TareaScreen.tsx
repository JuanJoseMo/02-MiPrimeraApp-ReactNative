import React from 'react'
import { StyleSheet, View } from 'react-native';
import { FlexScreen } from './FlexScreen';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.CajaMorada} />
            <View style={styles.CajaNaranja} />
            <View style={styles.CajaAzulCyan} />
        </View>
    )
}
/*
Tarea 1: Añadir un flex:1 a la caja naranja.
Tarea 2: Añadir un justifyContent:'center' al container
         y comentar el width:100 de la caja azul.
Tarea 3: Añadir un justifyContent:'center' al container
         y añadir a las cajas morada un alignSelf:'flex-end'
         y azul la un alignSelf:'center'.
Tarea 4: Añadir un justifyContent:'space-between' al container
         y añadir a las cajas morada un alignSelf:'flex-end'
         y naranja la un alignSelf:'center'.
Tarea 5: Añadir un justifyContent:'space-between' al container y un flex:Direction:'row'.
         En las cajas comentar el height:100.
Tarea 6: Un flex:1 a cada caja.
Tarea 7: Añadir un justifyContent:'center' al container
         y cada caja un alignSelf:'center'.
Tarea 8: Añadir un justifyContent:'center' al container,
         cada caja un alignSelf:'center' y la caja naranja un left:100
Tarea 9: Añadir un justifyContent:'center' al container,
         cada caja un alignSelf:'center', la caja naranja un left:100 
         y la caja morada un top:100.
Tarea 10: Añadir un justifyContent:'center' y flexDirection:'row' al container,
         cada caja un alignSelf:'center'
         y la caja morada un top:50.

*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent:'center',
        flexDirection:'row'
    },
    CajaMorada: {
        // flex:1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'purple',
        alignSelf:'center',
        // top:100,
    },
    CajaNaranja: {
        // flex:1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'orange',
        alignSelf:'center',
        top:50,
    },
    CajaAzulCyan: {
        // flex:1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'cyan',
        alignSelf:'center'
    },
});