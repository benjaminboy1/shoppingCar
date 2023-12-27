import { View, Text } from 'react-native'
import React from 'react'
import Navigations from "./src/navigation/Navigations";
import Dashboard from './src/navigation/Dashboard';



const App = () => {
  return (
    <View className='item-center justify-center flex-1'>
      {/*<Navigations /> */}
      <Navigations/>
    </View>
  )
}

export default App