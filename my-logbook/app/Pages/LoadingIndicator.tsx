import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'

export default function LoadingIndicator({ LoadingText = "Loading...", IndicatorColour = "#0000ff" }) {

    return (
        <SafeAreaView
            style={[
                styles.container
            ]}>
            <ActivityIndicator size="large" color={IndicatorColour} />
            {LoadingText && <Text style={styles.text}>{LoadingText}</Text>}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
    },
});

