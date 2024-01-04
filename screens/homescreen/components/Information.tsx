import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ButtonPress from '../../../main_components/ButtonPress';
import InfoText from '../../../assets/text/screen.json';
import MoreInformation from '../components/MoreInformation'

interface ToggleInformation {
  onPress: boolean
}

export default function Information(): React.JSX.Element {
  const [infoFlags, setInfoFlags]: any = useState<boolean>(false)
  const [pressFlags,setPressFlags]: any = useState<boolean>(false)

  const onPress = (): void => {
    return infoFlags ? setInfoFlags(false) : setInfoFlags(true)
  }
  
  const dynamicStyle: any = {
    ...styles.information,
    transform: pressFlags ? 'scale(.95)' : 'scale(1)'
  }

  return (
    <View style={styles.container}>
      <ButtonPress opacity={.8} flags={setPressFlags} press={onPress}>
        <View style={dynamicStyle}>
          <Text style={styles.text_title}>
            {InfoText.info.title} <FontAwesome5 name="info-circle" size={15} color="black"/>
          </Text>
        </View>
      </ButtonPress>
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowColor: 'black',
    backgroundColor: '#FFFFFF',
  },
  text_title: {
    textAlign: 'center',
    fontWeight: '500',
  }
});