import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0);
    return (
        <View style={{ flex: 1, backgroundColor: "cyan", justifyContent: "center" }}>
            <Text style={{ fontSize: 25, textAlign: "center" }}>Contador: {contador} </Text>
            <Button
                title="Sumar al contador"
                onPress={() => setContador(contador + 1)}
            />
        </View>
    )
}
