
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
  ScrollView,
  Animated,
} from "react-native";

import { WINDOW_HEIGHT } from "../utilis";
import React, { useState, useEffect, useRef } from "react";

import { Feather } from "@expo/vector-icons";
import { auth, db } from "../../firebase/firebase"
import { doc, getDoc } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

//export default function Dashboard({ navigation }: { navigation: any })
export default function Dashboard({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState<any | undefined>(null);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const searchInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }, 
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
      opacity: animatedValue.interpolate({
        inputRange: [0, 25],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
  }
  const featureNameAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }, 
    ],
      opacity: animatedValue.interpolate({
        inputRange: [0, 30],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
  }

  const depositViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [1, 36],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -30],
          extrapolate: 'clamp',
        }),
      },
    ]
  }

  const featureIconCicleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),

  }

  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),

  }
  const carViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [1, 45],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -83],
          extrapolate: 'clamp',
        }),
      },
    ]
  }
  const favoriteViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [1, -5],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, -83],
          extrapolate: 'clamp',
        }),
      },
    ]
  }
  const toolsViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [1, -54],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, -83],
          extrapolate: 'clamp',
        }),
      },
    ]
  }
  const scanViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [1, -100],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, -83],
          extrapolate: 'clamp',
        }),
      },
    ]
  }
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
                    <AnimatedTextInput 
                    placeholder="Search here"
                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                    style={[styles.searchInput, searchInputAnimation]} />
                </View>

                <Image source={require('../../assets/images/bell.png')} style={styles.bellIcon}/>
                <Image source={require('../../assets/images/dvbenm.jpg')} style={styles.AvatarIcon}/>
               
          </View>
          <View style={styles.lowerHeader} >

            <Animated.View style={[styles.feature, carViewAnimation]}>

            <Animated.Image source={require('../../assets/images/car.png')} style={[styles.featureIconCicle, featureIconCicleAnimation]}/>
            <Animated.Image source={require('../../assets/images/car.png')} style={[styles.featureIcons, featureIconAnimation]}/>
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>HELOP</Animated.Text>
            </Animated.View>

            <Animated.View style={[styles.feature, favoriteViewAnimation]}>
            <Animated.Image source={require('../../assets/images/favorite.png')} style={[styles.featureIconCicle, featureIconCicleAnimation]}/>
            <Animated.Image source={require('../../assets/images/favorite.png')} style={[styles.featureIcons, featureIconAnimation]}/>
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>HELOP</Animated.Text>
            </Animated.View>

            <Animated.View style={[styles.feature, toolsViewAnimation]}>
            <Animated.Image source={require('../../assets/images/tools.png')} style={[styles.featureIconCicle, featureIconCicleAnimation]}/>
            <Animated.Image source={require('../../assets/images/tools.png')} style={[styles.featureIcons, featureIconAnimation]}/>
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>HELOP</Animated.Text>
            </Animated.View>

            <Animated.View style={[styles.feature, scanViewAnimation]}>
            <Animated.Image source={require('../../assets/images/scan.png')} style={[styles.featureIconCicle, featureIconCicleAnimation]}/>
            <Animated.Image source={require('../../assets/images/scan.png')} style={[styles.featureIcons, featureIconAnimation]}/>
              <Animated.Text style={[styles.featureName, featureNameAnimation]}>HELOP</Animated.Text>
            </Animated.View>

          </View>
    
    </SafeAreaView>
    <ScrollView
    ref={scrollViewRef}
    onScroll={e => {
      const offsetY = e.nativeEvent.contentOffset.y;
      scrollDirection.current = offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
      lastOffsetY.current = offsetY;
      animatedValue.setValue(offsetY);
    }}
    onScrollEndDrag={() => {
      scrollViewRef.current?.scrollTo({
        y: scrollDirection.current === 'down' ? 100 : 0,
        animated: true,
      })
    }}
    scrollEventThrottle={16}
    >
        <View  style={styles.scrolheader}/>
        <View  style={styles.scrolview}/>
        </ScrollView>
     
    </View>
  );
}
const UPPER_HEADER_HEIGTH = 55;
const LOWER_HEADER_HEIGTH = 122;

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
    height: 90 ,
  },
  scrololder: {
    height: UPPER_HEADER_HEIGTH,
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGTH,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGTH,
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
      width: 20,
      height: 20,
      marginLeft: 8
  },
  bellIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 30,
    top: -2,
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
  width: 26,
  height: 26,
},
featureIcons:{
  width: 20,
  height: 20,
  position: 'absolute',
  top: 8,
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
