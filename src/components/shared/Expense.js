import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Card } from "react-native-elements";
import theme from "../theme";
const { width } = Dimensions.get("screen");

const Expense = (title, amount, date) => {
  return (
    <Card containerStyle={styles.container}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <View style={styles.containerColumn}>
        <Text>{amount}</Text>
        <Text>{date}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    width: width * 0.8,
    backgroundColor: theme.colors.grey,
  },
  containerColumn: {
    width: width,
    backgroundColor: theme.colors.grey,
    flexDirection:'column',
  },
});

export default Expense;
