import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import SettingsNavigator from './components/SettingsNavigator';
import MenuDrawer from './screens/MenuDrawer';

SystemUI.setBackgroundColorAsync("white");
const StackNavigator = createNativeStackNavigator()

export default function App({navigation}) {
    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <NavigationContainer>
            <StackNavigator.Navigator
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
                            <SettingsNavigator />
                        ),
                        headerLeft: () => (
                            <Pressable onPress={() => setShowDrawer(prev => ! prev)}>
                                <Ionicons name="menu-outline" size={25}/>
                            </Pressable>
                        ),
                        
                        headerTitleAlign: 'center',
                        
                        headerShadowVisible: false,
                        
                        headerBackVisible: false,
                        
                        headerBackTitleVisible: false,
                    }
                }
            >
                <StackNavigator.Screen name="home" component={require('./screens/index').default} />
                <StackNavigator.Screen name="displaycolors" component={require('./screens/DisplayColors').default} />
                <StackNavigator.Screen name="settings" component={require('./screens/Settings').default} />
                
            </StackNavigator.Navigator>
            
            <MenuDrawer />
        
        </NavigationContainer>
    )
}
