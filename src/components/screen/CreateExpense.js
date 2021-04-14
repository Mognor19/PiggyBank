import React, { useState, useContext } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Input } from "react-native-elements";
import { Context as AuthContext } from "../providers/AuthContext";
import { Context as ExpenseContext } from "../providers/ExpenseContext";
import theme from "../theme";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width, height } = Dimensions.get("screen");

const CreateExpense = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const { createExpense } = useContext(ExpenseContext);
  const [date, setDate] = useState(new Date());
  const [printDate, setPrintDate] = useState(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseTitleError, setExpenseTitleError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setDate(currentDate);
  //   setPrintDate(currentDate.toString().substring(0, 15));
  //   setShow(false);
  // };

  const handleSaveExpense = () => {
    if (!expenseTitle) {
      setExpenseTitleError(true);
    } else if (!amount) {
      setAmountError(true);
    } else {
      createExpense(expenseTitle, amount, printDate, state.user.id);
    }

    navigation.navigate("ExpenseList");
  };

  const handleVerify = (input) => {
    if (input === "expenseTitle") {
      if (!expenseTitle) setExpenseTitleError(true);
      else setExpenseTitleError(false);
    } else if (input === "amount") {
      if (!amount) setAmountError(true);
      else setAmountError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Create Expense</Text>
      <Input
        style={styles.input}
        containerStyle={{ paddingHorizontal: width * 0.1 }}
        placeholder="Title"
        value={expenseTitle}
        onChangeText={setExpenseTitle}
        onBlur={() => {
          handleVerify("expenseTitle");
        }}
        errorMessage={
          expenseTitleError ? "Please type in a expenseTitle" : null
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
          {date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}
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

export default CreateExpense;
