import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { TouchableOpacity, StyleSheet} from 'react-native'
import * as SQLite from 'expo-sqlite';
import favourite_colors from '../global/db_name';

export default function AddToFavourties({color}) {
    
    const db = SQLite.openDatabase(favourite_colors);
    
    const addColorToFavourites = async (color) => {
        try {
            await db.transactionAsync(async tx => {
                const result = tx.executeSqlAsync('INSERT INTO colors (color) VALUES (?)', [color]);
                console.log('Color added to favorites:', result);
            });
        } catch (error) {
            console.error('Error adding color to favorites:', error);
        }
    };
    
    
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS colors (color TEXT PRIMARY KEY)'
            );
        });
    }, []);
    

    return (
        <>

            <TouchableOpacity onPress={addColorToFavourites} style={styles.iconContainer}>
                <Ionicons name="heart-outline" size={24} color="black" />
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        bottom: 3,
        right: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,

    },
})