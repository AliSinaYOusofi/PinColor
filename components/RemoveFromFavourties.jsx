import React from 'react'
import Database from '../global/Database'
import { TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function RemoveFromFavourties({color, onRefresh}) {
    
    const removeColor = (color) => {
    
        Database.transaction(tx => {
            tx.executeSql(
                'DELETE FROM colors WHERE color = ?',
                [color],
                () => {
                    ToastAndroid.show(`Removed '${color}' from favorites.`, ToastAndroid.LONG);
                    onRefresh()
                },
                (_, error) => {
                    console.error('Error deleting color from favorites:', error.message);
                }
            );
        });
    };

    return (
        <TouchableOpacity onPress={() => removeColor(color)} style={styles.iconContainer}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        bottom: 6,
        right: 6,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
    },
})