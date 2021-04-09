import React, {useContext}  from "react";
import { StyleSheet, View, Text} from "react-native";
import theme from '../theme';
import { Context as AuthContext } from "../providers/AuthContext";

const UserForm = () => {
  const { state } = useContext(AuthContext);
  const Name = state.user.fullname;
  const Email = state.user.email;
    
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{Name}</Text>
      <Text style={styles.titleText}>{Email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:0.7,
    justifyContent:'center',
    backgroundColor:theme.colors.grey,
  },
  titleText: {
    flex:1,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf:'center',
  },
});

export default UserForm;