import React, { useEffect, useState, } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts as ExpoUseFonts } from 'expo-font';

import useFontClass from '../components/hooks/useFonts'

export default function Title() {
    const isFontLoaded = useFontClass.useFonts({
        'Rubik-Doodle-Shadow-Regular': require('../assets/fonts/Rubik-Doodle-Shadow-Regular.ttf')
    });
    
    if(isFontLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cross Word Helper</Text>
                <Text style={styles.description}>Press the button and upload your image for scanning</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        flex: 1
    },
    title: {
        color: '#21005D',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: 'Rubik-Doodle-Shadow-Regular'
    },
    description: {
        color: '#381E72',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
});