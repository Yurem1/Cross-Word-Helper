import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import FetchIcon from '../../../main_components/FetchIcon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function LowerScreen({navigation}): React.JSX.Element {
    const navigateHome = (): void => {
        navigation.navigate('Home');
    }

    const navigateCamera = (): void => {
        navigation.navigate('Camera');
    }

    return (
        <View style={styles.container}>
            <View style={styles.home_button}>
                <TouchableOpacity onPress={navigateHome}>
                    <Text style={styles.text}>
                        <FetchIcon name='camera'/> Home
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.camera_button}>
                <TouchableOpacity onPress={navigateCamera}>
                    <Text style={styles.text}>
                        <FetchIcon name='home'/> Camera
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles: any = StyleSheet.create({
    container: {
        bottom: 0,
        padding: 40,
        width: '100%',
        backgroundColor: '#7D5260',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    }
});