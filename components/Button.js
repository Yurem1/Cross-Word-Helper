import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Camera from '../hooks/useCamera';

export default function UploadButton() {
  const [isPressed, setPressed] = useState(false);

  const buttonStyle = {
    ...styles.button,
    transform: isPressed ? `scale(.95)` : 'scale(1)',
    backgroundColor: isPressed ? '#625B71' : '#6750A4',
    borderWidth: isPressed ? '1' : '2'
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={.9}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={Camera.useCamera()}
      >
        <View style={buttonStyle}>
          <Text style={styles.text}>Upload Image</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    width: '60%',
    shadowOpacity: 10
  },
  button: {
    marginTop: 90,
    padding: 30,
    borderRadius: 30,
    backgroundColor: '#6750A4',
    borderWidth: '2',
    borderColor: ''
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
