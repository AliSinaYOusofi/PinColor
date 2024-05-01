import React from 'react'
import { Pressable, View, StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native';
export default function SetAsBackgroud({color}) {
    
    const setAsHomeWallpaper = () => {
        
    }

    const setAsLockWallpaper = () => {
        
    }

    const setAsBothWallpaper = () => {
        
    }

    return (
        <View style={styles.container}>

            <Text style={{color: "white", fontWeight: 'bold', fontSize: 19}}>
                Set as:
            </Text>
            <TouchableOpacity style={styles.iconContainer} onPress={setAsLockWallpaper}>
                <AntDesign name="lock" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer} onPress={setAsHomeWallpaper}>
                <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.iconContainer, styles.both]} onPress={setAsBothWallpaper}>
                <AntDesign name="lock" size={24} color="black" />
                <AntDesign name="plus" size={24} color="black" />
                <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: '95%'
    },

    iconContainer: {
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
    },

    both: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});