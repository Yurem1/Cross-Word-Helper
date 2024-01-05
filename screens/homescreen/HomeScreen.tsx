import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Description from './components/Description';
import Information from './components/Information';
import LowerScreen from './components/LowerScreen';

export default function HomeScreen(): any {
    return (
        <View style={styles.container}>
            <Description></Description>
            <Information></Information>
            <LowerScreen></LowerScreen>
        </View>
    );
};

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        zIndex: 1,
        backgroundColor: '#FFD8E4'
    }
});