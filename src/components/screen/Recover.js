import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Logo from '../shared/Logo'
import { firebase } from "../../firebase";
const {width, height} = Dimensions.get("screen");
import theme from '../theme/index'
import { validate } from "email-validator";
import Alert from '../shared/Alert'
import { Input } from "react-native-elements";
import PopUpMessage from '../shared/PopUpMessage';

const Recover = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const logoTitle ="Success"
    const successMessage = "A password recovery message was sent to the email you provided."
    const hintMessage = "If you are unable to find it please do check your Junk/Spam folder."

    const handleVerify = (input) => {
        if (input === "email") {
          if (!email) setEmailError(true);
          else if (!validate(email)) setEmailError(true);
          else setEmailError(false);
        }
    };
    const handleRecovery = () =>{
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(()=>{
                setEmail("")
                setEmailError("")
                setError("")
                setVisible(!visible)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <View style={styles.container}>
            <Logo title="Recover Password"/>
            {error ? <Alert title={error} type="error" /> : null}
            <Input
                style={styles.input}
                containerStyle={{paddingHorizontal:width*0.10}}
                placeholder="Email"
                autoCapitalize="none"
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
                onPress={handleRecovery}
            >
                <Text style={styles.text}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.goBack}
                onPress={() => navigation.navigate('Login')}
            >
                <Text>Tapped by mistake? <Text style={styles.goBackText}>Go back</Text></Text>
            </TouchableOpacity>
            {/* Success Message of the password recovery email */}
            <PopUpMessage 
                navigation={navigation} 
                navigationScreen="Login" 
                visibleState={visible} 
                logoTitle={logoTitle} 
                successMessage={successMessage} 
                hintMessage={hintMessage} />
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
        padding: 8,
        marginTop:height*0.03,
        backgroundColor:theme.colors.blue,
    },
    text:{
        color: theme.colors.dark,
        fontSize:18,
    },
    input:{
        fontSize:18,
        color: theme.colors.dark,
        paddingTop:height*0.1
    },
    goBack:{
        alignSelf:'center',
        padding:8,
    },
    goBackText:{
        alignSelf:'center',
        color:theme.colors.red,
    },
});

export default Recover;