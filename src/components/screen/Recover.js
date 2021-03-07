import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { Image } from "react-native-elements";
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
    return (
        <View style={styles.container}>
            {error ? <Alert title={error} type="error" /> : null}
            <Image
                style={styles.logo}
                source={require('../assets/LogoPiggyBankSinCoin.png')}
            />
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
                    ? "Por favor ingresa tu cuenta de correo electrónico"
                    : null
                }
            />

            <Input 
                style={styles.input}
                containerStyle={{paddingHorizontal:width*0.10}}
                placeholder="Nueva Contraseña"
                
            />

            <Input 
                style={styles.input}
                containerStyle={{paddingHorizontal:width*0.10}}
                placeholder="Confirmar Contraseña"
                
            />
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Recover')}
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
    }
});

export default Recover;