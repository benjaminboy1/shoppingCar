import React from 'react-native';

import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import OnboardScreen from './OnboardScreen';

import Forgot from './ForgotScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStacknavigatorParamList } from '../../global';

import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InitialScreen from './InitialScreen';


const Stack = createStackNavigator<HomeStacknavigatorParamList>();

const Navigations = () => {

  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);


  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch) {
    return  (
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
       headerShown: false,
      gestureEnabled: false,

     }}
      
      >
        <Stack.Screen name="Onboard" component={OnboardScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
  
      </Stack.Navigator>
 </NavigationContainer>

    );
  } else {
   return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
       gestureEnabled: false,
 
      }}
      >
      <Stack.Screen name="Initial" component={InitialScreen} />


      </Stack.Navigator>
    </NavigationContainer>
   )
  }
}


export default Navigations;