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
  const [locationMap, setLocationMap] = useState(null);

  // message to user
  const [message, setMessage] = useState('Click "GO" to Start')
  useEffect(() => {


  }, [])

  const getLocation = () => (async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setMessage('Permission to access location was denied.\n\n iOS (General Steps):\n\n1. Open "Settings" on your iOS device.\n\n2. Scroll down and find your app in the list.\n\n3. Tap on your app to open its settings.\n\n4. Look for the "Location" option and tap it.\n\n5. Choose the appropriate location access option (e.g., "While Using the App") to grant location access.\n\n\n**Android (General Steps):**\n\n1. Open "Settings" on your Android device.\n\n2. Scroll down and select "Apps" or "Application Manager."\n\n3. Find and tap on your app in the list.\n\n4. Go to the "Permissions" section.\n\n5. Toggle the switch next to "Location" to grant location access. ')

    }
    const asyncLocation = await Location.getCurrentPositionAsync({});
    setLocationMap(<MyMapView location={asyncLocation} />);
  })();

  return (
    <SafeAreaView style={styles.container}>
      {/* here is where the map is visualised */
        (locationMap == null) ? <LoadingIndicator LoadingText={message} IndicatorColour='#90EE90' FlexSize={8.7} sizeFont={30} /> : locationMap
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
              setMessage("Getting your location, Please hold...")
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
