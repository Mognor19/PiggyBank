import React, { useState } from "react";
import { StyleSheet, View, Dimensions,StyleProp,TextStyle,TextInputProps,TouchableOpacity, Text} from "react-native";
import { Input} from "react-native-elements";
import theme from '../theme';
import Alert from "../shared/Alert";
import {TextInput,Animated} from 'react-native';



const { width, height } = Dimensions.get("screen");

const user = ({navigation}) => {
    
    const User = useState("UserName");
    const Name = useState("Full Name");
    const Email = useState("Email");
    const gmail = useState("piggybank@gmail.com");
    console.log("title pressed");
    

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      <Text 
      style={styles.titleText}>
        {User}
        {"\n"}
        {"\n"}
      </Text>
   
        <Text 
           containerStyle={{paddingHorizontal:width*0.20}}
           containerStyle={{paddingHorizontal:width*0.15}}
           style={styles.body} numberOfLines={5}>{Name}
         </Text>

         <Text 
      style={styles.titleText}>
        {Email}
        {"\n"}
        {"\n"}
      </Text>
   
        <Text 
           containerStyle={{paddingHorizontal:width*0.20}}
           containerStyle={{paddingHorizontal:width*0.15}}
           style={styles.body} numberOfLines={5}>{gmail}
         </Text>
    </Text>     
     
  
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    backgroundColor:theme.colors.white,
    padding:0,
},
 
  baseText: {
    fontFamily: "Cochin",
    justifyContent:'center',
    flex:1,
    justifyContent:'center',
    backgroundColor:theme.colors.grey,
    paddingLeft:73,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    flex:1,
    justifyContent:'center',
    paddingLeft:73,
  },
  bodybox: {
    width:width*0.8,
    height:height*0.05,
    backgroundColor:theme.colors.white,
    flex:1,
    justifyContent:'center',
    paddingLeft:73,
    textAlign:"center",
  },
  body: {
    fontFamily: "Cochin",
    flex:1,
    paddingLeft:20,
  },
});

export default user;