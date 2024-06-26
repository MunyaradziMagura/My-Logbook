import { BlurView } from 'expo-blur';
import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { List } from 'react-native-paper';
import TripDetails from './ProfileSubComponents/TripDetails';
import { useFonts } from 'expo-font';
export default function TripList() {
    const location = { "coords": { "accuracy": 35, "altitude": 17.99403190612793, "altitudeAccuracy": 3.3440637588500977, "heading": -1, "latitude": -34.8102192325252, "longitude": 138.62078193792792, "speed": -1 }, "timestamp": 1705452190520.556 }
    // trip details visibility
    const [visible, setVisible] = useState(false)
    // Selected trip
    const [selectedItem, setSelectedItem] = useState(null);

    const handleTripSelection = (number, pos) => {
        console.log("works")
        setVisible(true);
        setSelectedItem({ number, pos });
    };

    const [fontsLoaded] = useFonts({
        "Oswald-Bold": require("my-logbook/assets/Font/Oswald/static/Oswald-Bold.ttf"),
        "Oswald-ExtraLight": require("my-logbook/assets/Font/Oswald/static/Oswald-ExtraLight.ttf"),
        "Oswald-Light": require("my-logbook/assets/Font/Oswald/static/Oswald-Light.ttf"),
        "Oswald-Medium": require("my-logbook/assets/Font/Oswald/static/Oswald-Medium.ttf"),
        "Oswald-Regular": require("my-logbook/assets/Font/Oswald/static/Oswald-Regular.ttf"),
        "Oswald-SemiBold": require("my-logbook/assets/Font/Oswald/static/Oswald-SemiBold.ttf"),
    });

    // Ensure the fonts are loaded before rendering the component
    if (!fontsLoaded) return null;

    // read data from local storage
    let a = []
    for (let i = 0; i < 100; i++) {
        a.push(i)
    }

    return (
        <ScrollView style={{ width: '100%', height: '100%' }}>
            <List.Section>
                {a.map((number, pos) => (
                    <BlurView intensity={100} style={styles.itemBlur} key={pos} >
                        <List.Subheader onPress={() => handleTripSelection(number, pos)} >
                            <Text>{number}</Text>
                        </List.Subheader>
                    </BlurView>
                ))}
            </List.Section>
            {visible && <TripDetails setVisible={setVisible} />}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    itemBlur: {
        marginBottom: 10,
        minHeight: 70
    },
});