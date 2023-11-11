import React, { useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import  HomeScreen from "../component/HomeScreen";
import InitialScreen from "./InitialScreen";
import { StackScreenProps } from "@react-navigation/stack"

import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { HomeStacknavigatorParamList } from "../../global";
import Dashboard from "./Dashboard";

//const Stack = createNativeStackNavigator();


const Stack = createNativeStackNavigator<HomeStacknavigatorParamList>();

const AuthStackScreen = () => {
    const [user, setUser] = useState<User | null>(null);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        console.log("user", user);
        setUser(user);
      });
    }, []);
  
    return (
      //   {user ? <AuthStack /> : <InitialScreenOnStart />}
     
        <Stack.Navigator>
          { user ? (
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
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
      
    );
  }

export default AuthStackScreen;