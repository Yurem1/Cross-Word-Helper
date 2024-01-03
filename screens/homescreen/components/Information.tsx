import React, { Dispatch, SetStateAction, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import InformationText from '../text/screen.json'

interface ToggleInformation {
  onPress: boolean
}

function MoreInformation({onPress}: ToggleInformation): React.JSX.Element {
  return onPress && (
    <View style={styles.moreInformation}>
      <Text style={styles.text}>
      {'\u2192'} {InformationText.homescreen.info.more_info.title}
      </Text>
      <Text>
        Another day, another victory for the og..
      </Text>
    </View>
  );
};

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
          <Text style={styles.text}>
            {InformationText.homescreen.info.title}
          </Text>
        </View>
      </TouchableOpacity>
      <MoreInformation onPress={infoFlags}>
      </MoreInformation>
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: 20,
  },
  information: {
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    backgroundColor: '#FFFFFF',
  },
  moreInformation: {
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderTopColor: 'black',
    backgroundColor: '#FFFFFF',
  },
  text: {
    textAlign: 'center',
  }
});