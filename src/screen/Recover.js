import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get("screen");

const Recover = ({ navigation }) => {
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
    button:{
        alignItems:'center',
        width: width * 0.8,
        padding: 5,
        backgroundColor:'grey'
    },
});

export default Recover;