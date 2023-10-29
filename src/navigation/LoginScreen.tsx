import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

import TextInpute from '../TextInpute';
import SignupScreen from './SignupScreen';
import Forgot from './Forgot';

import { useFonts } from 'expo-font';
import Google from '../../assets/images/misc/Google.svg';
import Twitte from "../../assets/images/misc/Twitte.svg";
import Facebook from "../../assets/images/misc/Facebook.svg";

import { HomeScreenNavigationProp } from '../../global';

const {height, width} = Dimensions.get('window');

import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [fontsLoaded] = useFonts({
   'YoungSerif-Regular': require('../../assets/fonts/YoungSerif-Regular.ttf'),
    'AutourOne-Regular': require('../../assets/fonts/AutourOne-Regular.ttf'),
  })
  if (!fontsLoaded){
    return undefined;
  }



  return (
    <SafeAreaView className=" ">
      <View className="items-center justify-center mt-[40] ">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} style={{height:hp(35), width:wp(70)}} className="object-fill"  source={require("../../assets/images/loginer.png")}/>
      </View>


      {/** title and form */}
      <View className="mt-2">

      {/** title */}
        <View className="flex items-center">
        <Animated.Text entering={FadeInLeft.delay(200).duration(1000).springify()} style={{ fontFamily: 'YoungSerif-Regular' }} className="text-4xl font-bold tracking-wider">Login</Animated.Text>
        </View>

      {/** form */}
        <View className="flex items-center mx-4 space-y-4">
          
            <Animated.View entering={FadeInLeft.delay(200).duration(1000).springify()} className="bg-black/5 p-3 rounded-2xl w-full">  
              <TextInpute label={"Email"} icon={<MaterialIcons  className="" name="email" size={24} color="black"/>} />
            </Animated.View>
           <Animated.View entering={FadeInRight.delay(200).duration(1000).springify()}  className="bg-black/5 p-3 rounded-2xl w-full">
           <TextInpute  label={"Password"} icon={<MaterialIcons name="lock" size={24} color="black" />}
            inputType="password"
            //fieldButtonFunction={() => {}}
            />         
           
           </Animated.View>

            <Animated.View entering={FadeInUp.delay(200).duration(1000)}>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text className="left-36 ">Forgot</Text>
            </TouchableOpacity>
            </Animated.View>
           

          <Animated.View entering={FadeInDown.delay(200).duration(1000)} className="w-full top-2">
            <TouchableOpacity className="bg-gray-500 p-3 rounded-2xl">
              <Text style={{ fontFamily: 'YoungSerif-Regular' }} className='text-white text-xl font-bold text-center'>Login</Text>
            </TouchableOpacity>
            
          </Animated.View>
          <Animated.View style={{top:15}} entering={FadeInUp.delay(200).duration(1000)} className="items-center top-2">
            <Text>Or Login With...</Text>
          </Animated.View>

          {/**Social media Login with */}
          <View className="top-2 flex-row space-x-20 ">
            <Animated.View entering={FadeInLeft.delay(200).duration(1000)}>
            <TouchableOpacity  className=" bg-black/5 p-3 rounded-md ">
              <Google width={24} height={24}/>
            </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(200).duration(1000)}>
            <TouchableOpacity  className=" bg-black/5 p-3 rounded-md ">
              <Twitte width={24} height={24}/>
            </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(200).duration(1000)}>
            <TouchableOpacity  className=" bg-black/5 p-3 rounded-md ">
              <Facebook width={24} height={24}/>
            </TouchableOpacity>
            </Animated.View>
            


          </View>
          <Animated.View style={{top:15}} entering={FadeInDown.delay(200).duration(1000)} className="flex-row justify-center">
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text className="text-sky-700">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
       
      </View>
    </View>
       
    </SafeAreaView>
  )
}

export default LoginScreen;