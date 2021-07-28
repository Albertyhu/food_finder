import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import Home from './screens/HomeScreen.js';
import About from './screens/AboutScreen.js';
import Profile from './screens/ProfileScreen.js';
import Explore from './screens/ExploreScreen.js';
import MainTab, {HomeStackScreen, AboutStackScreen, ProfileStackScreen, ExploreStackScreen,
 ExploreTabScreen, AboutTabScreen, ProfileTabScreen,
 } from './screens/MainTab.js';
import {MainDrawer} from './screens/MainDrawer.js';
import RootScreen from './screens/RootNonMemberScreen.js';

const Drawer = createDrawerNavigator();

export default function App() {

const [data, setData] = React.useState({
    token: null,
});

  return (
    <NavigationContainer>
    {data.token === null ?
        <RootScreen />
        :
        <Drawer.Navigator drawerContent = {props => <MainDrawer {...props} />} >
            <Drawer.Screen name = 'HomeDrawer' component = {MainTab} />
        </Drawer.Navigator>
    }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
