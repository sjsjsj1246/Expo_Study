import axios from "axios";

export const getTodoList = async () => {
  const response = await axios({
    method: "get",
    url: "https://todo.hisfolio.com/api/todos",
  });
  return response;
};

export const getTodoById = async (id) => {
  const response = await axios({
    method: "get",
    url: `https://todo.hisfolio.com/api/todos/${id}`,
  });
  return response;
};

export const createTodo = async (content) => {
  const response = await axios({
    method: "post",
    url: "https://todo.hisfolio.com/api/todos",
    data: {
      content,
    },
  });
  return response;
};

export const deleteTodo = async (id) => {
  const response = await axios({
    method: "delete",
    url: `https://todo.hisfolio.com/api/todos/${id}`,
  });
  return response;
};

export const editTodo = async ({ id, content }) => {
  const response = await axios({
    method: "patch",
    url: `https://todo.hisfolio.com/api/todos/${id}`,
    data: {
      content,
    },
  });
  return response;
};

export const toggleTodo = async (id) => {
  const response = await axios({
    method: "patch",
    url: `https://todo.hisfolio.com/api/todos/complete/${id}`,
  });
  return response;
};
