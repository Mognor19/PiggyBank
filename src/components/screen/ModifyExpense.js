import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import theme from "../theme";
import { Context as ExpenseContext } from "../providers/ExpenseContext";
import { Context as AuthContext } from "../providers/AuthContext";

const { width, height } = Dimensions.get("screen");

const ModifyExpense = ({ navigation }) => {
  const { state: expensesState, updateExpense } = useContext(ExpenseContext);
  const { state } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [rawDate, setRawDate] = useState(new Date());
  const [date, setDate] = useState(rawDate.getDate() + "/" + rawDate.getMonth() + "/" + rawDate.getFullYear());
  const [amount, setAmount] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  useEffect(() => {
    if (expensesState.currentExpense.id) {
      setTitle(expensesState.currentExpense.title);
      setAmount(expensesState.currentExpense.amount);
    }
  }, [expensesState.currentExpense]);

  const handleSaveExpense = () => {
    updateExpense(
      expensesState.currentExpense.id,
      title,
      amount,
      date,
    );
    navigation.navigate("ExpenseList")
  };

  const handleVerify = (input) => {
    if (input === "yitle") {
      if (!title) setTitleError(true);
      else setTitleError(false);
    } else if (input === "amount") {
      if (!amount) setAmountError(true);
      else setAmountError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Modify Expense</Text>
      <Input
        style={styles.input}
        containerStyle={{ paddingHorizontal: width * 0.1 }}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        onBlur={() => {
          handleVerify("title");
        }}
        errorMessage={
          titleError ? "Please type in a title" : null
        }
      />
      <Input
        style={styles.input}
        containerStyle={{ paddingHorizontal: width * 0.1 }}
        placeholder="0.00"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        onBlur={() => {
          handleVerify("amount");
        }}
        errorMessage={amountError ? "Please type in an amount" : null}
      />
      <View style={styles.containerRow}>
        <Text>
          Date:{" "}
          {date}
        </Text>
        {/* <TouchableOpacity
          onPress={() => {
            setShow(true);
          }}
        >
          <Text>Select Date</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            dateFormat="date month year"
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            display="calendar"
            onChange={onChange}
          />
        )} */}
      </View>
      <View style={styles.containerRow}>
        <TouchableOpacity style={styles.botton} onPress={handleSaveExpense}>
          <Text style={styles.text1}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botton}
          onPress={() => {
            navigation.navigate("ExpenseList");
          }}
        >
          <Text style={styles.text1}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: theme.colors.grey,
    paddingTop: 41,
  },
  containerRow: {
    marginTop: height * 0.05,
    justifyContent: "space-between",
    width: width * 0.8,
    alignSelf: "center",
    backgroundColor: theme.colors.grey,
    flexDirection: "row",
  },
  botton: {
    width: width * 0.35,
    backgroundColor: theme.colors.blue,
    margin: 5,
    height: height * 0.061,
    alignSelf: "center",
    borderRadius: 15,
    alignContent: "center",
  },
  text1: {
    margin: 5,
    alignSelf: "center",
    fontSize: 30,
  },
  input: {
    alignSelf: "center",
    fontSize: 20,
  },
});

export default ModifyExpense;