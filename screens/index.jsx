import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page() {
    const [data, setData] = useState([]);
    const navigation = useNavigation()
    
    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const generateRandomSize = () => {
        const width = 100;
        const heightMultiplier = 2;
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
    
    const navigateToDisplayColors = (color) => {
        navigation.navigate('displaycolors', { color });
    };

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
            
                <View style={styles.row}>

                    <Pressable 
                        style={[styles.color_view, { backgroundColor: item.color1, width: "50%", height: item.size }]}
                        onPress={() => navigateToDisplayColors(item.color1)}
                    >

                    </Pressable>

                    <Pressable 
                        style={[styles.color_view, { backgroundColor: item.color2, width: "50%", height: item.size}]}
                        onPress={() => navigateToDisplayColors(item.color2)}
                    >
                        
                    </Pressable>
                </View>
            
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
