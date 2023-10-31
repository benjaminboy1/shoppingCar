
import { useState, useEffect } from "react";

import { auth } from "../../firebase/firebase";
import { User, onAuthStateChanged } from "firebase/auth";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import InitialScreen from "./InitialScreen";
import HomeScreen from "../components/HomeScreen";
import { HomeStacknavigatorParamList } from "../../global";




const Stack = createNativeStackNavigator<HomeStacknavigatorParamList>();




export default function AuthStack() {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        console.log("user", user);
        setUser(user);
      });
    }, []);
  
    return (
      //   {user ? <AuthStack /> : <InitialScreenOnStart />}
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Initial"
              component={InitialScreen}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }