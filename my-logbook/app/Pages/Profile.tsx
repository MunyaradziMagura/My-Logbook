import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Profile() {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
      <View style={{ flex: 3, backgroundColor: 'green' }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

