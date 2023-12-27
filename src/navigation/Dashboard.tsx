
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Alert,
  Image,
  ScrollView 
} from "react-native";

import { WINDOW_HEIGHT } from "../utilis";
import React, { useState, useEffect } from "react";

import { Feather } from "@expo/vector-icons";
import { auth, db } from "../../firebase/firebase"
import { doc, getDoc } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";



//export default function Dashboard({ navigation }: { navigation: any })
export default function Dashboard({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState<any | undefined>(null);

  {/* 
    
    const handleSignout = async () => {
    await auth.signOut();
  };
  const Modal = () => {
    Alert.alert("Auth App", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);
  };

  const getData = async () => {
    const docRef = doc(db, "users", "info");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

   return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Welcome Fams!</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={Modal}>
          <Text style={{ color:"#454566", fontSize: 20 }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

 <View className="">
        <View className="bg-gray-400 flex-row justify-around mt-14">
          <View className="flex-row left-8">
          <Text className="font-bold text-base">Welcome</Text>
          <Text className="left-4 text-base ">Benjamin</Text>
          </View>
          <View className="left-8 ">
            <Image className="w-12 h-12 rounded-3xl  " source={require("../../assets/images/dvbenm.jpg")} />
          </View>
        </View>
      </View>

      <View>
        <Text>hello</Text>
        <Text>hello</Text>
      </View>
    
    */}
  
  return (
    <View className="flex-1">
     
      <SafeAreaView>
      <View  style={styles.scrololder}/>
      </SafeAreaView>


    <SafeAreaView className="absolute w-full  bg-slate-800 ">{/*  */}
          <View style={styles.upperHeader}>
                <View style={styles.searchContainer}>
                    <Image source={require('../../assets/images/iconsearch.png')}
                    style={styles.searchIcon} />
                    <TextInput 
                    placeholder="Search here"
                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                    style={styles.searchInput} />
                </View>

                <Image source={require('../../assets/images/bell.png')} style={styles.bellIcon}/>
                <Image source={require('../../assets/images/dvbenm.jpg')} style={styles.AvatarIcon}/>
               
          </View>
          <View style={styles.lowerHeader} >
            <View style={styles.feature}>
            <Image source={require('../../assets/images/bell.png')} style={styles.featureIconCicle}/>
              <Text style={styles.featureName}>HELOP</Text>
            </View>
            <View style={styles.feature}>
            <Image source={require('../../assets/images/bell.png')} style={styles.featureIconCicle}/>
              <Text style={styles.featureName}>HELOP</Text>
            </View>
            <View style={styles.feature}>
            <Image source={require('../../assets/images/bell.png')} style={styles.featureIconCicle}/>
              <Text style={styles.featureName}>HELOP</Text>
            </View>
            <View style={styles.feature}>
            <Image source={require('../../assets/images/bell.png')} style={styles.featureIconCicle}/>
              <Text style={styles.featureName}>HELOP</Text>
            </View>

          </View>
    
    </SafeAreaView>
    <ScrollView>
        <View  style={styles.scrolheader}/>
        <View  style={styles.scrolview}/>
        </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 30,
  },
  scrolheader: {
    height: 90,
  },
  scrololder: {
    height: 52,
  },
  upperHeader: {
    height: 63,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  lowerHeader: {
    height: 100,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  searchIcon: {
      width: 16,
      height: 16,
      marginLeft: 8
  },
  bellIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
},
AvatarIcon: {
  width: 32,
  height: 32,
  borderRadius:16
},
searchInput: {
  position: "absolute",
  width: '100%',
  backgroundColor:"rgba(255, 255, 255, 0.3)",
  color: 'white',
  borderRadius: 4,
  paddingVertical: 4,
  paddingLeft: 32,
},
feature:{
  alignItems: 'center',
},
featureIconCicle: {
  width: 34,
  height: 34,
},
featureName:{
  fontWeight: 'bold',
  fontSize: 11,
  lineHeight: 14,
  color: 'white',
  marginTop: 10,
},

  scrolview: {
      height: WINDOW_HEIGHT * 2,
      backgroundColor: 'white',
  }
});
