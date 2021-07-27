import React from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './SignInScreen.js';
import SignUp from './SignUpScreen.js';
import Splash from './SplashScreen.js';

const Root = createStackNavigator();

const RootStack = () =>{
return(
    <Root.Navigator screenOptions = {{
        headerShown: false,
    }}>
        <Root.Screen name = 'Splash' component = {Splash} options = {{
            title: 'Welcome'
        }}/>
        <Root.Screen name = 'SignUp' component = {SignUp} options = {{
            title: 'Sign Out'
        }}/>
        <Root.Screen name = 'SignIn' component = {SignIn} options = {{
            title: 'Sign In'
        }}/>

    </Root.Navigator>
)
}

export default RootStack;