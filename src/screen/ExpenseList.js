import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExpenseList = () => {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
});

export default ExpenseList;