import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../global';


const Forgot = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <View className='flex-1 items-center justify-center bg-gray-400'>
      <Text className='text-4xl font-semibold'>Forgot</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Forgot;