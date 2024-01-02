import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Screen from './components/Screen';
import Information from './components/Information';

export default function HomeScreen(): any {
    return (
        <View style={styles.container}>
            <Screen></Screen>
            <Information></Information>
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