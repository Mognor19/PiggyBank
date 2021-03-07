import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get("screen");
import theme from '../components/theme/index'

const Recover = ({ navigation }) => {
    const value = React.useState('');
    const value1 = React.useState('');
    const value2 = React.useState('');
    return (
        <View style={styles.container}>
            
            <TextInput placeholder={' Vieja Contraseña'}
            
                style={styles.textinput}
                value={value}
            />

            <TextInput placeholder={' Nueva Contrseña'} 
                style={styles.textinput}
                value={value1}
            />

            <TextInput placeholder={' Confirmar Contraseña'} 
                style={styles.textinput}
                value={value2}
            />
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Recover')}
            >
                <Text style={styles.Text}>Actualizar</Text>
            </TouchableOpacity>            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: theme.colors.grey,
    },
    button:{
        alignItems:'center',
        width: width * 0.4,
        height: width *0.075,
        padding: 5,
        backgroundColor:theme.colors.blue,
    },
    Text:{
        color: theme.colors.gold,
    },
    textinput:{
        borderColor: theme.colors.black,
        borderWidth: 1,
        color: theme.colors.black,
        width: width * 0.8,
        margin: 10,
    },
    logo:{
        width: width * 0.5,
        height: width * 0.5,
        margin: 10,
    }
});

export default Recover;