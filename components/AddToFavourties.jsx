import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { TouchableOpacity, StyleSheet, Pressable} from 'react-native'
import * as SQLite from 'expo-sqlite';
import favourite_colors from '../global/Database';
import { ToastAndroid } from 'react-native';
import Database from '../global/Database';
export default function AddToFavourties({color}) {
    
    const db = SQLite.openDatabase(favourite_colors);
    
    const addColor = (color) => {
        console.log('add color')
        Database.transaction(tx => {
            tx.executeSql(
                'INSERT INTO colors (color) VALUES (?);',
                [color],
                (_, { rowsAffected }) => {
                    console.log(rowsAffected, 'rows aff')
                    if (rowsAffected > 0) {
                        ToastAndroid.show(`Added '${color}' to favorites.`, ToastAndroid.LONG);
                    } else {
                        console.log(`Failed to add '${color}' to favorites.`);
                    }
                },
                (_, error) => {
                    console.error('Error inserting color into favorites:', error.message);
                }
            );
        });
    };
    
    const removeColor = (color) => {
        console.log('remove color')
        Database.transaction(tx => {
            tx.executeSql(
                'DELETE FROM colors WHERE color = ?',
                [color],
                () => {
                    ToastAndroid.show(`Removed '${color}' from favorites.`, ToastAndroid.LONG);
                },
                (_, error) => {
                    console.error('Error deleting color from favorites:', error.message);
                }
            );
        });
    };
    

    const addOrRemoveColor = (color) => {
        
        Database.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM colors WHERE color = ?',
                [color],
                (_, success) => {
                    
                    if (success.rows.length > 0) {
                        removeColor(color);
                    } else {
                        addColor(color);
                    }
                },
                (_, error) => {
                    console.error('Error selecting color from favorites:', error.message);
                }
            );
        });
    };
    
    useEffect(() => {
        Database.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS colors ( id INTEGER PRIMARY KEY AUTOINCREMENT, color TEXT);'
            ,
            [],
            (_, db_n) => {
                console.log('Table created successfully.', db_n);
            },
            (_, error) => {
                console.error('Error creating table:', error.message);
            });
        });
    }, []); 
    

    return (
        <>

            <TouchableOpacity onPress={() => addOrRemoveColor(color)} style={styles.iconContainer}>
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