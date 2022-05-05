import React from 'react'
import { Text, TouchableNativeFeedback, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';


interface Props {
    title: string,
    onPress: () => void,
    position?: "br" | "bl"
}


export const Fab = ({ title, onPress, position = "br" }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={[styles.fabLocation, (position === "bl") ? styles.left : styles.right]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <View
                style={[styles.fabLocation, (position === "bl") ? styles.left : styles.right]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple("#28425B", false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    return (Platform.OS === "android") ? android() : ios()
}
const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6.70,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        //textAlign:'center'
        alignSelf: 'center'
    }
})