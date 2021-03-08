import React, { useState } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity, Text} from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { firebase } from "../../firebase";
import { validate } from "email-validator";
import theme from '../theme'
import Alert from '../shared/Alert';

const { width, height } = Dimensions.get("screen");

const SignupForm = ({ navigation }) => {
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
    }
  };

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullname,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Login");
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <View>
      {error ? <Alert type="error" title={error} /> : null}
      <Input
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Full name"
        leftIcon={<Icon name="user" />}
        value={fullname}
        onChangeText={setFullname}
        onBlur={() => {
          handleVerify("fullname");
        }}
        errorMessage={
          fullnameError ? "Por favor ingresa tu nombre completo" : ""
        }
      />
      <Input
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Email"
        leftIcon={<Icon name="envelope" />}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError ? "Por favor ingresa una dirección de correo válida" : ""
        }
      />
      <Input
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={
          passwordError
            ? "Por favor ingresa una contraseña de mínimo 6 caracteres"
            : ""
        }
      />
      <Input
        containerStyle={{paddingHorizontal:width*0.10}}
        placeholder="Confirm password"
        leftIcon={<Icon name="lock" />}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("confirmPassword");
        }}
        errorMessage={
          confirmPasswordError
            ? "Por favor reingresa la contraseña y verifica que es correcta"
            : ""
        }
      />
      <TouchableOpacity
        style={styles.signup}
        onPress={handleSignup}
      >
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    signup:{
        backgroundColor:theme.colors.blue,
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