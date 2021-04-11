import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import theme from "../theme";
import { Input } from "react-native-elements";
import { Context as AuthContext } from "../providers/AuthContext";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const UserForm = () => {
  const [edit, setEdit] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNameError, setNewNameError] = useState(false);
  const { state, updateName } = useContext(AuthContext);
  const Name = state.user.fullname;
  const Email = state.user.email;

  const saveName = () => {
    setCurrentName(newName);
    updateName(currentName, state.user.id)
  }

  return (
    <View style={styles.container}>
      {edit === false ? (
        <Text style={styles.titleText}>
          {currentName === "" ? Name : currentName}
          {"  "}
          <TouchableOpacity
            onPress={() => {
              setEdit(true);
            }}
          >
            <Feather name="edit-2" style={styles.edit} />
          </TouchableOpacity>
        </Text>
      ) : (
        <View style={styles.input}>
          <Input
            style={{ fontSize: 16 }}
            containerStyle={{ width: width * 0.5 }}
            placeholder={Name}
            value={newName}
            onChangeText={setNewName}
            onBlur={() => {
              if (newName) {
                setNewNameError(true);
              }
            }}
            errorMessage={
              newNameError ? "You haven't written anything in your name!" : null
            }
          />
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setEdit(false);
            }}
          >
            <Feather name="x" size={24} color={theme.colors.red} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setNewName("");
              saveName()
              setEdit(false)
            }}
          >
            <Feather name="check" size={24} color={theme.colors.blue} />
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.titleText}>{Email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    backgroundColor: theme.colors.grey,
  },
  edit: {
    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 100,
    backgroundColor: theme.colors.white,
    fontSize: 18,
    opacity: 0.9,
    color: theme.colors.dark,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  option: {
    width: 35,
    marginLeft: 10,
    height: 35,
    backgroundColor: theme.colors.white,
    padding: 5,
  },
  input: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
  },
});

export default UserForm;
