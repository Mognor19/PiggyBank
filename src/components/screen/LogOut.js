import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import UserForm from "../forms/UserForm";
import theme from "../theme";
import UserLogo from '../shared/UserLogo';
import {firebase} from '../../firebase';
import PopUpMessage from '../shared/PopUpMessage'

const { width, height } = Dimensions.get("screen");

const LogOut = ({ navigation}) => {
    const [visible, setVisible] = useState(false);
    const logoTitle ="Goodbye"
    const successMessage = "You have just logged out from Piggy Bank"
    const hintMessage = "Hope to see you again soon!"
    
    const handleLogOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            setVisible(!visible)
          })
          .catch((error) => {
            setError(error.message);
          });
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
            <PopUpMessage 
                navigation={navigation} 
                navigationScreen="Login" 
                visibleState={visible} 
                logoTitle={logoTitle} 
                successMessage={successMessage} 
                hintMessage={hintMessage} 
            />
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