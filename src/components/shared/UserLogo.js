import React from 'react';
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { Image } from "react-native-elements";
import theme from '../theme';
import { Avatar } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

const UserLogo = ({title}) => {
  return (
    <View style={styles.container}>
<     View style={styles.box}>
      <Avatar
       size="xlarge"
       rounded
       title="PB"
       onPress={() => console.log("Works!")}
       activeOpacity={0.7}
      />
      </View>
      <br></br>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent:'center',
    paddingBottom:0,
  },
  box:{
    backgroundColor:theme.colors.blue,
    width: width * 0.5,
    height: height * 0.235,
    resizeMode: "contain",
    alignItems:'center',
    paddingTop:5,
    padding:0,
    margin:0,
  },
  logo: {
    width: width * 0.01,
    height: height * 0.01,
    resizeMode: "contain",
    paddingLeft:170,
    paddingTop:100,
    margin:0,
  },
});

export default UserLogo;