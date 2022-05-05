import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Se expande con todo el tamaño del padre
        // que es el SafeArea
        flex:1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 20,
        borderWidth:10,
        paddingHorizontal:100,
        paddingVertical:20,
        marginHorizontal:10,
        marginVertical:20,
        borderRadius:14,
    }
});
