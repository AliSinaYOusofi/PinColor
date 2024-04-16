import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';

export default function DisplayColors({ route }) {
    
    const [currentDisplayColor, setCurrentDisplayColor] = useState()
    const [randomColorsList, setRandomColorsList] = useState([]);

    const { color } = route.params;

    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const generateRandomItem = () => {
        return {
            key: String(Math.random()),
            color: generateRandomColor(),
        };
    };

    const loadMoreData = () => {
        const newData = Array.from({ length: 10 }, () => generateRandomItem());
        setRandomColorsList([...randomColorsList, ...newData]);
    };

    useEffect(() => {
        const initialData = Array.from({ length: 20 }, () => generateRandomItem());
        setRandomColorsList(initialData);
        setCurrentDisplayColor(color)
    }, []);

    return (
        <View style={styles.container}>
            <View style={[styles.bigColorDisplay, { backgroundColor: currentDisplayColor }]}></View>
            
            <FlatList
                horizontal
                contentContainerStyle={styles.smallColorGallery}
                data={randomColorsList}
                renderItem={({ item }) => (
                    <Pressable onPress={() => setCurrentDisplayColor(item.color)}>
                        <View style={[styles.colorBox, { backgroundColor: item.color }]}></View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.key}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.1}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorBox: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginHorizontal: 5,
    },
    bigColorDisplay: {
        width: 300,
        height: 450,
        borderRadius: 20,
        marginTop: 20
    },
    smallColorGallery: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
});
