import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';

export default function AppInfo() {
    //https://www.paypal.com/paypalme/aliyousufi99
    const openPayPal = () => {
        Linking.openURL('https://www.paypal.com/paypalme/aliyousufi99');
    };
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>App Info</Text>
            
            <Text style={styles.text}>
                This app is designed to showcase different colors and their combinations.
            </Text>
            
            <Text style={styles.text}>
                You can explore various color combinations and save your favorite colors.
            </Text>
            
            <Text style={styles.text}>
                Enjoy using the app and have fun with colors!
            </Text>

            <View style={styles.rateContainer}>
                <TouchableOpacity style={styles.rateButton}>
                    <Ionicons name="star" size={24} color="gold" />
                    <Text style={styles.rateText}>Rate Us on Play Store</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={openPayPal} style={styles.payPalButton}>
                <FontAwesome name="paypal" size={24} color="white" />
                <Text style={styles.payPalButtonText}>Support on PayPal</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    rateContainer: {
        marginTop: 20,
    },
    rateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    rateText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    payPalButton: {
        marginTop: 20,
        backgroundColor: '#0070ba',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    payPalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 10,
    },
});
