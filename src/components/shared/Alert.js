import React from "react";
import { StyleSheet, View, Text, Dimensions} from "react-native";
import Icon from "@expo/vector-icons/Feather";
import theme from '../theme'

const { width} = Dimensions.get("screen");

const Alert = ({ type, title }) => {
  let background = "";
  let icon = "";

  if (type === "error") {
    background = "#fdecea";
    icon = "times-circle";
  } else if (type === "warning") {
    background = "#fff4e5";
    icon = "warning";
  } else if (type === "info") {
    background = "#e8f4fd";
    icon = "info-circle";
  } else if (type === "success") {
    background = "#edf7ed";
    icon = "check-circle";
  }

  return (
    <View style={[styles.container, { backgroundColor: background, opacity:0.9}]}>
      <Icon name={icon} style={styles.icon} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width*0.9,
    margin: 10,
    padding: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    fontSize:26,
    paddingTop:'auto',
    paddingBottom:'auto',
  },
});

export default Alert;