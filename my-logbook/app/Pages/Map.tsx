import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Location from 'expo-location';
import LoadingIndicator from './LoadingIndicator';
import MyMapView from './MyMapView';
export default function Map() {
  // this object controls all the values for the color of the background of the maps start and stop buttons
  const [getClickedGradient, setClickedGradient] = useState(['#090979', '#00d4ff'])

  // request location permissions
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {


  }, [])

  const getLocation = () => (async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return (
        <LoadingIndicator LoadingText={'ERROR FINDING LOCATION -- Permission to access location was denied' + errorMsg} IndicatorColour='#D70040' />
      )
    }
    const asyncLocation = await Location.getCurrentPositionAsync({});
    setLocation(asyncLocation);
  })();

  return (
    <SafeAreaView style={styles.container}>
      {/* here is where the map is visualised */
        (location == null) ? <LoadingIndicator LoadingText='Click Start' IndicatorColour='#90EE90' FlexSize={10} /> : <MyMapView location={location} />
      }

      <Card style={styles.card}>
        <LinearGradient
          // Background Linear Gradient
          colors={getClickedGradient}
          start={{ x: 0, y: 0.5 }} // Left
          end={{ x: 1, y: 0.5 }}   // Right
          style={styles.background}
        />
        {/* start and stop button */}
        <View style={styles.cardActions}>
          {/* blur button */}
          <BlurView intensity={100} style={styles.StartBlurContainer}>
            <Button onPress={() => {
              setClickedGradient(['rgba(14,174,87,1)', 'rgba(12,116,117,1)'])
              getLocation()
            }}><Text style={styles.text}>GO</Text></Button>
          </BlurView>
          <BlurView intensity={100} style={styles.StopBlurContainer}>

            <Button onPress={() => {
              setClickedGradient(['#fe6603', '#f42f4a'])
            }}>
              <Text style={styles.text} >Stop</Text></Button>
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
