import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text} from "react-native";
import { Input} from "react-native-elements";
import { validate } from "email-validator";
import theme from '../theme';
import Alert from "../shared/Alert";
import { Context as AuthContext } from "../providers/AuthContext";

const { width } = Dimensions.get("screen");

const LoginForm = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (state.errorMessage) clearErrorMessage();
  }, []);

  useEffect(() => {
    if (state.errorMessage) setError(state.errorMessage);
  }, [state.errorMessage]);

  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    }
  };

  const handleLogin = () => {
    signin(email, password);
  };

  return (
    <View>
      {error ? <Alert title={error} type="error" /> : null}
      <Input
        style={styles.inputText}
        containerStyle={{paddingHorizontal:width*0.10, }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError
            ? "Please type in your email address"
            : null
        }
      />
      <Input
        style={styles.inputText}
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={passwordError ? "Please type in your password" : null}
      />
      <TouchableOpacity
        style={styles.login}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  login:{
    backgroundColor:theme.light.blue,
    padding:8,
    width:width*0.8,
    alignSelf:'center'
  },
  loginText:{
    alignSelf:'center',
    fontSize:18,
  },
  inputText:{
    fontSize:16,
  },
});

export default LoginForm;