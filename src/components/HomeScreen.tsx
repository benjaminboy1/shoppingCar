import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View className="flex items-center justify-center h-full bg-green-200">
      <Text className='text-2xl'>Welcome to</Text>
      <Text className='text-4xl'>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;