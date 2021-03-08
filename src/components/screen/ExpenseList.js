import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../theme';

const {width, height} = Dimensions.get("screen")

const ExpenseList = () => {
    return (
        
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.bubble1}>
                <Text style={styles.text1}>Tus Ahorros</Text>
                <Text style={styles.ahorro}>8096.71</Text>
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
                <Text style={styles.text1}>200</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        width: width,
        /*justifyContent:'center',
        alignItems: 'center',*/
        backgroundColor: theme.colors.grey,
        paddingTop: 41,
        
    },
    bubble1:{
        width: width ,
        backgroundColor: theme.colors.red,
        marginTop: 0,
        height: height * 0.20,
        alignSelf: 'center',
        borderRadius: 15,

    },
    bubble:{
        width: width * 0.9,
        backgroundColor: theme.colors.blue,
        margin: 10,
        alignSelf: 'center',
        height: height * 0.20,
        borderRadius: 10,

    },
    text1:{
        margin:10,
        fontSize: 30,
    },
    ahorro:{
        margin:10,
        fontSize: 50,
    },
    
});

export default ExpenseList;