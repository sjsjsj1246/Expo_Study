import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { logout } from "../modules/auth";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoList,
  toggleTodo,
} from "../modules/todos";
import { check } from "../modules/user";

const TodoListContainer = (props) => {
  const { auth } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const { todoList, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreateTodo = (content) => {
    dispatch(createTodo(content));
  };

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onEditTodo = ({ id, content }) => {
    dispatch(editTodo({ id, content }));
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (loading === false) {
      dispatch(getTodoList());
    }
  }, [dispatch, loading]);

  useEffect(() => {
    dispatch(check());
  }, [auth, dispatch]);

  useEffect(() => {
    if (!user) {
      // history.push("/");
    }
  }, [user, dispatch]);

  if (!todoList) return "로딩중";
  return (
    <TodoList
      todoList={todoList}
      onCreateTodo={onCreateTodo}
      onDeleteTodo={onDeleteTodo}
      onEditTodo={onEditTodo}
      onToggleTodo={onToggleTodo}
      onLogout={onLogout}
    />
  );
};

export default TodoListContainer;
