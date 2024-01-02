import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import ScreenText from '../components/homescreen_json/screen.json';

export default function Screen(): React.JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.text_title}>
            {ScreenText.homescreen.screen.title}
          </Text>
        </View>
        <View>
          <Text style={styles.text_description}>
            {ScreenText.homescreen.screen.description}
          </Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'relative',
  },
  title_container: {
    marginTop: 10,
    marginBottom: 5
  },
  text_title: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center'
  },
  text_description: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'center'
  }
});

