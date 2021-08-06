import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button, Dimensions, ActivityIndicator, Image} from 'react-native';
import {openDrawer} from '@react-navigation/drawer';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {Svg, Image as ImageSvg} from 'react-native-svg';

export default function App({navigation}){
const [location, setLocation] = React.useState({
 latitude: 0,
 longitude: 0,
 latitudeDelta: 0.0922,
 longitudeDelta: 0,
 loading: false,
})
const window = Dimensions.get('window');
const { width, height }  = window;
/*
useEffect(()=>{
 Geolocation.getCurrentPosition(
        (position) => {
          alert(position);
        },
        (error) => {
          // See error code charts below.
          alert(error)
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

}, [])
*/
return(
<View style = {styles.container}>
{  location.loading ?
    <ActivityIndicator />
    :
    <View style = {styles.container}>
    <Text>Explore</Text>
    <MapView
       provider={PROVIDER_GOOGLE}
       style={styles.map}
       region={{
         latitude: 34.120880,
         longitude: -118.066250,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
        <Marker
          coordinate={{
            latitude: 34.120880,
            longitude: -118.066250,
          }}
          image = {require('../assets/map_marker.png')}
          title = 'Home'
          description = 'This is the headquarters of Albert Hu.'
        >
        <Callout tootip = {true}>
            <View>
                <Text style = {styles.title}>Favorite Restaurant</Text>
                <Text>A short description</Text>


             <Svg width={240} height={120}>
            <ImageSvg href = {{uri: 'https://i.redd.it/2vyiy3iciqf71.jpg'}}  width={'100%'}  height={'100%'} />
            </Svg>
                        </View>
        </Callout>
        </Marker>
     </MapView>
    <Button title = "Open Drawer" onPress = {() => {navigation.openDrawer()}} />
    </View>
    }
</View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
image:{
    width: 50,
    height: 50,
},
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})