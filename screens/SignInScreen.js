import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button, TextInput, Image, ImageBackground, TouchableOpacity,  } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Feather from 'react-native-feather';
import * as Animate from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';

import { AuthContext } from'../component/AuthContext.js';
import Users from '../model/users.js';
import SignUp from './SignUpScreen.js';

const SignIn = ({navigation}) =>{

const { signIn } = React.useContext(AuthContext);

const [data, setData] = React.useState({
    login: '',
    password: '',
    securePassword: true,
    isValid: false,
})

const handleLoginInfo = val =>{
    setData({
        ...data,
        login: val});
}

const handlePass = pass =>{
    setData({
    ...data,
    password: pass})
}

const handleSubmission = () =>{
    if(data.login.length > 0 && data.password.length > 0){

    /* ** Original method ** Note: The code didn't work because foundUser elements kept returning as undefined
        const foundUser = Users.filter(val =>{
            return((data.login === val.email || data.login === val.username) && data.password === val.password)
        })
        if(foundUser.length === 0){
            alert("Error: Username or password is incorrect.");
            return;
        }
        signIn(foundUser);
        */

        /*
        if(foundUser.length > 0){
            alert('username = ' + foundUser.username + '\n' +
                    'email = ' + foundUser.email + '\n'
            )
            signIn(foundUser)
        }
        else{
            alert('Login unsuccessful. Either username, email and/or password are invalid.')
        }*/

    let foundUser = false;
        Users.map(val => {
            if((data.login === val.username || data.login === val.email) && data.password === val.password){
                signIn(val.username, val.email, val.password, val.userToken)
                foundUser = true;
            }
        })
    if(!foundUser){
          alert('Login unsuccessful. Username, email and/or password are invalid.\n' +
          'Login = ' + data.login + '\n' +
          'Password = ' + data.password
          )
      }

    }
    else if(data.login.length === 0 && data.password.length > 0){
        alert('Error: Username or email has not been written.')
    }
    else if(data.login.length > 0 && data.password.length === 0 ){
        alert('Error: Password field is empty.')
    }
    else{
        alert('Error: Both fields are empty. Please, write down your username/email and password to log in.')
    }

}

const toggleSecure = () =>{
    setData(
        prevState =>({
            ...data,
            securePassword: !prevState.securePassword,
        })
    )
}

useEffect(()=>{
    if(data.login.length > 0){
        setData({
            ...data,
            isValid: true,
        })
    }
    else{
        setData({
            ...data,
            isValid: false,
        })
    }

}, [data.login.length])

return(
<View style = {styles.container}>
    <View style = {styles.head}>
        <Animate.Image
            source = {require('../assets/logo.png')}
            style = {styles.logo}
            animation = 'bounceIn'
            delay = {2000}
        />
    </View>
    <Animate.View
        style = {styles.body}
        animation = 'fadeInUp'
        delay = {500}
        >
        <Text style = {styles.title}>Sign In</Text>

        <View style = {styles.textInputContainer}>
            <Icon name = 'person-outline' size = {25} style = {styles.icon} color = '#000'/>
            <TextInput
            placeholder = 'Type username or email here'
            onChangeText = {handleLoginInfo}
            style = {styles.TextInput}
            value = {data.login}
            autoCapitalize = 'none'
            />
            {data.isValid ?
                <Icon name = 'checkmark-circle-outline' size = {25} color = '#1BAC1E' style = {styles.icon} />
                :
               <Icon name = 'checkmark-circle-outline' size = {25} color = '#B6B6B6' style = {styles.icon} />
            }
        </View>

        <View style = {styles.textInputContainer}>
            <Icon name = 'key-outline' size = {25} style = {styles.icon} color = '#000'/>
            <TextInput
            placeholder = 'Type your password here'
            onChangeText = {handlePass}
            style = {styles.TextInput}
            value = {data.password}
            secureTextEntry= {data.securePassword}
            autoCapitalize = 'none'
            />
            {data.securePassword ?
                <Icon name = 'eye-off' size = {25} color = '#1BAC1E' style = {styles.icon} onPress = {toggleSecure}/>
                :
               <Icon name = 'eye' size = {25} color = '#B6B6B6' style = {styles.icon} onPress = {toggleSecure} />
            }
        </View>
        <TouchableOpacity onPress = {handleSubmission}>
            <LinearGradient colors = {['#23B525', '#156F16']} style = {styles.buttonContainer}>
                <Text style = {styles.buttonText}>Sign In</Text>
                <Icon name = 'chevron-forward-outline' size = {25} color = '#fff' style = {styles.icon}/>
            </LinearGradient>
        </TouchableOpacity>
        <View>
            <Text style = {{paddingVertical: 10, fontWeight: 'bold'}}>Don't have an account?</Text>
        </View>
        <TouchableOpacity onPress = {()=>navigation.navigate('SignUp')}
            style = {[styles.buttonContainer, {borderColor: '#000', borderWidth: 1}]}>
                <Text style = {styles.signUpButtonText}>Sign Up</Text>
                <Icon name = 'chevron-forward-outline' size = {25} color = '#000' style = {styles.icon}/>
        </TouchableOpacity>
    </Animate.View>
</View>
);
}

export default SignIn;

const styles = StyleSheet.create({
body:{
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    alignItems: 'center',
},
buttonContainer:{
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
buttonText:{
    color: '#fff',
    paddingLeft: 15,
    fontWeight: 'bold',
},
container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#23B525',
     },
head:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
icon:{
    paddingRight: 15,
    paddingVertical: 10,
},
logo:{
    width: 100,
    height: 100,
    marginVertical: 35,
},
signUpButtonText:{
    color: '#000',
    paddingLeft: 15,
    fontWeight: 'bold',
},
TextInput:{
    padding: 5,
    width: '70%',
},
textInputContainer:{
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginVertical: 10,
},
title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
},
})