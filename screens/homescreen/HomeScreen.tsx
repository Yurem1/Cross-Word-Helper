import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import NavBar from '../../main_components/NavBar';
import Description from './components/Description';
import Information from './components/Information';

/**
 * @summary 
 * This component should only be used within App.js
 * @param param0 Navigation prop
 * @returns The home screen, and everything related to it.
 */
export default function HomeScreen({navigation}): any {
    return (
        <View style={styles.container}>
            <Description></Description>
            <Information></Information>
            <NavBar navigation={navigation}></NavBar>
        </View>
    );
};

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        zIndex: 1,
        backgroundColor: '#FFD8E4'
    }
});