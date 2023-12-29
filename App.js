import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Title } from './components/Title';
import { UploadButton } from './components/Button';
import { DisplayLogo } from './components/Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <DisplayLogo></DisplayLogo>
      <UploadButton scale='.95' opacity={0.9}></UploadButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
