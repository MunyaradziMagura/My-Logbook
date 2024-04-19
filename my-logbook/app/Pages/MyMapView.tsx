import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default function MyMapView({ location, track }) {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.01,
      }}
    >
      {/* Marker for current location */}
      <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        title="Current Location"
        description={`Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`}
      />

      {/* Polyline to show the track */}
      {track.length > 1 && (
        <Polyline
          coordinates={track}
          strokeColor="#FF0000"
          strokeWidth={9}
          lineCap="round"
          lineJoin="round"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 8.8,
  },
});
