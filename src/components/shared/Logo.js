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
    justifyContent:'center',
    paddingBottom:50,
  },
  logo: {
    width: width * 0.6,
    height: height * 0.25,
    resizeMode: "contain",
  },
  logoTitle:{
    alignSelf:'center',
    fontSize:40,
    fontWeight:'bold',
    color:theme.colors.dark,
  },
});

export default Logo;