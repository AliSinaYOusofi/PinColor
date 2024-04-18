import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import tinycolor from 'tinycolor2';

export default function DisplayColors({ route }) {
    
    const [currentDisplayColor, setCurrentDisplayColor] = useState();
    const [shadesList, setShadesList] = useState([]);

    const { color } = route.params;

    const generateShades = (color) => {
        
        const shades = [];
        
        const colorObj = tinycolor(color);
        
        for (let i = 0; i <= 10; i++) {
            const shadeColor = colorObj.clone().darken(i * 10).toString();
            shades.push({
                key: String(i),
                color: shadeColor,
            });
        }
        return shades;
    };

    useEffect(() => {
        
        const shades = generateShades(color);
        setShadesList(shades);
        setCurrentDisplayColor(color);
    
    }, []);

    return (
        <View style={styles.container}>
            <View style={[styles.bigColorDisplay, { backgroundColor: currentDisplayColor, borderRadius: 20 }]}></View>

            <FlatList
                horizontal
                contentContainerStyle={styles.smallColorGallery}
                data={shadesList}
                renderItem={({ item }) => (
                    <Pressable onPress={() => setCurrentDisplayColor(item.color)}>
                        <View style={[styles.colorBox, { backgroundColor: item.color }]}></View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.key}
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
