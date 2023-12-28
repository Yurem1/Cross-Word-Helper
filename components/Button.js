import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export function UploadButton({scale, opacity}) {
  const [isPressed, setPressed] = useState(false);

  const buttonStyle = {
    ...style.button,
    transform: isPressed ? `scale(${scale})` : 'scale(1)',
  };

  return (
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={opacity}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <View style={buttonStyle}>
          <Text style={style.text}>Upload Image</Text>
        </View>
      </TouchableOpacity>
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
