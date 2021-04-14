import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../theme";
import { Context as ExpenseContext } from "../providers/ExpenseContext";
import { Context as AuthContext } from "../providers/AuthContext";

const { width, height } = Dimensions.get("screen");

const ExpenseList = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const {
    state: expenseState,
    getExpenses,
    clearMessage,
    setCurrentExpense,
  } = useContext(ExpenseContext);

  const emptyFlatList = (
    <View style={styles.emptyExpenses}>
      <Text>You don't have any expense yet...</Text>
    </View>
  );

  useEffect(() => {
    getExpenses(state.user.id);
  }, []);

  const handleSelectExpense = (expense) => {
    setCurrentExpense(expense);
    navigation.navigate("CreateExpense");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
      containerStyle={styles.plus}
          type="clear"
          icon={
            <Icon
              style={styles.icon}
              reverse
              name="plus"
              type="feather"
              color={theme.colors.dark}
            />
          }
          onPress={() => {
            navigation.navigate("CreateExpense");
          }}
          />
      <TouchableOpacity style={styles.bubble1}>
        <Text style={styles.text1}>Tus Ahorros</Text>
        <Text style={styles.ahorro}>8096.71</Text>
        <Icon style={styles.icon1} name="plus" type="feather" color="#F3DFA2" />
      </TouchableOpacity>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={expenseState.expenses}
          ListEmptyComponent={emptyFlatList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.bubble}
              onPress={() => {
                handleSelectExpense(item);
              }}
            >
              <Card containerStyle={styles.cardContainer}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <View style={styles.containerColumn}>
                  <Text>{item.amount}</Text>
                  <Text>{item.date}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: theme.colors.grey,
    paddingTop: 41,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  containerColumn: {
    width: width,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  bubble1: {
    width: width,
    backgroundColor: theme.colors.red,
    marginTop: 0,
    height: height * 0.2,
    alignSelf: "center",
    borderRadius: 15,
  },
  bubble: {
    width: width * 0.9,
    backgroundColor: theme.colors.blue,
    margin: 10,
    alignSelf: "center",
    height: height * 0.2,
    borderRadius: 10,
    zIndex: 1,
  },
  plus: {
    alignSelf: "flex-end",
    position:'absolute',
    right:10,
    bottom: 20,
    backgroundColor: theme.colors.dark,
    borderRadius: 50,
    zIndex:99999,
  },
  icon: {
    width: width * 0.2,
    height: height * 0.2,
    alignSelf: "flex-start",
    position: "absolute",
  },
  icon1: {
    width: width * 0.3,
    height: height * 0.3,
    alignSelf: "flex-end",
  },
  text1: {
    margin: 5,
    alignSelf: "center",
    fontSize: 30,
  },
  ahorro: {
    margin: 10,
    fontSize: 50,
    alignSelf: "center",
  },
});

export default ExpenseList;
