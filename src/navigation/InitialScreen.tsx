import { View, Text } from 'react-native'
import React from 'react'
import Login from './Login';
import Signup from './Signup';
import Forgot from './Forgot';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStacknavigatorParamList } from '../../global';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../component/HomeScreen';
import Dashboard from './Dashboard';




const Stack = createStackNavigator<HomeStacknavigatorParamList>();


const InitialScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  )
}

export default InitialScreen;