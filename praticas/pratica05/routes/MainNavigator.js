import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home.js';
import Perfil from '../screens/Perfil.js';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
