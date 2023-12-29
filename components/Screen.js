import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import CrossWordSgv from '../assets/Cross-Word-Helper-Logo.png';

export function DisplayLogo() {
    return (
      <View style={style.container}>
        <Image source={CrossWordSgv}/>
      </View>
    );
}

const style = StyleSheet.create({
  container: {
    margin: 50,
  }
});

