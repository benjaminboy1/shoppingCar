
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {TextInput, View,} from 'react-native';


interface TextInputeProps {
  label: string;
  icon?: React.ReactNode;
  value?: string;
  secureTextEntry: boolean;
  
  onChangeText?: (text: string) => void;
  
  
  

  inputType?: 'text' | 'password'
  keyboardType?: 'email-address' | 'numeric' | 'default'
}


const TextInpute = ({label, icon, inputType, keyboardType, onChangeText,}: TextInputeProps) => {
  return ( 
    <View style={{flexDirection:'row',}}>
     {inputType == 'password' ? (
     <TextInput
     
         placeholder={label}
         keyboardType={keyboardType}
         style={{paddingVertical:0, flex:1, fontSize:18}} 
         secureTextEntry={true}
         onChangeText={onChangeText}
         
         
         
         
         
         />
      ) : (
  <TextInput style={{paddingVertical:0, flex:1, fontSize:18}} keyboardType={keyboardType} onChangeText={onChangeText} placeholder={label}>
    </TextInput> ) }
    {icon}

    </View>
   
  
  )
}

export default TextInpute;