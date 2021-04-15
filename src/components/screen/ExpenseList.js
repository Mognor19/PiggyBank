import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../theme";
import { Context as ExpenseContext } from "../providers/ExpenseContext";
import { Context as AuthContext } from "../providers/AuthContext";
import { Context as BalanceContext } from "../providers/BalanceContext";
import { ThemeProvider } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const ExpenseList = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  // const { state: balanceState , getBalance} = useContext(BalanceContext);
  const {
    state: expenseState,
    getExpenses,
    setCurrentExpense,
    deleteExpense,
  } = useContext(ExpenseContext);

  const emptyFlatList = (
    <View style={styles.emptyExpenses}>
      <Text style={styles.empty}>You are free of any dept!</Text>
    </View>
  );

  useEffect(() => {
    getExpenses(state.user.id);
    // getBalance(state.user.id);
  }, []);

  const handleSelectExpense = (expense) => {
    setCurrentExpense(expense);
    navigation.navigate("ModifyExpense");
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
            color={theme.light.text}
          />
        }
        onPress={() => {
          navigation.navigate("CreateExpense");
        }}
      />
      {/* {balanceState.balances ? (
        <View style={styles.bubble1}>
          <Text style={styles.text1}>Currently your expendable amount is: </Text>
          <Text style={styles.ahorro}></Text>
          <Icon
            style={styles.icon1}
            name="plus"
            type="feather"
            color="#F3DFA2"
          />
        </View>
      ) : (
        <View style={styles.bubble1}>
          <Text style={styles.ahorro}>You are currently poor.</Text>
          <Icon
            style={styles.icon1}
            name="plus"
            type="feather"
            color="#F3DFA2"
          />
        </View>
      )} */}
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={expenseState.expenses}
          ListEmptyComponent={emptyFlatList}
          renderItem={({ item }) => (
            <View style={styles.bubble}>
              <TouchableOpacity
                onPress={() => {
                  handleSelectExpense(item);
                }}
              >
                <Card containerStyle={styles.cardContainer}>
                  <Card.Title style={styles.cardText}>{item.title}</Card.Title>
                  <Card.Divider />
                  <View style={styles.containerColumn}>
                    <Text style={styles.cardText}>{item.amount}</Text>
                    <Text style={styles.cardText}>{item.date}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
              <View style={{justifyContent:'center'}}>
              <Button
                type="clear"
                buttonStyle={{height:height*0.2, width:width*0.1}}
                icon={
                  <Feather name="trash-2" size={20} color={theme.light.text} />
                }
                onPress={() => {
                  deleteExpense(item.id);
                }}
              />
              </View>
            </View>
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
    paddingTop: 41,
  },
  cardContainer: {
    elevation:0,
    borderColor:'transparent',
    width:width*0.7,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  cardText:{
    fontSize:20,
    color:theme.light.text
  },
  containerColumn: {
    width: width,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  bubble1: {
    width: width,
    backgroundColor: theme.light.red,
    marginTop: 0,
    alignSelf: "center",
    borderRadius: 15,
  },
  bubble: {
    justifyContent:'center',
    flexDirection:'row',
    width: width * 0.9,
    backgroundColor: theme.light.blue,
    margin: 10,
    alignSelf: "center",
    height: height * 0.2,
    borderRadius: 10,
    zIndex: 1,
  },
  plus: {
    alignSelf: "flex-end",
    position: "absolute",
    right: 10,
    bottom: 20,
    backgroundColor: theme.light.gold,
    borderRadius: 50,
    zIndex: 99999,
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
  emptyExpenses: {
    flex: 1,
    paddingTop: height * 0.2,
    alignSelf: "center",
    color: theme.light.red
  },
  
  empty: {
    fontSize: 20,
    color: theme.light.red
  },
});

export default ExpenseList;
