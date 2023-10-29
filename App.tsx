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

const Stack = createStackNavigator<HomeStacknavigatorParamList>();

const App = () => {
  return (
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
}

export default App;