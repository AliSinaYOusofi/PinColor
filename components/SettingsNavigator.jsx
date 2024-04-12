import React from 'react'
import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function SettingsNavigator({}) {

    const navigator = useNavigation();
    return (
        <Pressable onPress={() => navigator.navigate("displaycolors")}>
            <Ionicons name="settings-outline" size={24} color="black" />
        </Pressable>
    )
}
