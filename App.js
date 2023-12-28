import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { UploadButton } from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start on your app!</Text>
      <UploadButton scale='.95' opacity={0.9}></UploadButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
