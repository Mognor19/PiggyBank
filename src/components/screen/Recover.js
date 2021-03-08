import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Logo from '../shared/Logo'
import { firebase } from "../../firebase";
const {width, height} = Dimensions.get("screen");
import theme from '../theme/index'
import { validate } from "email-validator";

import { Input} from "react-native-elements";

const Recover = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = (input) => {
        if (input === "email") {
          if (!email) setEmailError(true);
          else if (!validate(email)) setEmailError(true);
          else setEmailError(false);
        }
    };
    const handleRecover = () => {
        (email!="" ? firebase.auth().sendPasswordResetEmail(email) : null)
    }

    return (
        <View style={styles.container}>
            {error ? <Alert title={error} type="error" /> : null}
            <Logo title="Recover Password"/>
            <Input
                style={styles.input}
                containerStyle={{paddingHorizontal:width*0.10}}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                onBlur={() => {
                    handleVerify("email");
                }}
                errorMessage={
                    emailError
                    ? "Please verify your accounts email address"
                    : null
                }
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleRecover(email)}
            >
                <Text style={styles.Text}>Actualizar</Text>
            </TouchableOpacity>            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: theme.colors.grey,
    },
    button:{
        alignItems:'center',
        width: width * 0.8,
        height: width *0.075,
        padding: 5,
        marginTop:height*0.03,
        backgroundColor:theme.colors.blue,
    },
    Text:{
        color: theme.colors.gold,
    },
    logo:{
        width: width * 0.9,
        height: width * 0.5,
        margin: 10,
    },
    input:{
        color: theme.colors.dark,
        paddingTop:height*0.10,
    }
});

export default Recover;