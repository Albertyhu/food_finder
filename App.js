import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme as NavDefaultTheme, DarkTheme as NavDarkTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Home from './screens/HomeScreen.js';
import About from './screens/AboutScreen.js';
import Profile from './screens/ProfileScreen.js';
import Explore from './screens/ExploreScreen.js';
import MainTab, {HomeStackScreen, AboutStackScreen, ProfileStackScreen, ExploreStackScreen,
 ExploreTabScreen, AboutTabScreen, ProfileTabScreen,
 } from './screens/MainTab.js';
import {MainDrawer} from './screens/MainDrawer.js';
import RootScreen from './screens/RootNonMemberScreen.js';
import {generateToken} from './screens/TokenGenerator.js';
import {AuthContext} from './component/AuthContext.js';

const Drawer = createDrawerNavigator();

export default function App() {

const CustomDefaultTheme = {
    ...NavDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
       ...NavDefaultTheme.colors,
       ...PaperDefaultTheme.colors,
       homeTab: '#33DDFF',
       homeIconBackground: '#33DDFF',
       drawerText: '#000',
       backgroundColor: '#23B525',
       linearButton: ['#23B525','#1B861D'],
       buttonText: '#fff',
       borderWidth: 0,
       borderRadius: 15,
       iconColor: '#fff',
       secondaryButtonBackgroundColor: '#fff',
       secondaryButtonText: '#000',
       secondaryIcon: '#000',
    },
}

const CustomDarkTheme = {
    ...NavDarkTheme,
    ...PaperDarkTheme,
    colors:{
        ...NavDarkTheme.colors,
        ...PaperDarkTheme.colors,
        tabBarColor: '#fff',
        homeTab: '#fff',
        text: "#fff",
        iconActive: '#fff',
        iconInactive: 'ABABAB',
        stackBarColor: '#333',
        homeIconBackground: '#333',
        drawerBackgroundcolor: '#fff',
        drawerText: '#000',
        backgroundColor: '#333',
        linearButton: ['#fff','#fff'],
        buttonText: '#000',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
        iconColor: '#000',
        secondaryButtonBackgroundColor: '#333',
        secondaryButtonText: '#fff',
        secondaryIcon: '#fff',
    },
}

const [theme, setTheme] = React.useState(false);
let currentTheme = theme ? CustomDefaultTheme : CustomDarkTheme;

const initialLogin = {
    token: null,
    username: '',
    email: '',
    password: '',
}

const loginReducer = (prevState, action) =>{
switch(action.type){
    case 'RETRIEVE':
        return{...prevState,
            token: action.userToken,
        };
    case 'LOGIN':
        return{...prevState,
            token: action.userToken,
            username: action.id,
            email: action.mail,
            password: action.pass,
        };
    case 'LOGOUT':
        return{
            token: null,
            username: '',
            email: '',
            password: '',
        };
     case 'REGISTER':
        return{
            token: action.token,
            username: action.id,
            password: action.pass,
            email: action.mail,
        };
}
}

const [data, setData] = React.useReducer(loginReducer, initialLogin);

const context = React.useMemo(() =>({
signIn: async (username, email, password, token) =>{
    try{
        await AsyncStorage.setItem('Token', token)

    }catch (e){
        alert(e);
    }
    setData({type: 'LOGIN', id: username, mail: email, pass: password, userToken : token});
},
signOut: async ()=>{
    try{
        await AsyncStorage.removeItem('Token');
    }catch(e){
        alert(e);
    }
    setData({type: 'LOGOUT'});
},
createAccount: async (user, email, password) =>{
    let userToken = generateToken();
    try{
        await AsyncStorage.setItem('Token', userToken);
    }catch (e){
        alert(e);
    }
    setData({type: 'REGISTER', token: userToken, id: user, mail: email, pass: password})
},
toggleTheme: () =>{
    setTheme(theme => !theme)
},
}), []);

useEffect(()=>{
    setTimeout( async ()=>{
        let userToken;
        userToken = null;
        try{
            userToken = await AsyncStorage.getItem('Token')
        } catch(e){
            alert(e);
        }
        if(userToken !== null)
            setData({type: 'RETRIEVE', token: userToken,})
    }, 1000)

},[])

return (
<PaperProvider theme = {currentTheme}>
<AuthContext.Provider value = {context}>
    <NavigationContainer theme = {currentTheme}>
    {data.token !== null ?
        <Drawer.Navigator drawerContent = {props => <MainDrawer {...props} />} >
            <Drawer.Screen name = 'HomeDrawer' component = {MainTab} />
        </Drawer.Navigator>
        :
        <RootScreen />
    }
    </NavigationContainer>
</AuthContext.Provider>
</PaperProvider>
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
