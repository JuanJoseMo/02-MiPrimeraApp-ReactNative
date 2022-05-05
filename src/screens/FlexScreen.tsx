import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja5}>Caja 5</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja5}>Caja 5</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja5}>Caja 5</Text>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja4}>Caja 4</Text>
            <Text style={styles.caja5}>Caja 5</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // Con flexDirection se expande todo lo que pueda segun la dirección,
        // por defecto es column.
        // Con justifyContent distribuye los hijos del padre en el tamaño del padre disponible
        // Con alignItems se da la posición a la caja respecto a su tamaño
        // Con alignSelf se da posición independientemente los hijos
        // FlexWrap acomoda todos los hijos dentro de la pantalla sin hacer uso de scroll
        flex: 1,
        backgroundColor: 'cyan',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',

    },
    caja1: {
        borderWidth: 2, borderColor: 'black', fontSize: 30, borderRadius: 10,
        // alignSelf: 'center',
    },
    caja2: {
        borderWidth: 2, borderColor: 'black', fontSize: 30, borderRadius: 10,
        // alignSelf: 'flex-start',
    },
    caja3: {
        borderWidth: 2, borderColor: 'black', fontSize: 30, borderRadius: 10,
        // alignSelf: 'flex-end',
    },
    caja4: {
        borderWidth: 2, borderColor: 'black', fontSize: 30, borderRadius: 10,
        // alignSelf: 'flex-start',
    },
    caja5: {
        borderWidth: 2, borderColor: 'black', fontSize: 30, borderRadius: 10,
        // alignSelf: 'flex-start',
    },
});