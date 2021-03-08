import React, { useState } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text} from "react-native";
import { Input} from "react-native-elements";
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import theme from '../theme';
import Alert from "../shared/Alert";

const { width, height } = Dimensions.get("screen");

const user = ({navigation}) => {
    const [UserName, setUserName] = useState("");
    const [FullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <View>
        <Input
        containerStyle={{paddingHorizontal:width*0.20}}
        placeholder="UserName"
        value={UserName}
        onChangeText={setUserName}
        autoCapitalize="none"
      /> 
        <Input
        containerStyle={{paddingHorizontal:width*0.20}}
        placeholder="FullName"
        value={FullName}
        onChangeText={setFullName}
        autoCapitalize="none"
      />
      <Input
        containerStyle={{paddingHorizontal:width*0.20}}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Input
        containerStyle={{paddingHorizontal:width*0.20}}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  login:{
    backgroundColor:theme.colors.blue,
    padding:8,
    width:width*0.8,
    alignSelf:'center'
  },
  loginText:{
    alignSelf:'center',
    fontSize:18,
  },
});

export default user;