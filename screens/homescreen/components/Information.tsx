import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import FetchIcon from '../../../main_components/FetchIcon';

import InformationText from '../../../assets/text/screen.json';

interface ToggleInformation {
  onPress: boolean
}

export default function Information(): React.JSX.Element {
  const [
    infoFlags, 
    setInfoFlags
  ]: any = useState<boolean>(false)

  const [
    pressFlags,
    setPressFlags
  ]: any = useState<boolean>(false)

  const dynamicStyle: any = {
    ...styles.information,
    transform: pressFlags ? 'scale(.95)' : 'scale(1)'
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
      activeOpacity={.8}
      onPressIn={(): void => setPressFlags(true)}
      onPressOut={(): void => setPressFlags(false)}
      onPress={(): void => infoFlags ? setInfoFlags(false) : setInfoFlags(true)}>
        <View style={dynamicStyle}>
          <Text style={styles.text_title}>
            {InformationText.info.title} <FontAwesome5 name="info-circle" size={15} color="black"/>
          </Text>
        </View>
      </TouchableOpacity>
      <MoreInformation onPress={infoFlags}>
      </MoreInformation>
    </View>
  );
};

function MoreInformation({onPress}: ToggleInformation): React.JSX.Element {
  const [
    isPressed,
    setPressed
  ]: any = useState<boolean>(false);

  const dynamicStyle: any = {
    ...styles.moreInformation,
    transform: isPressed ? 'scale(.95)' : 'scale(1)'
  }

  return onPress && (
    <View style={{...styles.container, top:10}}>
      <TouchableOpacity
      activeOpacity={.9}
      onPressIn={(): void => setPressed(true)}
      onPressOut={(): void => setPressed(false)}
      >
        <View style={dynamicStyle}>
          <Text style={styles.text_title}>
            <FetchIcon 
            Type={FontAwesome5}
            name="camera" 
            /> {InformationText.info.steps.step_one}
          </Text>
          <Text style={styles.text_normal}>
            <FetchIcon 
            Type={FontAwesome5}
            name="image" 
            /> {InformationText.info.steps.step_two}
          </Text>
          <Text style={styles.text_normal}>
            <FetchIcon
            Type={FontAwesome5} 
            name="tools" 
              /> {InformationText.info.steps.step_three}
          </Text>
          <Text style={styles.text_normal}>
            <FetchIcon
            Type={FontAwesome5}
            name="grin-beam" 
              /> {InformationText.info.steps.step_four}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: 20,
  },
  icon: {
    flexDirection: 'row',
  },
  information: {
    padding: 10,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 1 
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowColor: 'black',
    backgroundColor: '#FFFFFF',
  },
  moreInformation: {
    padding: 10,
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 1 
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowColor: 'black',
    backgroundColor: '#FFFFFF',
  },
  text_title: {
    textAlign: 'center',
    fontWeight: '500',
  },
  text_normal: {
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 5
  }
});