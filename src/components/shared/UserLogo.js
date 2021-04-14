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
          size="xlarge"
          rounded
          title={title}
          overlayContainerStyle={{ backgroundColor: theme.light.blue }}
          activeOpacity={0.7}
        />
      ) : (
        <Avatar
          size="xlarge"
          rounded
          source = {{ uri: picture }}
          overlayContainerStyle={{ backgroundColor: theme.light.blue }}
          activeOpacity={0.7}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.5,
    height: height * 0.235,
    paddingLeft: 30,
    alignSelf: "center",
    marginTop: height * 0.1,
  },
});

export default UserLogo;
