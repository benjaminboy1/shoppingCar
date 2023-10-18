import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
const OnboardScreen = () => {

  //const deviceHight = Dimensions.get('window').height;
 // const deviceWidth = Dimensions.get('window').width;

  //const showDimensions = () => {
  //  console.log(deviceHight + " " + deviceWidth);
  //}


  const [fontsLoaded] = useFonts({
    'YoungSerif-Regular': require('../../assets/fonts/YoungSerif-Regular.ttf'),
  })
  if (!fontsLoaded){
    return undefined;
  }
  return (
    <View style={{height:hp(115), width:wp(100)}} className=" bg-gray-700">
       <StatusBar style="light"/>
        <View className="h-15 right-1">
        <Animated.Image entering={FadeInLeft.delay(200).duration(1000).springify().damping(3).mass(2)} className="object-cover h-96 w-96 -mt-[-89]" source={require("../../assets/images/rannge.png")}/>
        </View>
      <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()} style={{height:hp(12), width:wp(100)}} className="items-center justify-center">
        <Text style={{ fontFamily: 'YoungSerif-Regular', fontSize: 35, color:'white' }} className="">Premium Cars.</Text>
        <Text style={{ fontFamily: 'YoungSerif-Regular', fontSize: 35, color:'white' }}>Enjoye the Luxury</Text>    
      </Animated.View>
      <View className="items-center justify-center p-1">
        <Animated.Text entering={FadeInDown.delay(200).duration(1000).springify()} style={{ fontFamily: 'YoungSerif-Regular', fontSize: 14, }} className="text-gray-400 mt-8 ">Make all of your dreams reality with us by making amazing choice. And be serve wherever you are around the world, safe and secure !</Animated.Text>
        </View>  
      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="justify-center items-center mt-[35]">
      <TouchableOpacity className="items-center justify-center bg-slate-200 h-12 w-80 rounded-xl ">
        <Text style={{ fontFamily: 'YoungSerif-Regular', fontSize: 23, }} className="text-gray-700">Let's Go</Text>
      </TouchableOpacity>
      </Animated.View>
     
    </View>
  )
}

export default OnboardScreen