import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  })();

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text)
  }

  return (
    <View >
      <Text>{text}</Text>
    </View>
  );
}