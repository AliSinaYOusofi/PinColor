import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import SettingsNavigator from './components/SettingsNavigator';
import MenuDrawer from './screens/MenuDrawer';
import DisplayColors from './screens/DisplayColors';

SystemUI.setBackgroundColorAsync("white");
const Stack = createNativeStackNavigator()

export default function App({navigation}) {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen 
                    name="MenuDrawer" 
                    component={MenuDrawer} 
                    options={{ headerShown: false }}
                />

                <Stack.Screen component={DisplayColors} name="displaycolors"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
