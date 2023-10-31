import React from 'react-native';

import { StyleSheet, Text, View } from 'react-native';
import Login from './src/navigation/LoginScreen';
import Signup from './src/navigation/SignupScreen';
import OnboardScreen from './src/navigation/OnboardScreen';
import HomeScreen from './src/components/HomeScreen';
import Navigations from './src/navigation/Navigations';
import SignupScreen from './src/navigation/SignupScreen';
import Forgot from './src/navigation/Forgot';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/navigation/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStacknavigatorParamList } from './global';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator<HomeStacknavigatorParamList>();

const App = () => {

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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={Forgot} />
      </Stack.Navigator>
 </NavigationContainer>

    );
  } else {
   return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    

      </Stack.Navigator>
    </NavigationContainer>
   )
  }
}


export default App;