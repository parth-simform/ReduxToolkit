import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../module/Login';
import Home from '../module/Home';
import { NavigationStrings } from '../constants';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationStrings.Login} component={Login} />
        <Stack.Screen name={NavigationStrings.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
