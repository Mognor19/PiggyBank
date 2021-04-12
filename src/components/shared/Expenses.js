import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Context as ExpenseContext } from "../providers/ExpenseContext";
import Expense from "./Expense";

const ExpenseList = ({ navigation, expenses }) => {
  const { state, setCurrentExpense } = useContext(ExpenseContext);

  const handleSelectExpense = (expense) => {
    setCurrentExpense(expense);
    navigation.navigate("ModifyExpense");
  };

  const emptyFlatList = (
    <View style={styles.emptyExpenses}>
      <Text>You don't have any expense yet...</Text>
    </View>
  );
  console.log(expenses);
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        ListEmptyComponent={emptyFlatList}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => {
                handleSelectExpense(item);
              }}
            >
              <Expense
                key={item.id}
                title={item.title}
                amount={item.amount}
                day={item.date}
              />
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyExpenses: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default ExpenseList;