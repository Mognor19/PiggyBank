import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import UserForm from "../forms/UserForm";
import theme from "../theme";
import UserLogo from "../shared/UserLogo";
import { Context as AuthContext } from "../providers/AuthContext";
const { width, height } = Dimensions.get("screen");


const LogOut = ({ navigation }) => {
  const { state, signout } = useContext(AuthContext);
  const handleLogOut = () => {
    signout();
  };
  return (
    <View style={styles.container}>
      {state.user.fullname === undefined ? (
        <UserLogo picture={state.user.pictureUrl}/>
      ) : (
        <UserLogo
          picture={state.user.pictureUrl}
          title={state.user.fullname.charAt(0)}
        />
      )}
      <UserForm navigation={navigation} />
      <TouchableOpacity style={styles.logout} onPress={handleLogOut}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 0,
  },
  logout: {
    width: width * 0.8,
    alignSelf: "center",
    padding: 8,
    backgroundColor: theme.light.blue,
  },
  logOutText: {
    alignSelf: "center",
    fontSize: 18,
    color: theme.light.text
  },
});

export default LogOut;
