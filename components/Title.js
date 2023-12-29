import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export function Title() {
    const [isLoaded, error] = useFonts({
        'RubikScribble-Regular': require('../assets/fonts/RubikScribble-Regular.ttf')
    });

    if(!isLoaded) {
        return <Text>Loading Text...</Text>
    } else if (error != null) {
        return <Text>{error}</Text>
    }

    return (
        <View>
            <Text style={styles.text}>Cross Word Helper</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 20,
        fontFamily: 'RubikScribble-Regular'
    }
});