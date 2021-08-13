import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const TodoItem = ({ todo, onDeleteTodo, onEditTodo, onToggleTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState(todo.content);

  const handleEditTodo = (id, content) => {
    onEditTodo(id, content);
    setInput("");
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggleTodo(todo.id)}
      >
        {todo.isCompleted && <AntIcon name="check" size={25} color="#3B5DF5" />}
      </TouchableOpacity>
      {editMode ? (
        <>
          <TextInput
            value={input}
            style={styles.content}
            onChangeText={(text) => {
              setInput(text);
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              handleEditTodo(todo.id, input);
            }}
          >
            <AntIcon style={styles.edit} name="enter" size={30} color="black" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.content} onPress={() => onToggleTodo(todo.id)}>
            {todo.content}
          </Text>
          <TouchableOpacity onPress={() => setEditMode(true)}>
            <AntIcon style={styles.edit} name="edit" size={30} color="black" />
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity onPress={() => onDeleteTodo(todo.id)}>
        <FontAwesome
          style={styles.delete}
          name="trash-o"
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    padding: 4,
    borderBottomColor: "#C2C2C2",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderColor: "#3B5DF5",
    borderWidth: 2,
  },
  content: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 18,
  },
  edit: {
    marginRight: 5,
  },
});

export default TodoItem;
