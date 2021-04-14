import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../theme';
const {width, height} = Dimensions.get("screen")

const ExpenseList = () => {
    
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.bubble1}>
                <Text style={styles.text1}>Tus Ahorros</Text>
                <Text style={styles.ahorro}>8096.71</Text>
                <Icon style={styles.icon1}
                name='plus'
                type='feather'
                color= '#F3DFA2'
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>YT Premium</Text>
                <Text style={styles.text1}>3/10/2021</Text>
                <Text style={styles.text1}>300</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>GYM</Text>
                <Text style={styles.text1}>3/10/2021</Text>
                <Text style={styles.text1}>1200</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>Herbalife</Text>
                <Text style={styles.text1}>3/10/2021</Text>
                <Text style={styles.text1}>950</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bubble}>
                <Text style={styles.text1}>Cena</Text>
                <Text style={styles.text1}>3/10/2021</Text>
                <Text style={styles.text1}>400</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.plus}>
            <Icon style={styles.icon}
                reverse
                name='plus'
                type='feather'
                color= '#F3DFA2'
                />
            </TouchableOpacity>
            
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        width: width,
        paddingTop: 41,
        
    },
    bubble1:{
        width: width ,
        backgroundColor: theme.light.red,
        marginTop: 0,
        height: height * 0.20,
        alignSelf: 'center',
        borderRadius: 15,

    },
    bubble:{
        width: width * 0.9,
        backgroundColor: theme.light.blue,
        margin: 10,
        padding:10,
        alignSelf: 'center',
        height: height * 0.20,
        borderRadius: 10,

    },
    plus:{
        width: width * 0.16,
        backgroundColor: theme.light.text,
        borderRadius: 50,
        margin: 10,
        height: height * 0.08,
        alignSelf: 'flex-end',
        marginBottom: 50,
        alignContent: 'center',

    },
    icon:{
        width: width * 0.2,
        height: height * 0.2,
        alignSelf:'flex-start',
        position: 'absolute',
    },
    icon1:{
        width: width * 0.3,
        height: height * 0.3,
        alignSelf:'flex-end',
    },
    text1:{
        margin:5,
        alignSelf: 'center',
        fontSize: 30,
    },
    ahorro:{
        margin:10,
        fontSize: 50,
        alignSelf: 'center',
    },
});

export default ExpenseList;