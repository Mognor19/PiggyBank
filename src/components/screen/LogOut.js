import React from 'react';
import { StyleSheet, Text, View, Button, Feather, TouchableOpacity, Dimensions} from 'react-native';
import UserForm from "../forms/UserForm";
import theme from "../theme";
import UserLogo from '../shared/UserLogo';
import Alert from '../shared/Alert';

const { width, height } = Dimensions.get("screen");

const User = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <br></br>
            <UserLogo title="User" style={styles.logo}/>
            <UserForm navigation={navigation} style={styles.user}/>
            <Button title="Log Out" style={styles.logout}>Log Out</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        backgroundColor:theme.colors.grey,
        padding:0,
    },
    forgot:{
        alignItems:'center',
        padding: 5,
    },
    user:{
        width:width*10,
        height:height*10,
        position:'absolute',
        bottom:20,
        top:10,
        alignSelf:'center',
        padding: 5,
    },
    logo:{
        width:width*0.8,
        height:15,
        backgroundColor:theme.colors.white,
        padding:20,
     },
    logout:{
       width:width*0.8,
       height:15,
       backgroundColor:theme.colors.white,
       padding:20,
    },
});

export default User;