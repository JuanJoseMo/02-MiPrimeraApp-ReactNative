import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
// Constante con los datos de la pantalla del dispositivo.
// No manda los datos en tiempo real, solamente el tamaño.
// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
    // Sí manda los datos en tiempo real de la pantalla.
    const { width, height } = useWindowDimensions();
    // Junto con el visto antes son dos formas de sacar los datos de la pantalla.
    return (
        <View>
            <View style={styles.container}>
                {/* Aplica el estilo de manera condicional, si no toma el width y lo multiplica por el 20%. */}
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.50
                }} />
                <View style={{ ...styles.cajaNaranja, width: width * 0.50 }} />
            </View>
            {/* Datos de la pantalla del móvil. */}
            <Text style={styles.title}>W:{width},H:{height}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // Relativo al padre.
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: 'purple',
        // Con el '50%' le estamos diciendo que tome la mitad del padre.
        // Es mejor utilizar flex.
        // width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: 'orange',
        height: '25%',
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});