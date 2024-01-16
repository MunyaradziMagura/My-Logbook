import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Title, Paragraph, ProgressBar } from 'react-native-paper';


export default function AccountComponent({ Name, LicenseNo, DOB, Class }, props) {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.left}>
                    <Avatar.Image size={80} source={{ uri: 'https://example.com/profile-image.jpg' }} />
                </View>
                <View style={styles.right}>
                    <Title>{Name}</Title>
                    <Paragraph>License No:{LicenseNo}</Paragraph>
                    <Paragraph>DOB: {DOB}</Paragraph>
                    <Paragraph>Class: {Class}</Paragraph>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Title>Day Driving</Title>

                <ProgressBar progress={0.5} testID={'Day Time Driving'} color={'#ffdd00'} style={[styles.ProgressBar, { backgroundColor: '#87CEFA' }]} />
                <Title>Night Driving</Title>

                <ProgressBar progress={0.5} testID={'Night Time Driving'} color={'#87CEFA'} style={[styles.ProgressBar, { backgroundColor: '#f85e00' }]} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        width: '100%',
        height: '100%',
        fontFamily: 'Georgia',
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        marginRight: 16,
    },
    right: {
        flex: 1,
    },
    bottomSection: {
        marginTop: 0,
    },
    ProgressBar: {
        height: '25%',
    },
    title: {
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        fontSize: 18, // Adjust the font size as needed
        marginBottom: 8, // Adjust the margin as needed
    },
});

