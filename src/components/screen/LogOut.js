import React, {useState, useContext} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import UserForm from "../forms/UserForm";
import theme from "../theme";
import UserLogo from '../shared/UserLogo';
import { Context as AuthContext } from "../providers/AuthContext";

const { width } = Dimensions.get("screen");

const LogOut = ({ navigation}) => {
    const { signout } = useContext(AuthContext);
    
    const handleLogOut = () => {
        signout();
    };
    return (
        <View style={styles.container}>
            <UserLogo title="User" />
            <UserForm navigation={navigation} />
            <TouchableOpacity
                style={styles.logout}
                onPress={handleLogOut}
            >
                <Text style={styles.logOutText}>Log Out</Text>
            </TouchableOpacity>
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
    logout:{
       width:width*0.8,
       alignSelf:'center',
       padding:8,
       backgroundColor:theme.colors.blue,
    },
    logOutText:{
        alignSelf:'center',
        fontSize:18,
    },
});

export default LogOut;