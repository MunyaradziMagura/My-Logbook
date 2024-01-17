import { BlurView } from 'expo-blur';
import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Dimensions, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { List } from 'react-native-paper';
import MyMapView from './MyMapView';
export default function TripList() {
    const location = { "coords": { "accuracy": 35, "altitude": 17.99403190612793, "altitudeAccuracy": 3.3440637588500977, "heading": -1, "latitude": -34.8102192325252, "longitude": 138.62078193792792, "speed": -1 }, "timestamp": 1705452190520.556 }
    const [visible, setVisible] = useState(false)
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
                                    <View style={styles.dateContainer}>

                                    </View>
                                    {/* Location  */}
                                    <View style={styles.locationContainer}></View>
                                    {/* Time */}
                                    <View style={styles.timeContainer}></View>
                                    {/* Conditions */}
                                    <View style={styles.conditionsContainer}></View>
                                    {/* Qualified supervising driver infomation */}
                                    <View style={styles.supervisorContainer}></View>
                                    {/*  Learner Infomation */}
                                    <View style={styles.learnerContainer}></View>
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
        flexDirection: 'column'
    },
    dateContainer: {
        flex: 1,
        backgroundColor: 'green'
    },
    locationContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    timeContainer: {
        flex: 1,
        backgroundColor: 'blue'
    },
    conditionsContainer: {
        flex: 1,
        backgroundColor: 'orange'
    },
    supervisorContainer: {
        flex: 1,
        backgroundColor: 'grey'
    },
    learnerContainer: {
        flex: 1,
        backgroundColor: 'purple'
    },

})