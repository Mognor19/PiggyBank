import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LoginForm from "../forms/LoginForm";
import theme from "../theme";
import Logo from '../shared/Logo';
import Alert from '../shared/Alert';

const Login = ({ navigation, userCreated }) => {
    return (
        <View style={styles.container}>
            <Logo title="Login" />
            {userCreated ? (<Alert type="success" title="Your user was created successfully!" />) : null}
            <LoginForm navigation={navigation}/>
            
            <TouchableOpacity
                style={styles.forgot}
                onPress={() => navigation.navigate('Recover')}
            >
                <Text>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.create}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Dont have an account? <Text style={styles.register}>Register Now</Text></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        backgroundColor:theme.colors.grey,
    },
    forgot:{
        alignItems:'center',
        padding: 5,
    },
    create:{
        justifyContent:'flex-end',
        alignSelf:'center',
        padding: 5,
    },
    register:{
        color:theme.colors.red,
    },
});

export default Login;