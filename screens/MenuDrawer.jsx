import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator()

export default function MenuDrawer() {
    return (
        <Drawer.Navigator initialRouteName='home'>
            <Drawer.Screen name="displaycolors" component={require('./FavouriteColors').default} />
            <Drawer.Screen name="home" component={require('./index').default} />
        </Drawer.Navigator>
    )
}
