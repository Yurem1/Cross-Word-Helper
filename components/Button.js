import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function TouchableButton({ value, scale, opacity }) {
  const [isPressed, setPressed] = useState(false);

  const buttonStyle = {
    ...style.button,
    transform: isPressed ? `scale(${scale})` : 'scale(1)',
  };

  return (
    <TouchableOpacity
      activeOpacity={opacity}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={buttonStyle}>
        <Text style={style.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function UploadButton() {
  return (
    <View style={style.container}>
      <TouchableButton value="Upload Image" scale=".9" opacity={0.8} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 0,
    margin: 10,
    width: '50%',
  },
  button: {
    transform: '',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#6750A4',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
