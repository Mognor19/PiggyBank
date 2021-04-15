import React, { useState, useContext } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text} from "react-native";
import { Input } from "react-native-elements";
import { validate } from "email-validator";
import theme from '../theme'
import Alert from '../shared/Alert';
import { Context as AuthContext } from "../providers/AuthContext";

const { width } = Dimensions.get("screen");

const SignupForm = () => {
  const { state, signup } = useContext(AuthContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = (input) => {
    if (input === "fullname") {
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (confirmPassword !== password) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    } else if (input === "signup") {
      if (
        !fullnameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError &&
        fullname &&
        email &&
        password &&
        confirmPassword
      ){
        clean();
        signup(fullname, email, password) 
      }else setError("All fields are required!");
    }
  };
  const clean = () =>{
    setFullname("")
    setEmail("")
    setConfirmPassword("")
    setPassword("")
    setFullnameError("")
    setEmailError("")
    setConfirmPasswordError("")
    setPasswordError("")
    setError("")
  }

  return (
    <View>
      {error ? <Alert type="error" title={error} /> : null}
      <Input
        style={styles.signUpText}
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Full name"
        value={fullname}
        onChangeText={setFullname}
        onBlur={() => {
          handleVerify("fullname");
        }}
        errorMessage={
          fullnameError ? "Please type in your full name" : ""
        }
      />
      <Input
        style={styles.signUpText}
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError ? "Please type in your full email address" : ""
        }
      />
      <Input
        style={styles.signUpText}
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={
          passwordError
            ? "Please write your desired password": ""
        }
      />
      <Input
        style={styles.signUpText}
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("confirmPassword");
        }}
        errorMessage={
          confirmPasswordError
            ? "Please re-write the same password": ""
        }
      />
      <TouchableOpacity
        style={styles.signup}
        onPress={() => handleVerify("signup")}
      >
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    signup:{
        backgroundColor:theme.light.blue,
        padding:8,
        width:width*0.8,
        alignSelf:'center'
    },
    signUpText:{
        alignSelf:'center',
        fontSize:18,
    },
});

export default SignupForm;