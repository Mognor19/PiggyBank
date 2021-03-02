import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get("screen");

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        alignItems:'center',
        width: width * 0.8,
        padding: 5,
        backgroundColor:'grey'
    },
});

export default Login;