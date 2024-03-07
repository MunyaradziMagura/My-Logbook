import React from 'react';
import { StyleSheet, View } from 'react-native';
import AccountComponent from './AccountComponent';
import TripList from './TripList'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.profileSection}>
        {/* First Third */}
        <AccountComponent LicenseNo={"DF7810"} Name={'Jane Doe'} DOB={'11/12/1999'} Class={'C'} />

      </SafeAreaView>
      <View style={styles.listSection}>
        {/* Second Third */}
        <TripList />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  profileSection: {
    flex: 1,
    backgroundColor: '#001eff', // Set a background color for better visualization
  },
  listSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f20000', // Set a background color for better visualization
  },
});

