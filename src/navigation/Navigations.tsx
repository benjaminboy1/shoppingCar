import { View, Text } from 'react-native'
import React from 'react'

import OnboardScreen from './OnboardScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const  Navigations = (props) => {

    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboard" component={OnboardScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
        </NavigationContainer>
        
      );

    }
        
      
      
export default Navigations;