import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ForgotScreen from './ForgotScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';





const Stack = createNativeStackNavigator();

const InitialScreen = () => {
  return (
    <Stack.Navigator 
    
    >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
  )
}

export default InitialScreen;