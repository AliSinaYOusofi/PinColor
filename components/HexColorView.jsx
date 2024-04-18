
import React from 'react'
import { Pressable, TouchableOpacity, StyleSheet, Text, ToastAndroid } from 'react-native'
import * as Clipboard from 'expo-clipboard';

export default function HexColorView({hex}) {
    
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(hex);
        ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={copyToClipboard}>
            <Text style={{fontSize: 12}}>{hex}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 4,
        borderRadius: 7,
        padding: 4,
        left: 3
    },
});