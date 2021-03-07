import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { color } from "react-native-reanimated";
import Icon from "@expo/vector-icons/Feather";
import theme from '../theme'

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
    <View style={[styles.container, { backgroundColor: background }]}>
      <Icon name={icon} style={styles.icon} />
      <Text style={{color:color,}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
});

export default Alert;