import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { StyleSheet } from 'react-native';

export default function MyMapView({ location }) {
    console.log(location)
    return (
        <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.01,

            }}>
            <Marker coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            }}
            />
        </MapView>
    )
}
const styles = StyleSheet.create({
    map: {
        flex: 8.9,
    },
});
