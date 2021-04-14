import React from 'react';
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { Image } from "react-native-elements";
import theme from '../theme';

const { width, height } = Dimensions.get("screen");

const Logo = ({title}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/LogoPiggyBankNoCoin.png')}
      />
      <Text style={styles.logoTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems:'center',
    justifyContent:'center',
  },
  logo: {
    width: width * 0.6,
    height: height * 0.25,
    padding:height*0.06,
    resizeMode: "contain",
    alignSelf:'center',
    color: theme.light.red
  },
  logoTitle:{
    alignSelf:'center',
    fontSize:height*0.04,
    fontWeight:'bold',
    color:theme.light.red,
  },
});

export default Logo;