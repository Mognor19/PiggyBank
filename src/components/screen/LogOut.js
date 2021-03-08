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
            <Button title="Log Out">Log Out</Button>
            <UserLogo title="User" />
            <UserForm navigation={navigation}/>
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
        position:'absolute',
        bottom:25,
        alignSelf:'center',
        padding: 5,
    },
    register:{
        color:theme.colors.red,
    },
    Button:{
       width:15,
       height:15,
       backgroundColor:theme.colors.white,
    }
});

export default User;