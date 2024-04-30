import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import favourite_colors from '../global/Database';
import * as SQLite from 'expo-sqlite';
import Database from '../global/Database'
export default function FavouriteColors() {
    
    const [colors, setColors] = useState([]);
    
    const navigation = useNavigation();

    const fetchColors = () => {

        Database.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM colors',
                [],
                (_, { rows }) => {
                    
                    
                    console.log(rows._array, ' the fucking result');
                    setColors(rows._array);
                },
                (_, error) => {
                    console.error('Error fetching colors:', error);
                }
            );
        });
    };
    

    useEffect(() => {
        fetchColors();
    }, []);

    const navigateToDisplayColors = (color) => {
        navigation.navigate('displaycolors', { color });
    };

    return (
        <>
            <FlatList
                data={colors}
                renderItem={({ item }) => (
                    <Pressable
                        style={[styles.color_view, { backgroundColor: item.color }]}
                        onPress={() => navigateToDisplayColors(item.color)}
                    />
                )}
                keyExtractor={(item, index) => item.id}
                numColumns={1}
            />
        </>
    );
}

const styles = StyleSheet.create({
    
    color_view: {
        flex: 1,
        height: 100,
        margin: 4,
        borderRadius: 10,
    },
    
    row: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center'
    },
});
