import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Switch,
    Button,
    useTheme as usePaperTheme,
} from 'react-native-paper';
import {openDrawer} from '@react-navigation/drawer';

import Home from './HomeScreen.js';
import Profile from './ProfileScreen.js';
import About from './AboutScreen.js';
import Explore from './ExploreScreen.js';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const HomeBarColor = () =>{
    const PaperTheme = usePaperTheme();
    return PaperTheme.dark ? '#333' : '#33DDFF'
}

const AboutBarColor = () =>{
    const PaperTheme = usePaperTheme();
    return PaperTheme.dark ? '#333' : '#33FF58'
}
const ProfileBarColor = () =>{
    const PaperTheme = usePaperTheme();
    return PaperTheme.dark ? '#333' : '#A8FF33'
}
const ExploreBarColor = () =>{
    const PaperTheme = usePaperTheme();
    return PaperTheme.dark ? '#333' :'#FF8333'
}


function MainTab() {
const { colors } = useTheme();

return(
<Tab.Navigator
    initialRouteName = 'Home'
    inactiveColor = '#B0B0B0'
    activeColor = '#fff'
    >
    <Tab.Screen name = 'HomeDrawer' component = {HomeStackScreen} options = {{
        tabBarColor: HomeBarColor(),
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: AboutBarColor(),
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor: ProfileBarColor(),
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: ExploreBarColor(),
        tabBarLabel: 'Explore',
        tabBarIcon: ({color}) => <Icon name = 'navigate-circle-outline' color = {color} size = {25} />
    }}/>
</Tab.Navigator>
)
}

export const AboutTabScreen = () =>{
return(
<Tab.Navigator
    initialRouteName = 'About'
    inactiveColor = '#B0B0B0'
    activeColor = '#fff'
    >
    <Tab.Screen name = 'HomeDrawer' component = {HomeStackScreen} options = {{
        tabBarColor: HomeBarColor(),
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: AboutBarColor(),
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor:  ProfileBarColor(),
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: ExploreBarColor(),
        tabBarLabel: 'Explore',
        tabBarIcon: ({color}) => <Icon name = 'navigate-circle-outline' color = {color} size = {25} />
    }}/>
</Tab.Navigator>
)
}


export const ProfileTabScreen = () =>{
return(
<Tab.Navigator
    initialRouteName = 'Profile'
    inactiveColor = '#B0B0B0'
    activeColor = '#fff'
    >
    <Tab.Screen name = 'HomeDrawer' component = {HomeStackScreen} options = {{
        tabBarColor: HomeBarColor(),
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: AboutBarColor(),
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor:  ProfileBarColor(),
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: ExploreBarColor(),
        tabBarLabel: 'Explore',
        tabBarIcon: ({color}) => <Icon name = 'navigate-circle-outline' color = {color} size = {25} />
    }}/>
</Tab.Navigator>
)
}

export const ExploreTabScreen = () =>{
return(
<Tab.Navigator
    initialRouteName = 'Explore'
    inactiveColor = '#B0B0B0'
    activeColor = '#fff'
    >
    <Tab.Screen name = 'HomeDrawer' component = {HomeStackScreen} options = {{
        tabBarColor: HomeBarColor(),
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: AboutBarColor(),
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor:  ProfileBarColor(),
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: ExploreBarColor(),
        tabBarLabel: 'Explore',
        tabBarIcon: ({color}) => <Icon name = 'navigate-circle-outline' color = {color} size = {25} />
    }}/>
</Tab.Navigator>
)
}

export const HomeStackScreen = ({navigation}) => {
const { colors } = useTheme();
return(
    <HomeStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: HomeBarColor(),
        },
        headerTintColor: '#fff',
    }}>
        <HomeStack.Screen name = 'Home' component = {Home} options = {{
        title: "Home",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = {colors.homeIconBackground} color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </HomeStack.Navigator>
    )
}

export const AboutStackScreen = ({navigation}) => {
return(
    <AboutStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: AboutBarColor(),},
        headerTintColor: '#fff',
    }}>
        <AboutStack.Screen name = 'About' component = {About} options = {{
        title: "About Us",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = {AboutBarColor} color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </AboutStack.Navigator>
    )
}

 export const ProfileStackScreen = ({navigation}) => {
return(
    <ProfileStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: ProfileBarColor(),},
        headerTintColor: '#fff',
    }}>
        <ProfileStack.Screen name = 'Profile' component = {Profile} options = {{
        title: "Profile",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = {ProfileBarColor} color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </ProfileStack.Navigator>
    )
}

export const ExploreStackScreen = ({navigation}) => {
return(
    <ExploreStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: ExploreBarColor(),},
        headerTintColor: '#fff',
    }}>
        <ExploreStack.Screen name = 'Explore' component = {Explore} options = {{
        title: "Explore",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = {ExploreBarColor} color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </ExploreStack.Navigator>
    )
}


export default MainTab;