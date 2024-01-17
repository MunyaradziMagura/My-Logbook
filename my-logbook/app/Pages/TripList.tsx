import { BlurView } from 'expo-blur';
import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Dimensions, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { List, PaperProvider, Paragraph, Portal } from 'react-native-paper';

export default function TripList() {
    const [visible, setVisible] = useState(false)
    // read data from local storage
    let a = []
    for (let i = 0; i < 100; i++) {
        a.push(i)
    }

    return (
        <ScrollView style={{ width: '100%', height: '100%' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <BlurView intensity={100} style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {/* Your modal content goes here */}
                        <Text>This is the modal content</Text>

                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Text>Close Modal</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>

            </Modal>

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
        padding: 20,
        borderRadius: 10,
        elevation: 5, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
})