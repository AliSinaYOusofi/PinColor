import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import SettingsNavigator from '../components/SettingsNavigator';
import FavouriteColors from './FavouriteColors';
import Page from '.';
import DisplayColors from './DisplayColors';
import Settings from './Settings';
import AppInfo from './AppInfo';
import ListOfShades from './ListOfShades';

const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName='home'
            
            screenOptions={{
            
                headerStyle: {
                    backgroundColor: 'white',
                },
            
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            
                title: "ColScr",
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerBackVisible: false,
                headerBackTitleVisible: false,
            }}
        >
            <Drawer.Screen
                name="Favourties"
                component={FavouriteColors}
                options={({ navigation, route }) => ({
                    title: 'Favourites',
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate("home")}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </Pressable>
                    ),
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'heart' : 'heart-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                })}
            />

            <Drawer.Screen
                name="home"
                component={Page}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="settings"
                component={Settings}
                options={({ navigation }) => ({
                    title: 'Settings',
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'settings' : 'settings-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate("home")}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </Pressable>
                    ),
                })}
            />
            <Drawer.Screen
                name="shades"
                component={ListOfShades}
                options={({ navigation }) => ({
                    title: 'Shades',
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'color-filter-outline' : 'color-filter-sharp'}
                            size={size}
                            color={color}
                        />
                    ),
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate("home")}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </Pressable>
                    ),
                })}
            />

            <Drawer.Screen
                name="info"
                component={AppInfo}
                options={({ navigation }) => ({
                    title: 'Info',
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate("home")}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </Pressable>
                    ),
                })}
            />
        </Drawer.Navigator>
    );
}
