import React from 'react'
import { StyleSheet, View,Text, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps'
import { Card, Button } from 'react-native-paper';


export default function Map() {
  return (
    <>
      

        <MapView style={styles.map} 
    initialRegion={{
    latitude: -34.9263,
    longitude: 138.5995,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}/>
   <SafeAreaView>
        <Card>
          <View style={styles.cardActions}>
            <Button style={styles.startButton}>Start</Button>
            <Button style={styles.stopButton}>Stop</Button>
          </View>
        </Card>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16, // Adjust the padding as needed
  },
  stopButton: {
    // alignSelf: 'flex-end', // No longer needed
  },
  startButton: {},
});