import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import * as SystemUI from 'expo-system-ui';
import SettingsNavigator from './components/SettingsNavigator';
import MenuDrawer from './components/MenuDrawer';

SystemUI.setBackgroundColorAsync("white");
const StackNavigator = createNativeStackNavigator()
export default function App({navigation}) {

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
                            <MenuDrawer />
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
                

            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}
