import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView, TextInput} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import Animated, {useSharedValue,useAnimatedStyle, withSpring} from 'react-native-reanimated';

const EditProfile = () =>{

const [image, setImage] = React.useState('https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg')
const [ openPosition, setPos ] = React.useState(false)
const [blur, setBlur ] = React.useState(false);
const [data, setData] = React.useState({
    userName: '',
    email: '',
    password: '',
    confirmPass: '',
    country: '',
})

const handleUsername = val =>{
    setData({
        ...data,
        userName: val,
    })
}

const handleEmail = val =>{
    setData({
        ...data,
        email:  val,
    })
}

const handlePassword = val =>{
    setData({
        ...data,
        password:  val,
    })
}

const handleConfirmPass = val =>{
    setData({
        ...data,
        confirmPass: val,
    })
}

const handleCountry = val =>{
    setData({
        ...data,
        country: val,
    })
}

let ref = React.createRef(null);
const fall = useSharedValue(0);

const renderContent = () =>(
    <View style = {styles.panel}>
        <TouchableOpacity style = {styles.button} onPress = {openLibrary} >
            <View>
            <Text style = {styles.buttonText}>Upload Photo</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {openCamera} >
            <View>
            <Text style = {styles.buttonText}>Take Picture</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {closeBSheet} style = {[styles.button, {marginBottom: 50}]}>
            <Text style = {styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
    </View>
)

const renderHeader = () =>(
    <View style = {styles.header}>
        <View style = {styles.eclipse} />
    </View>
)

const openBSheet = () =>{
    setPos(true);
}

const closeBSheet = () => {
    setPos(false);
}

const toggleBottomSheet = () =>{
    setPos(openPosition => !openPosition)
}

/*Code for blurring the background when bottom sheet is up*/
let onBlur = useSharedValue(false)

const blurBackground = () =>{
    onBlur.value = true;
}

const sharpenBackground = () =>{
    onBlur.value = false;
}

const opacityChange = useAnimatedStyle(()=>{
return{
    opacity: withSpring(onBlur.value ? 0.3 : 1.0)
}
})

useEffect(()=>{
    if(openPosition){
        ref.current.snapTo(0);
        setBlur(true)
    }
    else{
        ref.current.snapTo(1);
        setBlur(false)
    }
}, [openPosition])

/*Code for profile pic edit*/
const openLibrary = async ()=>{
const currRef = ref;
let options = {
    mediaType: 'photo',
    quality: 1,
    aspect: [4, 3],
    };

let result = await ImagePicker.launchImageLibraryAsync(options);
if(!result.cancelled){
    setImage(result.uri);
    closeBSheet;
}
else{
    closeBSheet;
}
    /*this part is necessary because the app tends to lose track of the DOM after the photo library opens*/
ref = currRef;
}

const openCamera = async () =>{
    const currRef = ref;
let options = {
    mediaType: 'photo',
    quality: 1,
    aspect: [4, 3],
};
let result = await ImagePicker.launchCameraAsync(options)
if(!result.cancelled){
    setImage(result.uri);
    closeBSheet;
}
else{
    closeBSheet;
}
    /*this part is necessary because the app tends to lose track of the DOM after the device's camera opens*/
ref = currRef;
}

return(
<SafeAreaView style = {styles.container}>
<BottomSheet
    ref = {ref}
    snapPoints = {['40%', '5%']}
    renderHeader = {renderHeader}
    renderContent = {renderContent}
    initialSnap = {1}
    enableGestureInteraction = {true}
    enabledContentGestureInteraction={false}
    style = {{paddingBottom: 250}}
    onOpenEnd = {openBSheet, blurBackground}
    onCloseEnd = {closeBSheet, sharpenBackground}

/>
<Animated.View style={opacityChange}>
<ScrollView>
<View style={styles.profileContainer}>
    <ImageBackground
        source={{uri: image}}
        style = {styles.profilePic}>
        <TouchableOpacity onPress = {toggleBottomSheet}>
        <Image source = {require('../assets/white_camera_icon.png')} color = '#FFF' size = {50} />
        </TouchableOpacity>
     </ImageBackground>
</View>
<View style = {{alignItems: 'center', }}>
    <Text style = {styles.title}>Edit your profile</Text>
    <Text style = {styles.subtitle}>Edit your personal information here. If you don't want to change certain information, leave the corresponding field blank.</Text>
</View>
<View style = {{alignItems: 'center'}}>
{/* username */}
<View style = {styles.inputContainer}>
<Text style = {styles.fieldTitle}>Username</Text>
<TextInput
    value = {data.userName}
    onChangeText = {handleUsername}
    placeholder='Type your username here'
    style = {styles.textInput}
/>
</View>

{/* email */}
<View style = {styles.inputContainer}>
<Text style = {styles.fieldTitle}>Email</Text>
<TextInput
    value = {data.email}
    onChangeText = {handleEmail}
    placeholder='Type your email here'
    style = {styles.textInput}
/>
</View>

{/* password */}
<View style = {styles.inputContainer}>
<Text style = {styles.fieldTitle}>Password</Text>
<TextInput
    value = {data.password}
    onChangeText = {handlePassword}
    placeholder='Type your password here'
    style = {styles.textInput}
/>
</View>

{/* Confirm Password */}
<View style = {styles.inputContainer}>
<Text style = {styles.fieldTitle}>Confirm your password</Text>
<TextInput
    value = {data.confirmPass}
    onChangeText = {handleConfirmPass}
    placeholder='Retype your password here for confirmation'
    style = {styles.textInput}
/>
</View>

{/* country */}
<View style = {styles.inputContainer}>
<Text style = {styles.fieldTitle}>Country</Text>
<TextInput
    value = {data.country}
    onChangeText = {handleCountry}
    placeholder='Type your country here'
    style = {styles.textInput}
/>
</View>
{/*Submit button */}
<TouchableOpacity style = {[styles.button, {marginBottom: 100}]} onPress = '' >
    <Text style = {styles.buttonText}>Submit Edits</Text>
</TouchableOpacity>

</View>

</ScrollView>
</Animated.View>
</SafeAreaView>
)
}

export default EditProfile;

const styles = StyleSheet.create({

button:{
    backgroundColor: '#F76900',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '50%',
},
buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 10,
},
container:{
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
},
eclipse:{
    width: 50,
    height: 5,
    backgroundColor: '#565656',
    borderRadius: 50,
    marginVertical: 25,
},
fieldTitle:{
    fontSize: 15,
    color: '#000',
    justifyContent: 'flex-start',
},
header: {
    borderWidth: 1,
    borderColor: '#979797',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
},
inputContainer:{
    marginVertical: 10,
    width: '95%',
    marginLeft: 0,
    marginRight: 0,
},

panel:{
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 100,
},
profileContainer:{
    alignItems: 'center',
},
profilePic:{
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
},
title:{
    fontWeight: 'bold',
    fontSize: 30,
},
subtitle:{
    fontSize: 12,
    color: '#9B9B9B',
    paddingLeft: 15,
    paddingRight: 15,
},
textInput:{
    padding: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: '#9B9B9B'
},
})