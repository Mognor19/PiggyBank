import React from "react";
import { StyleSheet, View, Text, Dimensions} from "react-native";
import Icon from "@expo/vector-icons/Feather";
import theme from '../theme'

const { width} = Dimensions.get("screen");

const Alert = ({ type, title }) => {
  let background = "";
  let icon = "";
  let color=theme.colors.dark;

  if (type === "error") {
    background = theme.colors.red;
    icon = "meh";
  } else if (type === "warning") {
    background = theme.colors.dark;
    color=theme.colors.gold;
    icon = "alert-triangle";
  } else if (type === "info") {
    background = "#e8f4fd";
    icon = "info";
  } else if (type === "success") {
    background = "#edf7ed";
    icon = "x-circle";
  }

  return (
    <View style={[styles.container, { backgroundColor: background, opacity:0.9}]}>
      <Icon name={icon} style={styles.icon} />
      <Text style={{color:color,}}>{title}</Text>
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