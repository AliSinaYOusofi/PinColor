import React from 'react';
import { FlatList, Pressable, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import allShades from '../colors/allShadesParent';
import HexColorView from '../components/HexColorView';
import GoFullScreen from '../components/GoFullScreen';
export default function ListOfShades() {
    const navigation = useNavigation();

    const navigateToDisplayColors = (color) => {
        navigation.navigate('displayshades', { color });
    };

    return (
        <>
            <FlatList
                data={allShades}
                renderItem={({ item }) => (
                    
                    <Pressable
                        style={[styles.color_view, { backgroundColor: item.hex }]}
                        onPress={() => navigateToDisplayColors(item.hex)}
                    >
                        <Text style={{color: item.name === 'White'  ? "black": "white"}}>{item.name}</Text>
                        <HexColorView hex={item.hex} />
                        <GoFullScreen color={item.hex}/>
                    </Pressable>
                    
                )}
                keyExtractor={(item) => item.name}
                numColumns={2}
            />
        </>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    color_view: {
        flex: 1,
        aspectRatio: 1,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
});
