import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/homescreen/HomeScreen'
import Camera from './screens/camera/Camera';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#7D5260',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Camera'
          component={Camera}
          options={{
            headerStyle: {
              backgroundColor: '#7D5260',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}