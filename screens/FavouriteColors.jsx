import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import favourite_colors from '../global/db_name';
import * as SQLite from 'expo-sqlite';
export default function FavouriteColors() {
    
    const [colors, setColors] = useState([]);
    const db = SQLite.openDatabase(favourite_colors);
    const navigation = useNavigation();

    const fetchColors = async () => {
        try {
            const result = await db.transactionAsync(async (tx) => {
                return await tx.executeSqlAsync('SELECT * FROM colors');
            });
            console.log(result)
        } catch (error) {
            console.error('Error fetching colors:', error);
        }
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
                        style={[styles.row, { backgroundColor: item }]}
                        onPress={() => navigateToDisplayColors(item)}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
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
