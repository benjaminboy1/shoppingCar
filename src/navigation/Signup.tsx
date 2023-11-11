import { View, Text, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react';

import CheckBox from "expo-checkbox";


import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons'; 
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

import TextInpute from '../TextInpute';
import { useFonts } from 'expo-font';
import Google from '../../assets/images/misc/Google.svg';
import Twitte from "../../assets/images/misc/Twitte.svg";
import Facebook from "../../assets/images/misc/Facebook.svg";





import { auth, db } from '../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";


const {height, width} = Dimensions.get('window');
export default function Signup({ navigation }: { navigation: any }) {
  
  
  //const navigation = useNavigation<HomeScreenNavigationProp>();

  const [agree, setAgree] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<number | string>("");
  const [loading, setLoading] = useState<boolean>(false);
 
  const handleSignup = async () => {
    setLoading(true);
    //const success =
     await createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoading(false);
        setDoc(doc(db, "users", user.uid), {
          Name: username,
          Email: email,
          PhoneNumber: phone,
          CreatedAt: new Date().toUTCString(),
        });
       
      })
      .then(() => alert("account created successfully 🎉"))
      .catch((err: any) => {
        alert(err.message);
      });
      //navigation.navigate('Home'); 
  };


  const [fontsLoaded] = useFonts({
   'YoungSerif-Regular': require('../../assets/fonts/YoungSerif-Regular.ttf'),
    'AutourOne-Regular': require('../../assets/fonts/AutourOne-Regular.ttf'),
  })
  if (!fontsLoaded){
    return undefined;
  }



  return (
    <KeyboardAvoidingView 
  style={{ flexDirection: 'column',justifyContent: 'center'}}
  behavior={Platform.OS == "ios" ? "padding" : "height"} 
  keyboardVerticalOffset={10}
  enabled>

      {/** title */}

        <View className="mt-[90] items-center justify-center">
          <Animated.Text entering={FadeInLeft.delay(200).duration(1000).springify()} style={{ fontFamily: 'AutourOne-Regular' }} className="text-4xl font-bold tracking-wider">Create Account</Animated.Text>
          <Animated.Text entering={FadeInRight.delay(200).duration(1000).springify()} style={{ fontFamily: 'AutourOne-Regular' }} className="text-2xl">To get started now! </Animated.Text>
        </View>
      {/** title and form */}
      <View className="mt-8">

      
      {/** form */}
       <View>

       
        <View className="flex items-center mx-4 space-y-4">


              <Animated.View entering={FadeInLeft.delay(200).duration(1000).springify()} className="bg-black/5 p-3 rounded-2xl w-full">  
                  <TextInpute
                  
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                  keyboardType="default"
                  secureTextEntry={false}

                  label={"Names"} icon={<MaterialIcons name="person" size={24} color="black" />} />
                </Animated.View>

               <Animated.View entering={FadeInLeft.delay(200).duration(1000).springify()} className="bg-black/5 p-3 rounded-2xl w-full">  
                  <TextInpute
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                 secureTextEntry={false}

                  label={"Email Adress"} icon={<MaterialIcons  className="" name="email" size={24} color="black"/>} />
               </Animated.View>

              <Animated.View entering={FadeInLeft.delay(200).duration(1000).springify()} className="bg-black/5 p-3 rounded-2xl w-full">  
              <TextInpute
              value={phone?.toString()}
              keyboardType="numeric"
              onChangeText={(text) => setPhone(text)}
              secureTextEntry={false}
              label={"Phone Number"} icon={<MaterialIcons name="phone" size={24} color="black" />} />
              </Animated.View>
               
               <Animated.View entering={FadeInRight.delay(200).duration(1000).springify()}  className="bg-black/5 p-3 rounded-2xl w-full">
              <TextInpute
              
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              
              label={"Confirm Password"} icon={<Ionicons name="md-shield-checkmark-sharp" size={24} color="black" />}
               inputType="password"
                //fieldButtonFunction={() => {}}
                />         
            </Animated.View>

          </View>

        

            <Animated.View entering={FadeInUp.delay(200).duration(1000)} className="flex-row p-2">
                <View className="left-2 mr-4">
                <CheckBox
                  
                  
                    value={agree}
                   onValueChange={() => setAgree(!agree)}
                   color={agree ? "#4630EB" : "#4630EB"}
                    />
                </View>
                  
                    <Text className="text-gray-600">Agree with </Text>
                      <TouchableOpacity>
                         <Text className="font-bold">Term & Condition</Text>
                      </TouchableOpacity>
           
             
            </Animated.View>
           
            <View className="justify-center m-2">
            <Animated.View  entering={FadeInDown.delay(200).duration(1000)} className=" top-9">
            <TouchableOpacity 
            onPress={handleSignup}
            //onPress={()=> navigation.navigate('Home')}
            
            disabled={!agree} className="bg-gray-500 p-3 rounded-2xl">
              <Text  style={{ fontFamily: 'YoungSerif-Regular' }} className='text-white text-xl font-bold text-center'>
              {loading ? "Creating account..." : "Create Account"}
              </Text>
            </TouchableOpacity>
            
          </Animated.View>
            </View>
        
          

         
          <Animated.View style={{top:50}} entering={FadeInDown.delay(200).duration(1000)} className="flex-row justify-center">
            <Text>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text className="text-sky-700">LogIn</Text>
            </TouchableOpacity>
          </Animated.View>
       
      </View>
    </View>
       
    </KeyboardAvoidingView>
  )
}

//export default Signup;