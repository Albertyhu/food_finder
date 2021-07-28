import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Switch,
    Button,
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

function MainTab() {
return(
<Tab.Navigator
    initialRouteName = 'Home'
    inactiveColor = '#B0B0B0'
    activeColor = '#fff'
    >
    <Tab.Screen name = 'HomeDrawer' component = {HomeStackScreen} options = {{
        tabBarColor: '#33DDFF',
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: '#33FF58',
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor: '#A8FF33',
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: '#FF8333',
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
        tabBarColor: '#33DDFF',
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: '#33FF58',
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor: '#A8FF33',
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: '#FF8333',
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
        tabBarColor: '#33DDFF',
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: '#33FF58',
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor: '#A8FF33',
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: '#FF8333',
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
        tabBarColor: '#33DDFF',
        tabBarLabel: 'Home',
        tabBarIcon: ({color}) => <Icon name = 'home' color = {color} size = {25} />
    }}/>
    <Tab.Screen name = 'About' component = {AboutStackScreen} options = {{
        tabBarColor: '#33FF58',
        tabBarLabel: 'About',
        tabBarIcon: ({color}) => <Icon name = 'albums-outline' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Profile' component = {ProfileStackScreen} options = {{
        tabBarColor: '#A8FF33',
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Icon name = 'ios-person' color = {color} size = {25} />
    }} />
    <Tab.Screen name = 'Explore' component = {ExploreStackScreen} options = {{
        tabBarColor: '#FF8333',
        tabBarLabel: 'Explore',
        tabBarIcon: ({color}) => <Icon name = 'navigate-circle-outline' color = {color} size = {25} />
    }}/>
</Tab.Navigator>
)
}

export const HomeStackScreen = ({navigation}) => {
return(
    <HomeStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: '#33DDFF',
        },
        headerTintColor: '#fff',
    }}>
        <HomeStack.Screen name = 'Home' component = {Home} options = {{
        title: "Home",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = '#33DDFF' color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </HomeStack.Navigator>
    )
}

export const AboutStackScreen = ({navigation}) => {
return(
    <AboutStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: '#33FF58'},
        headerTintColor: '#fff',
    }}>
        <AboutStack.Screen name = 'About' component = {About} options = {{
        title: "About Us",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = '#33FF58' color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </AboutStack.Navigator>
    )
}

 export const ProfileStackScreen = ({navigation}) => {
return(
    <ProfileStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: '#A8FF33'},
        headerTintColor: '#fff',
    }}>
        <ProfileStack.Screen name = 'Profile' component = {Profile} options = {{
        title: "Profile",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = '#A8FF33' color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </ProfileStack.Navigator>
    )
}

export const ExploreStackScreen = ({navigation}) => {
return(
    <ExploreStack.Navigator screenOptions = {{
        headerStyle: {backgroundColor: '#FF8333'},
        headerTintColor: '#fff',
    }}>
        <ExploreStack.Screen name = 'Explore' component = {Explore} options = {{
        title: "Explore",
        headerLeft: ()=> <Icon.Button name = 'ios-menu' backgroundColor = '#FF8333' color = '#fff' size = {25}  style = {{paddingLeft: 20,}} onPress = {() => navigation.openDrawer()} />,
        }}/>
    </ExploreStack.Navigator>
    )
}


export default MainTab;