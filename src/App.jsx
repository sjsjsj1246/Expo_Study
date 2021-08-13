import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: "60f55d44fd6df31769936ee4",
      content: "asdasdaaaaa",
      isCompleted: true,
      publishedDate: "2021-07-19T11:08:52.118Z",
    },
    {
      id: "60f57755fd6df31769936fa4",
      content: "ㅋㅋ",
      isCompleted: false,
      publishedDate: "2021-07-19T13:00:05.139Z",
    },
    {
      id: "60fea06b157ef41d5a5c9868",
      content: "추가",
      isCompleted: false,
      publishedDate: "2021-07-26T11:45:47.018Z",
    },
    {
      id: "60feaea7157ef41d5a5c9881",
      content: "asdasdasdasd",
      isCompleted: true,
      publishedDate: "2021-07-26T12:46:31.833Z",
    },
  ]);

  const onCreateTodo = (content) => {
    setTodoList(
      todoList.concat({
        id: Date.now(),
        content,
        isCompleted: false,
        publishedDate: Date.now(),
      })
    );
  };

  const onDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onEditTodo = (id, content) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, content } : todo))
    );
  };

  const onToggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  if (!todoList) return;
  return (
    <TodoList
      todoList={todoList}
      onCreateTodo={onCreateTodo}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
      onToggleTodo={onToggleTodo}
    />
  );
};

export default registerRootComponent(App);
