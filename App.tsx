import { View, Text } from 'react-native'
import React from 'react'
import Navigations from "./src/navigation/Navigations";
import HomeScreen from './src/components/HomeScreen';

const App = () => {
  return (
    <View className='item-center justify-center flex-1'>
      <Navigations />
    </View>
  )
}

export default App