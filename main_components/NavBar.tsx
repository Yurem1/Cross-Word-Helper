import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FetchIcon from './FetchIcon';

/**
 * @summary The App Navigation Bar, contains buttons for all screens
 * @param param0 The navigation prop required for switching screens
 * @returns A navigation bar element
 */
export default function NavBar({navigation}): React.JSX.Element {
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
                        <FetchIcon name='home' color='white'/> Home
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.camera_button}>
                <TouchableOpacity onPress={navigateCamera}>
                    <Text style={styles.text}>
                        <FetchIcon name='camera' color='white'/> Camera
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

/**
 * @summary These styles are customized to always position the element at the bottom of the screen,
 *  regarless of the positioning of any element within the `<View>` element, etc
 */
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
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    }
});