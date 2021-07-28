import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import { DrawerItem, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import {
Switch,
Avatar,
Caption,
Divider,
Drawer,
Paragraph,
Subheading,
Text,
Title,
TouchableRipple
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './HomeScreen.js';
import Profile from './ProfileScreen.js';
import About from './AboutScreen.js';
import Explore from './ExploreScreen.js';
import EditProfile from './EditProfile.js';

const Draw = createDrawerNavigator();

export function MainDrawer (props) {

return(
<DrawerContentScrollView {...props}>
<Drawer.Section>
    <DrawerItem
        label = 'Home'
        onPress = {() => props.navigation.navigate('Home')}
        icon = {({color, size}) => <Icon name = 'home-outline' color = {color} size = {size} />}
    />
    <DrawerItem
        label = 'About'
        onPress = {() => props.navigation.navigate('About')}
        icon = {({color, size}) => <Icon name = 'albums-outline' color = {color} size = {size} />}
    />
    <DrawerItem
        label = 'Profile'
        onPress = {() => props.navigation.navigate('Profile')}
        icon = {({color, size}) => <Icon name = 'ios-person' color = {color} size = {size} />}
    />
    <DrawerItem
        label = 'Explore'
        onPress = {() => props.navigation.navigate('Explore')}
        icon = {({color, size}) => <Icon name = 'map-outline' color = {color} size = {size} />}
    />
    <DrawerItem
        label = 'Edit Profile'
        onPress = {() => props.navigation.navigate('EditProfile')}
        icon = {({color, size}) => <Icon name = 'pencil-outline' color = {color} size = {size} />}
    />
</Drawer.Section>
<Divider />
<Drawer.Section>
    <View>
        <TouchableRipple>
            <View style = {styles.switchContainer}>
                <Text>Dark Theme</Text>
                <Switch />
            </View>
        </TouchableRipple>
    </View>
</Drawer.Section>
<Divider />
<Drawer.Section>
    <DrawerItem
        label = 'Sign Out'
        icon = {({color, size}) => <Icon name = 'exit-outline' size = {25} color = {color} />}
    />
</Drawer.Section>
</DrawerContentScrollView>

)
}

const styles = StyleSheet.create({
sections:{},
container:{
    flex: 1,
},
switchContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    marginLeft: 20,
},
})