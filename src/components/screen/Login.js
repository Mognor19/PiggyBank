import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SocialIcon } from "react-native-elements";
import LoginForm from "../forms/LoginForm";
import theme from "../theme";
import Logo from "../shared/Logo";
import * as Google from "expo-google-app-auth";
import { Context as AuthContext } from "../providers/AuthContext";
import getEnvVars from "../../enviroment";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ThemeProvider } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const { state, google, clearErrorMessage } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { androidClientId, iosClientId } = getEnvVars();
  useEffect(() => {
    if (state.errorMessage) clearErrorMessage();
  }, []);

  useEffect(() => {
    if (state.errorMessage) setError(state.errorMessage);
  }, [state.errorMessage]);

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
        iosClientId: iosClientId,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        google(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <View style={styles.container}>
      <Logo title="Login" />
      <LoginForm navigation={navigation} />
      <SocialIcon
        type="google"
        button={true}
        raised={true}
        onPress={() => signInWithGoogleAsync()}
        title="Login with Google"
        style={styles.googleButton}
        underlayColor={theme.colors.dark}
      />
      <TouchableOpacity
        style={styles.forgot}
        onPress={() => navigation.navigate("Recover")}
      >
        <Text>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.create}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>
          Dont have an account?{" "}
          <Text style={styles.register}>Register Now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.grey,
  },
  forgot: {
    alignItems: "center",
    padding: 5,
  },
  create: {
    justifyContent: "flex-end",
    alignSelf: "center",
    padding: 10,
  },
  register: {
    color: theme.colors.red,
  },
  googleButton: {
    width: width*0.8,
    alignSelf:'center',
    borderRadius:0
  },
});

export default Login;
