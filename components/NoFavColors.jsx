import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons from react-native-vector-icons

const NoFavoritesComponent = () => {
    return (
        <View style={styles.noFavoritesContainer}>
            <FontAwesome5 name="heart-broken" size={50} color="#ccc" />
            <Text style={styles.noFavoritesText}>No favorite colors added</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    noFavoritesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Set background color
    },
    noFavoritesText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default NoFavoritesComponent;
