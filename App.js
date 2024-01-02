import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/homescreen/HomeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name='Home Screen'
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#7D5260',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {

                fontWeight: 'bold',
              }
            }}>
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
);
}
