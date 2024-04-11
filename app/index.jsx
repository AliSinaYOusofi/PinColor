import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Pressable } from 'react-native';

export default function Page() {
    const [data, setData] = useState([]);

    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const generateRandomSize = () => {
        const width = Math.floor(Math.random() * 100) + 50; // Random width between 50 and 150
        const heightMultiplier = Math.random() > 0.5 ? 2 : Math.random() * 0.5 + 1.5; // 50% chance for height to be 2x width, otherwise between 1.5x and 2x
        return width * heightMultiplier;
    };
    

    const generateRandomItem = () => {
        return {
            key: String(Math.random()),
            color1: generateRandomColor(),
            color2: generateRandomColor(),
            size: generateRandomSize(),
        };
    };

    const loadMoreData = () => {
        const newData = Array.from({ length: 10 }, () => generateRandomItem());
        setData([...data, ...newData]);
    };

    useEffect(() => {
        const initialData = Array.from({ length: 20 }, () => generateRandomItem());
        setData(initialData);
    }, []);

  return (
    <FlatList
    data={data}
    renderItem={({ item }) => (
        <Pressable>
            <View style={styles.row}>
                <View style={[styles.color_view, { backgroundColor: item.color1, width: "50%", height: item.size }]}></View>
                <View style={[styles.color_view, { backgroundColor: item.color2, width: "50%", height: item.size * (Math.random() + 0.5) }]}></View>
            </View>
        </Pressable>
    )}
    keyExtractor={(item) => item.key}
    onEndReached={loadMoreData}
    onEndReachedThreshold={0.1}
/>


  );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center'
    },
    color_view: {
        flex: 1,
        borderRadius: 10,
        margin: 4,
        
    }
});
