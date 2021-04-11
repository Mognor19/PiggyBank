import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {Input, Icon} from "react-native-elements";
import theme from '../theme';
const { width, height } = Dimensions.get("screen");


const Expense = () => {
    
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>Create Expense</Text>
            
        <Input style={styles.input} placeholder="Title" 
        
        />

        <Input style={styles.input} placeholder="Amount" 
        
        />
        <View style={styles.containerRow}>
        <TouchableOpacity style={styles.botton}>
            <Text style={styles.text1}>Accept</Text>
            
        </TouchableOpacity>
        <TouchableOpacity style={styles.botton}>
            <Text style={styles.text1}>Cancel</Text>
            
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        width: width,
        backgroundColor: theme.colors.grey,
        paddingTop: 41,
        
    },
    containerRow : {
        width: width,
        backgroundColor: theme.colors.grey,
        paddingTop: 41,
        flexDirection: 'row',
        marginLeft : 50,
    },
    botton:{
        width: width * 0.35 ,
        backgroundColor: theme.colors.blue,
        margin: 5,
        height: height * 0.061,
        alignSelf: 'center',
        borderRadius: 15,
        alignContent: 'center',

    },
    text1:{
        margin:5,
        alignSelf: 'center',
        fontSize: 30,
    },
    input:{
        alignSelf:'center',
        fontSize: 20,
    },
});

export default Expense;