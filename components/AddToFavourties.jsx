import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { TouchableOpacity, StyleSheet} from 'react-native'
import * as SQLite from 'expo-sqlite';
import favourite_colors from '../global/db_name';
import { ToastAndroid } from 'react-native';

export default function AddToFavourties({color}) {
    
    const db = SQLite.openDatabase(favourite_colors);
    
    const addColor = (color) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO colors (color) VALUES (?)',
                [color],
                (_, { rowsAffected }) => {
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
        db.transaction(tx => {
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
    

    const addOrRemoveColor = () => {
        console.log(color)
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM colors WHERE color = ?',
                [color],
                (_, { rows }) => {
                    console.log(rows._array)
                    if (rows._array.length > 0) {
                        console.log('remov to fav')
                        removeColor(color);
                    } else {
                        console.log('add from fav')
                        addColor(color);
                    }
                },
                (_, error) => {
                    console.error('Error checking color in favorites:', error.message);
                }
            );
        });
    };
    
    
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS colors ( id INTEGER PRIMARY KEY AUTOINCREMENT,color TEXT UNIQUE);'
            ,
                [],
                () => {
                    console.log('Table created successfully.');
                },
                (_, error) => {
                    console.error('Error creating table:', error.message);
                });
        });
    }, []);
    

    return (
        <>

            <TouchableOpacity onPress={addOrRemoveColor} style={styles.iconContainer}>
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