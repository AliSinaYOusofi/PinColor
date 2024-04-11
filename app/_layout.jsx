import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    const navigator = useNavigation()
    return (
        <Stack 
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: 'white',
                    },

                    headerTintColor: 'black',
                    
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    title: "ColScr",

                    headerRight: () => (
                        <Pressable onPress={() => navigator.navigate("settings")}>
                            <Ionicons name="settings-outline" size={24} color="black" />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Pressable>
                            <Ionicons name="menu-outline" size={24} color="black" />
                        </Pressable>
                    ),
                    
                    headerTitleAlign: 'center',
                    
                    headerShadowVisible: false,
                    
                    headerBackVisible: false,
                    
                    headerBackTitleVisible: false,
                }
            }
        />
    )
}
