import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function ChangeLayoutOnFavColors({onLayout}) {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => onLayout()} style={styles.iconContainer}>
                <Ionicons name="grid" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    iconContainer: {
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
    },
});

