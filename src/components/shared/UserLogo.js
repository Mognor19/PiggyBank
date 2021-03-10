import React from 'react';
import { Dimensions, StyleSheet, View} from "react-native";
import theme from '../theme';
import { Avatar } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

const UserLogo = ({title}) => {
  return (
    <View style={styles.container}>
      <Avatar
       size="xlarge"
       rounded
       title="US"
       overlayContainerStyle={{backgroundColor:theme.colors.blue}}
       onPress={() => console.log("Works!")}
       activeOpacity={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.5,
    height: height * 0.235,
    paddingLeft:30,
    alignSelf:'center',
    marginTop:height*0.1,
  },
});

export default UserLogo;