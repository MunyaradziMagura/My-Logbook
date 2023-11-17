import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native-paper';
import { useState } from 'react';
export default function App() {
 const [text, setText] = useState(1)
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button icon="camera" mode="contained" onPress={() => setText(text + 1)}>
    Press me
  </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
