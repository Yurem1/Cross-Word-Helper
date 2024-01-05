import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LowerScreen(): React.JSX.Element {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles: any = StyleSheet.create({
    container: {
        bottom: 0,
        width: '100%',
        padding: 40,
        backgroundColor: '#7D5260',
        position: 'absolute',
    }
});