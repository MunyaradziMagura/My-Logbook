import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps'
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Location from 'expo-location';


export default function Map() {
  // this object controls all the values for the color of the background of the maps start and stop buttons
  const [getClickedGradient, setClickedGradient] = useState(['#090979', '#00d4ff'])

  // request location permissions
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // boolean to check if we can display the map
  const [displayMap, setDisplayMap] = useState(false);

  // useEffect(() => {
  //   (async () => {

  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return (
  //         <SafeAreaView>
  //           <Text style={{ width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}> ERROR FINDING LOCATION -- Permission to access location was denied </Text>
  //         </SafeAreaView>
  //       )
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //     console.log(location)
  //     setLocation(location);
  //     setDisplayMap(true)
  //   })();
  // }, []);
  (async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return (
        <SafeAreaView>
          <Text style={{ width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}> ERROR FINDING LOCATION -- Permission to access location was denied </Text>
        </SafeAreaView>
      )
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setDisplayMap(true)
  })();

  // get the users current location 

  // track the users current location 

  if (displayMap === false) {

    return (
      <ActivityIndicator size="large" color="#00ff00" style={styles.loading}></ActivityIndicator>

    )

  }
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.01,

        }}>
        <Marker coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }}
        />

      </MapView>
      <Card style={styles.card}>
        <LinearGradient
          // Background Linear Gradient
          colors={getClickedGradient}
          start={{ x: 0, y: 0.5 }} // Left
          end={{ x: 1, y: 0.5 }}   // Right
          style={styles.background}
        />

        <View style={styles.cardActions}>
          <BlurView intensity={100} style={styles.StartBlurContainer}>
            <Button onPress={() => {
              setClickedGradient(['rgba(14,174,87,1)', 'rgba(12,116,117,1)'])
            }}><Text style={styles.text}>GO</Text></Button>
          </BlurView>
          <BlurView intensity={100} style={styles.StopBlurContainer}>

            <Button onPress={() => {
              setClickedGradient(['#fe6603', '#f42f4a'])
            }}><Text style={styles.text} >Stop</Text></Button>
          </BlurView>

        </View>
      </Card>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  map: {
    width: '100%',
    height: '90%',
    flex: 8.9,
  },
  loading: {
    width: '100%',
    height: '100%',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16, // Adjust the padding as needed
    backgroundColor: 'transparent'
  },
  StartBlurContainer: {
    flex: 1,
    textAlign: 'left',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    borderRadius: 20,
  },
  StopBlurContainer: {
    flex: 1,
    textAlign: 'right',
    justifyContent: 'flex-end',
    marginLeft: 20,
    overflow: 'hidden',
    borderRadius: 20,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  card: {
    flex: 1.1,
  },
  text: {
    paddingTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  }
});
