/// <reference types="nativewind/types" />

import type {NativeStackScreenProps} from '@react-navigation/native-stack';


export type HomeStacknavigatorParamList = {
    Login: undefined;
    Signup: undefined;
    Onboard: undefined;
    Forgot: undefined;
     Home: undefined;
     Onboard: undefined;
     Initial: undefined;
     Dashboard: undefined;
     Navigations: undefined;
     AuthStack: undefined;
     
     

};

export type HomeScreenNavigationProp=NativeStackScreenProps<HomeScreenNavigatorParamList, 

Login,
Signup,
Onboard,
Forgot,
Initial,
Home,
Dashboard,
Navigations,
AuthStack,


>