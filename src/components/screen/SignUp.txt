import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import Logo from "../shared/Logo";
import SignUpForm from "../forms/SignUpForm";
import theme from "../theme";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo title="Sign Up" />
      <SignUpForm navigation={navigation} />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Already got an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.backgroundWhite,
  },
});

export default Signup;