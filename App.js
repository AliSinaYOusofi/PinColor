import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SystemUI from 'expo-system-ui';
import MenuDrawer from './screens/MenuDrawer';
import DisplayColors from './screens/DisplayColors';
import DisplayShadesOfColors from './screens/DisplayShadesOfColors';
import FavouriteColors from './screens/FavouriteColors';
import mobileAds from 'react-native-google-mobile-ads';
const Stack = createNativeStackNavigator()
SystemUI.setBackgroundColorAsync("white");


mobileAds()
.initialize()
.then(() => console.log('Ads initialized'))
.catch(error => console.error(error + " error"));

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
                <Stack.Screen component={DisplayShadesOfColors} name="displayshades" />
                <Stack.Screen component={FavouriteColors} name="favcolors" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
