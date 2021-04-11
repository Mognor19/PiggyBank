import React, { useContext } from "react";
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

const { width } = Dimensions.get("screen");

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
    minHeight:"100%",
    backgroundColor: theme.colors.grey,
  },
  logout: {
    marginTop:-130,
    borderRadius:4,
    borderTopWidth:1,
    borderTopColor:theme.colors.dark,
    borderBottomWidth:1,
    borderBottomColor:theme.colors.dark,
    backgroundColor: theme.colors.blue,
    paddingVertical:6
  },
  logOutText: {
    alignSelf: "center",
    fontSize: 18,
  },
});

export default LogOut;
