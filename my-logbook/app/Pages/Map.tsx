import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Location from 'expo-location';
import LoadingIndicator from './LoadingIndicator';
import MyMapView from './MyMapView';

export default function Map() {
  const [getClickedGradient, setClickedGradient] = useState(['#090979', '#00d4ff']);
  const [locationMap, setLocationMap] = useState(null);
  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState('Click "GO" to Start');
  const [track, setTrack] = useState([]); // Array to store the user's location history

  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let granted = await Location.requestForegroundPermissionsAsync();
      if (granted.status !== 'granted') {
        setMessage('Permission to access location was denied...');
        return;
      }

      // Start location updates
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 120000 },
        (newLocation) => {
          if (newLocation !== track.pop()){
            console.log(track)
          
            setLocation(newLocation);
            setTrack((prevTrack) => [...prevTrack, { latitude: newLocation.coords.latitude, longitude: newLocation.coords.longitude }]);
            if (mapRef.current) {
              mapRef.current.fitToCoordinates(track, { edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }, animated: true });
            }
            getLocation()
          }
        }
      );
    })();

    if (locationMap === null) {
      setLocationMap(<LoadingIndicator LoadingText={message} IndicatorColour='#90EE90' FlexSize={8.7} sizeFont={30} />);
    }
  }, [location, locationMap, track]);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setMessage('Permission to access location was denied...');
      return;
    }

    const asyncLocation = await Location.getCurrentPositionAsync({});
    setLocation(asyncLocation);
    setTrack([{ latitude: asyncLocation.coords.latitude, longitude: asyncLocation.coords.longitude }]);
    setLocationMap(<MyMapView location={asyncLocation} track={track} ref={mapRef} />);
  };

  return (
    <SafeAreaView style={styles.container}>
      {locationMap === null ? (
        <LoadingIndicator LoadingText={message} IndicatorColour='#90EE90' FlexSize={8.7} sizeFont={30} />
      ) : (
        locationMap
      )}

      <Card style={styles.card}>
        <LinearGradient
          colors={getClickedGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.background}
        />
        <View style={styles.cardActions}>
          <BlurView intensity={100} style={styles.StartBlurContainer}>
            <Button
              onPress={() => {
                setClickedGradient(['rgba(14,174,87,1)', 'rgba(12,116,117,1)']);
                setMessage('Getting your location, Please hold...');
                getLocation();
              }}
            >
              <Text style={styles.text}>GO</Text>
            </Button>
          </BlurView>
          <BlurView intensity={100} style={styles.StopBlurContainer}>
            <Button
              onPress={() => {
                setClickedGradient(['#fe6603', '#f42f4a']);
                // Stop location updates if needed
              }}
            >
              <Text style={styles.text}>Stop</Text>
            </Button>
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
    padding: 16,
    backgroundColor: 'transparent',
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
    color: '#fff',
  },
});
