import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "cyan", justifyContent: "center" }}>{/*Al style se le manda un objeto literal*/}
          <Text style={{ fontSize: 45, textAlign: "center" }}>Hola mundo!</Text>
        </View>
      )
}

