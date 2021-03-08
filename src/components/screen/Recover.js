import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Logo from '../shared/Logo'
import { firebase } from "../../firebase";
const {width, height} = Dimensions.get("screen");
import theme from '../theme/index'
import { validate } from "email-validator";
import Alert from '../shared/Alert'
import { Input, Overlay} from "react-native-elements";

const Recover = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);

    const handleVerify = (input) => {
        if (input === "email") {
          if (!email) setEmailError(true);
          else if (!validate(email)) setEmailError(true);
          else setEmailError(false);
        }
    };

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
                onPress={() => {
                    firebase.auth().sendPasswordResetEmail(email).then(()=>{setVisible(!visible)}).catch((error) => {setError(error.message)})
                }}
            >
                <Text style={styles.Text}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.goBack}
                onPress={() => navigation.navigate('Login')}
            >
                <Text>Tapped by mistake? <Text style={styles.goBackText}>Go back</Text></Text>
            </TouchableOpacity>
            {/* Success Message of the password recovery message */}
            <Overlay isVisible={visible} overlayStyle={styles.overlay} >
                <View>
                    <Logo title="Success"/>
                    <Text style={styles.successMessage}>A password recovery message was sent to the email you provided.</Text>
                    <Text style={styles.hintMessage}>If you are unable to find it please do check you Junk/Spam folder.</Text>
                    <TouchableOpacity
                        style={styles.overlayButton}
                        onPress={() => {
                            navigation.navigate('Login')
                            setVisible(!visible)
                        }}
                    >
                        <Text style={styles.overlayButtonText}>Okay</Text>
                    </TouchableOpacity>
                </View>
            </Overlay> 
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
    successMessage:{
        fontWeight:'bold',
        fontSize: 18,
        color:theme.colors.dark,
    },
    hintMessage:{
        fontWeight:'bold',
        paddingTop:15,
        fontSize: 18,
        color:theme.colors.dark,
    },
    overlay:{
        width:width*0.8,
        height:height*0.7,
        backgroundColor:theme.colors.grey,
        paddingLeft:width*0.08,
        paddingRight:width*0.08,
        justifyContent:'center',
        alignItems:'center'
    },
    overlayButton:{
        alignItems:'center',
        justifyContent:'center',
        width: width * 0.6,
        height: width *0.13,
        padding: 5,
        marginTop:height*0.03,
        backgroundColor:theme.colors.blue,
    },
    overlayButtonText:{
        fontSize:30,
    }
});

export default Recover;