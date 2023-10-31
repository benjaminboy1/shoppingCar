/// <reference types="nativewind/types" />

import type {NativeStackScreenProps} from '@react-navigation/native-stack';


export type HomeStacknavigatorParamList = {
    Login: undefined;
    Signup: undefined;
    Onboard: undefined;
    Forgot: undefined;
    Initial: undefined;
    Home: undefined;

};

export type HomeScreenNavigationProp=NativeStackScreenProps<HomeScreenNavigatorParamList, 

Login,
Signup,
Onboard,
Forgot,
Initial,
Home


>