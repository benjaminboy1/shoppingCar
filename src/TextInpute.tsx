
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {TextInput, View,} from 'react-native'

interface TextInputeProps {
  label: string
  icon?: React.ReactNode
  inputType?: 'text' | 'password'
  keyboardType?: 'email-address' | 'numeric' | 'default'
}


const TextInpute = ({label, icon, inputType, keyboardType}: TextInputeProps) => {
  return ( 
    <View style={{flexDirection:'row',}}>
     {inputType == 'password' ? (
     <TextInput
         placeholder={label}
         keyboardType={keyboardType}
         style={{paddingVertical:0, flex:1, fontSize:18}} 
         secureTextEntry={true}/>
      ) : (
  <TextInput style={{paddingVertical:0, flex:1, fontSize:18}}  placeholder={label}>
    </TextInput>) }
    {icon}

    </View>
   
  
  )
}

export default TextInpute;