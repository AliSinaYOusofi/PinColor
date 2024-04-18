import { View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GoFullScreen = ({ color }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    console.log(color, 'col');
    return (
        <>
            <TouchableOpacity
                style={[styles.button, isFullScreen && styles.fullScreen]}
                onPress={toggleFullScreen}
            >
                <Ionicons name="resize" size={24} color="black" />

            </TouchableOpacity>

            <Modal
                visible={isFullScreen}
                transparent={false}
                onRequestClose={toggleFullScreen}
            >
                <View style={[styles.modalContainer, { backgroundColor: color }]}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={toggleFullScreen}
                    >
                        <Ionicons name="close-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 3,
        right: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
    },
    
    fullScreen: {

    },
    
    modalContainer: {
        
        width: "100%",
        height: "100%"
    },
});

export default GoFullScreen;
