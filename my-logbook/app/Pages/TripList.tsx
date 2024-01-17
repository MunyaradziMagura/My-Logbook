import { BlurView } from 'expo-blur';
import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Dimensions, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider, IconButton, List } from 'react-native-paper';
import MyMapView from './MyMapView';
import { useFonts } from 'expo-font';
export default function TripList() {
    const location = { "coords": { "accuracy": 35, "altitude": 17.99403190612793, "altitudeAccuracy": 3.3440637588500977, "heading": -1, "latitude": -34.8102192325252, "longitude": 138.62078193792792, "speed": -1 }, "timestamp": 1705452190520.556 }
    const [visible, setVisible] = useState(false)
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
            <SafeAreaView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => setVisible(false)}
                >
                    <BlurView intensity={100} style={styles.modalContainer}>
                        <ScrollView>
                            <View style={styles.modalContent}>
                                {/* Map view -- modal view of the clicked rout for the user*/}
                                <View style={styles.mapView}>
                                    <MyMapView location={location} />
                                </View>
                                {/* this is the rount infomation */}
                                <View style={styles.rountInfomation}>
                                    {/* Date and exit button*/}
                                    <View style={[styles.dateContainer, styles.infomationContainer]}>
                                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                            <IconButton
                                                icon="car-arrow-left"
                                                size={50}
                                                iconColor={'yellow'}
                                                onPress={() => setVisible(false)}
                                            /></View>
                                        <View style={{ flex: 8, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 30, fontFamily: 'Oswald-Bold', color: '#282b2d' }}>12/11/2023</Text>
                                        </View>
                                    </View>
                                    {/* Time */}
                                    <View style={[styles.timeContainer, styles.infomationContainer, { flexDirection: 'row' }]}>
                                        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 20, fontFamily: 'Oswald-Bold', color: '#282b2d', textAlign: 'center', textAlignVertical: 'center' }}>Mount Gambier</Text></View>
                                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}><IconButton
                                            icon="arrow-right"
                                            size={30}
                                            iconColor={'#d0d0d0'}
                                            onPress={() => setVisible(false)}
                                        /></View>
                                        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 25, fontFamily: 'Oswald-Bold', color: '#282b2d', textAlign: 'center', textAlignVertical: 'center' }}>Adelaide</Text></View>
                                    </View>
                                    {/* Time  */}
                                    <View style={[styles.locationContainer, styles.infomationContainer]}>
                                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 25, fontFamily: 'Oswald-Bold', color: '#282b2d', textAlign: 'center', textAlignVertical: 'center' }}>6:30 pm</Text></View>
                                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}><IconButton
                                            icon="arrow-right"
                                            size={30}
                                            iconColor={'#d0d0d0'}
                                            onPress={() => setVisible(false)}
                                        /></View>
                                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 25, fontFamily: 'Oswald-Bold', color: '#282b2d' }}>7:45 pm</Text></View>
                                        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <View style={{ flex: 6 }}>
                                                <Text style={{ fontSize: 20, fontFamily: 'Oswald-Bold', color: '#282b2d' }}>2 H</Text>
                                                <Divider bold={true} />
                                            </View>

                                            <View style={{ flex: 6 }}>
                                                <Text style={{ fontSize: 20, fontFamily: 'Oswald-Bold', color: '#282b2d' }}>15 M</Text>
                                            </View>
                                        </View>

                                    </View>

                                    {/* Conditions */}
                                    <View style={[styles.conditionsContainer, styles.infomationContainer, { flexDirection: 'row' }]}>
                                        <View style={{ flex: 4 }}></View>
                                        <View style={{ flex: 4 }}></View>
                                        <View style={{ flex: 4 }}></View>
                                    </View>
                                    {/* Qualified supervising driver infomation */}
                                    <View style={[styles.supervisorContainer, styles.infomationContainer]}></View>
                                    {/*  Learner Infomation */}
                                    <View style={[styles.learnerContainer, styles.infomationContainer]}></View>
                                </View>
                                {/* Close Modal button */}

                            </View>
                        </ScrollView>
                    </BlurView>
                </Modal>
            </SafeAreaView>

            <List.Section>
                {a.map((number, pos) => (
                    <BlurView intensity={100} style={styles.itemBlur} key={pos} >
                        <List.Subheader onPress={() => setVisible(true)} >
                            <Text>{number + pos}</Text>
                        </List.Subheader>
                    </BlurView>
                ))}
            </List.Section>
        </ScrollView>

    )

}
const styles = StyleSheet.create({
    itemBlur: {
        marginBottom: 10,
        minHeight: 70
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 2,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flex: 1,
        flexDirection: 'column',
        margin: Dimensions.get('window').width * 0.1
    },
    mapView: {
        flex: 2,
    },
    rountInfomation: {
        flex: 4,
        flexDirection: 'column',
        backgroundColor: '#f6f6f6'

    },
    infomationContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 10,
        margin: 12,

    },
    dateContainer: {

    },
    locationContainer: {


    },
    timeContainer: {

    },
    conditionsContainer: {

    },
    supervisorContainer: {

    },
    learnerContainer: {

    },

})