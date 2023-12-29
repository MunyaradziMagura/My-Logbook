import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
export default function LoadingIndicator({ LoadingText = "Loading...", IndicatorColour = "#0000ff", FlexSize = 1 }) {

    const styles = StyleSheet.create({
        container: {
            flex: FlexSize,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            marginTop: 10,
            fontSize: 16,
        },
    });
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



