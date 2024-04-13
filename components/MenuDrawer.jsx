import React from 'react'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
export default function MenuDrawer() {
    return (
        <Pressable>
                                <Ionicons name="menu-outline" size={24} color="black" />
                            </Pressable>
    )
}
