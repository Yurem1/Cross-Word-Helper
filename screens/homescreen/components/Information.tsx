import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import InformationText from './homescreen_json/screen.json'

export default function Information(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.text}>
        {InformationText.homescreen.information.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: 20,
  },
  information: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FFFFFF'
  },
  text: {
  }
});

