
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../../firebase/firebase";
import {HomeStacknavigatorParamList} from "../../global";
import { doc, getDoc } from "firebase/firestore";

type HomeScreenProps = StackScreenProps<HomeStacknavigatorParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState<any | undefined>(null);

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
          <Text style={{ color:"#534564", fontSize: 20 }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
});

export default HomeScreen;