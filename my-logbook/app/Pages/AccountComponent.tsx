import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Title, Paragraph, ProgressBar } from 'react-native-paper';
import { useFonts } from 'expo-font'
export default function AccountComponent({ Name, LicenseNo, DOB, Class }, props) {
    const [fontsLoaded] = useFonts({
        "Oswald-Bold": require("my-logbook/assets/Font/Oswald/static/Oswald-Bold.ttf"),
        "Oswald-ExtraLight": require("my-logbook/assets/Font/Oswald/static/Oswald-ExtraLight.ttf"),
        "Oswald-Light": require("my-logbook/assets/Font/Oswald/static/Oswald-Light.ttf"),
        "Oswald-Medium": require("my-logbook/assets/Font/Oswald/static/Oswald-Medium.ttf"),
        "Oswald-Regular": require("my-logbook/assets/Font/Oswald/static/Oswald-Regular.ttf"),
        "Oswald-SemiBold": require("my-logbook/assets/Font/Oswald/static/Oswald-SemiBold.ttf"),

    })
    // if the font is not loaded
    if (!fontsLoaded) {
        return undefined;
    } else {
        console.log("Fonts loaded")
    }
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.left}>
                    <Avatar.Image size={80} source={{ uri: 'https://example.com/profile-image.jpg' }} />
                </View>
                <View style={styles.right}>
                    <Title style={styles.title}>{Name}</Title>
                    <View style={styles.infomation}>
                        <Paragraph style={styles.paragraph}>{LicenseNo}</Paragraph>
                        <Paragraph style={styles.paragraph}>{DOB}</Paragraph>
                        <Paragraph style={styles.paragraph}>{Class}</Paragraph>
                    </View>
                    <View style={styles.infomation}>
                        <Paragraph style={[styles.paragraph, { color: '#fff' }]}>License No</Paragraph>
                        <Paragraph style={[styles.paragraph, { color: '#fff' }]}>DOB</Paragraph>
                        <Paragraph style={[styles.paragraph, { color: '#fff' }]}>Class</Paragraph>
                    </View>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.progressBarContainer}>
                    <Title style={styles.title}>Day Driving</Title>
                    <ProgressBar progress={0.5} testID={'Day Time Driving'} color={'#ffdd00'} style={styles.ProgressBar} />
                </View>
                <View style={styles.progressBarContainer}>
                    <Title style={styles.title}>Night Driving</Title>
                    <ProgressBar progress={0.5} testID={'Night Time Driving'} color={'#87CEFA'} style={styles.ProgressBar} />
                </View>
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
        fontFamily: 'Oswald-Regular',
    },
    infomation: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    paragraph: {
        marginRight: 30,
        fontSize: 18,
        fontFamily: 'Oswald-SemiBold'
    },
    body: {
        fontFamily: 'Oswald-Regular',
        fontSize: 1
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
    progressBarContainer: {
        marginBottom: -20, // Adjust the margin as needed
    },
    ProgressBar: {
        height: '30%',
    },
    title: {
        fontFamily: 'Oswald-Bold',
        color: '#fff',
        fontSize: 18, // Adjust the font size as needed
        marginBottom: 2, // Adjust the margin as needed
    },
});

