import React, { useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { Card } from "react-native-elements";
import { Context as ExpenseContext } from "../providers/ExpenseContext";
import Expense from "./Expense";

const ExpenseList = ({ navigation, expenses }) => {
  const { state, setCurrentExpense } = useContext(ExpenseContext);
  const [people, setPeople] = useState([
    // {nombre:'hola' , key:'1'},
    // {nombre:'adios', key:'2'},
  ]);

  const handleSelectExpense = (expense) => {
    setCurrentExpense(expense);
    navigation.navigate("ModifyExpense");
  };

  const emptyFlatList = (
    <View style={styles.emptyExpenses}>
      <Text>You don't have any expense yet...</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {/* {people.map((item) => {
        <TouchableOpacity>
          <Text>Hola {console.log(item)}</Text>
          <Text>{item.title}</Text>
          <Text>{item.date}</Text>
          <Text>{item.amount}</Text>
        </TouchableOpacity>
        <Card containerStyle={styles.container}>
      <Card.Title>{item.title}</Card.Title>
      <Card.Divider />
      <View style={styles.containerColumn}>
        <Text>{console.log(item.title)}</Text>
        <Text>{item.amount}</Text>
        <Text>{item.date}</Text>
      </View>
    </Card>
        })} */}
      <FlatList
        data={people}
        ListEmptyComponent={emptyFlatList}
        renderItem={({item}) => (
          <Text>{item.nombre}</Text>
            // <TouchableOpacity
            //   onPress={() => {
            //     handleSelectExpense(item);
            //   }}
            // >
            //   <Expense
            //     key={item.id}
            //     title={item.title}
            //     amount={item.amount}
            //     date={item.date}
            //   />
            // </TouchableOpacity>
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
