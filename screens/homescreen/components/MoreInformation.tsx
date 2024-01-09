import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonPress from '../../../main_components/ButtonPress';
import FetchIcon from '../../../main_components/FetchIcon';
import InfoText from '../../../assets/text/screen.json';

/**
 * @summary A blueprint for components that require flags to be displayed
 */
interface ToggleInformation {
    onPress: boolean;
}

/**
 * @summary A component that gets rendered when the parameter `onPress` is true.
 * This should only be used within Information.tsx or any component that requires it.
 * Do not use inside a screen component.
 * @param onPress a boolean flag
 * @returns More information, if clicked
 */
export default function MoreInformation({onPress}: ToggleInformation): React.JSX.Element {
    const [isPressed, setPressed]: any = useState<boolean>(false);
  
    const dynamicStyle: any = {
      ...styles.information,
      transform: isPressed ? 'scale(.95)' : 'scale(1)'
    }
  
    return onPress && (
      <View style={styles.container}>
        <ButtonPress opacity={.9} flags={setPressed}>
          <View style={dynamicStyle}>
            <Text style={styles.text_title}>
              <FetchIcon name="camera"/> {InfoText.info.steps.step_one}
            </Text>
            <Text style={styles.text_normal}>
              <FetchIcon name="image"/> {InfoText.info.steps.step_two}
            </Text>
            <Text style={styles.text_normal}>
              <FetchIcon name="tools"/> {InfoText.info.steps.step_three}
            </Text>
            <Text style={styles.text_normal}>
              <FetchIcon name="grin-beam"/> {InfoText.info.steps.step_four}
            </Text>
          </View>
        </ButtonPress>
      </View>
      );
};

/**
 * @summary MoreInformation stylesheet
 */
const styles = StyleSheet.create({
  container: {
    top: 10,
  },
  information: {
    padding: 10,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 1},
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
