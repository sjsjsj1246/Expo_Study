import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({
  todoList,
  onCreateTodo,
  onDeleteTodo,
  onEditTodo,
  onToggleTodo,
}) => {
  const [input, setInput] = useState();

  const handleCreateTodo = (content) => {
    onCreateTodo(content);
    setInput("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.title}>
        <Text style={styles.titleText}>TODO_LIST</Text>
      </View> */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoiding}
        behavior="padding"
        enabled
      >
        <ScrollView style={styles.todoListWrapper}>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}
              onToggleTodo={onToggleTodo}
            />
          ))}
        </ScrollView>
        <View style={styles.inputForm}>
          <TextInput
            placeholder="할 일"
            style={styles.inputContent}
            value={input}
            onChangeText={(text) => {
              setInput(text);
            }}
          ></TextInput>
          <TouchableOpacity
            style={styles.inputButton}
            onPress={() => handleCreateTodo(input)}
          >
            <Text style={styles.inputButtonText}>추가하기</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "100%",
    height: 100,
    backgroundColor: "#3B5DF5",
  },
  titleText: {
    width: "100%",
    height: "100%",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 130,
  },
  keyboardAvoiding: {
    width: "100%",
    flex: 1,
  },
  todoListWrapper: {
    width: "100%",
    flex: 1,
    overflow: "scroll",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  inputForm: {
    height: 50,
    margin: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
  },
  inputContent: {
    paddingLeft: 10,
    height: 50,
    flex: 1,
  },
  inputButton: {
    width: 100,
    height: 50,
    backgroundColor: "#3B5DF5",
  },
  inputButtonText: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    lineHeight: 50,
    color: "white",
  },
});

export default TodoList;
