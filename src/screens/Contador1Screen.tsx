import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const Contador1Screen = () => {
    const [contador, setContador] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador} </Text>
            {/* <TouchableOpacity
                onPress={() => setContador(contador + 1)}
                style={style.fabLocationBR}
            >
                <View style={style.fab}>
                    <Text style={style.fabText}>+1</Text>
                </View>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
                onPress={() => setContador(contador - 1)}
                style={style.fabLocationBL}
            >
                <View style={style.fab}>
                    <Text style={style.fabText}>-1</Text>
                </View>
            </TouchableOpacity> */}
            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}

            />
            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position="bl"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center"
    },
    title: {
        fontSize: 25, textAlign: "center"
    },
})