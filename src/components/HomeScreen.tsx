import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
   <View className="bg-green-500 flex-1 justify-center items-center">
      <Text>HomeScreen</Text>
   </View>
  )
}

export default HomeScreen;