import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function UtilsButton({ onRefresh, onLayout }) {
    const navigation = useNavigation()

    const loadNewRandomColors = () => onRefresh( prev => ! prev)
    const navigateToFavColors = () => navigation.navigate('favcolors')

    return (
        <View style={styles.container}>
            
            <TouchableOpacity onPress={loadNewRandomColors} style={styles.iconContainer}>
                <Ionicons name="refresh" size={24} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onLayout} style={styles.iconContainer}>
                <Ionicons name="grid" size={24} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={navigateToFavColors} style={styles.iconContainer}>
                <Ionicons name="heart" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
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
