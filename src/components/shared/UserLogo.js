import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import theme from "../theme";
import { Avatar } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

const UserLogo = ({ picture, title }) => {
  return (
    <View style={styles.container}>
      {picture === undefined ? (
        <Avatar
          size="large"
          rounded
          title={title}
          overlayContainerStyle={{ backgroundColor: theme.colors.blue }}
          activeOpacity={0.7}
        />
      ) : (
        <Avatar
          size="large"
          rounded
          source = {{ uri: picture }}
          overlayContainerStyle={{ backgroundColor: theme.colors.blue }}
          activeOpacity={0.7}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    backgroundColor:theme.colors.grey,
    paddingLeft:20,
    paddingTop:80,
    paddingVertical:60,
    
  },
});

export default UserLogo;
