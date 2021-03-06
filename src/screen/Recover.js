import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { colors } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get("screen");
import theme from '../components/theme/index'

const Recover = ({ navigation }) => {
    const [value, onChangeText] = React.useState('Vieja Contraseña');
    return (
        <View style={styles.container}>
            <TextInput
                style={{borderColor: theme.colors.black, borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
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
        width: width * 0.5,
        padding: 5,
        backgroundColor:theme.colors.blue,
    },
    Text:{
        color: theme.colors.gold,
    }
});

export default Recover;