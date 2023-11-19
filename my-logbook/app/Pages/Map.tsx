import React, { useState } from 'react'
import { StyleSheet, View,Text, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps'
import { Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';


export default function Map() {
  // this object controls all the values for the color of the background of the maps start and stop buttons
  const [getClickedGradient, setClickedGradient] = useState(['#090979','#00d4ff'])


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
        <LinearGradient
        // Background Linear Gradient
        colors={getClickedGradient}
        start={{ x: 0, y: 0.5 }} // Left
        end={{ x: 1, y: 0.5 }}   // Right
        style={styles.background}
      />

          <View style={styles.cardActions}>
          <BlurView intensity={100} style={styles.StartBlurContainer}>
          <Button  onPress={() => {
              setClickedGradient(['rgba(14,174,87,1)','rgba(12,116,117,1)'])
            }}><Text style={styles.text}>GO</Text></Button>
        </BlurView>
        <BlurView intensity={100} style={styles.StopBlurContainer}>

        <Button onPress={() => {
              setClickedGradient(['#fe6603','#f42f4a'])
            }}><Text style={styles.text} >Stop</Text></Button>
        </BlurView>

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
    backgroundColor: 'transparent'
  },
  StartBlurContainer:{
    flex: 1,
    textAlign: 'left',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    borderRadius: 20,
    },
    StopBlurContainer:{
      flex: 1,
      textAlign: 'right',
      justifyContent: 'flex-end',
      marginLeft:20,
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
  text:{
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  }
});