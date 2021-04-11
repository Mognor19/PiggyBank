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
      <Text style={styles.titleName}>{Name}</Text>
      <Text style={styles.titleText}>{Email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex:0.2,
    justifyContent:'center',
    alignItems:"flex-end",
    flexDirection:"column",
    backgroundColor:theme.colors.grey,
    paddingLeft:12,
    top:-140,
    left:100
    
  },
  titleText: {
    flex:0,
    fontSize: 10,
    fontWeight: "bold",
    alignSelf:'flex-start',
  },
  titleName: {
    flex:0,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf:'flex-start',
  },
});

export default UserForm;