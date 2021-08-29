import axios from "axios";

export const register = async ({ username, password }) => {
  const response = await axios({
    method: "post",
    url: "https://todo.hisfolio.com/api/auth/register",
    data: {
      username,
      password,
    },
  });
  return response;
};

export const login = async ({ username, password }) => {
  const response = await axios({
    method: "post",
    url: "https://todo.hisfolio.com/api/auth/login",
    data: {
      username,
      password,
    },
  });
  return response;
};

export const logout = async () => {
  const response = await axios({
    method: "post",
    url: "https://todo.hisfolio.com/api/auth/logout",
  });
  return response;
};

export const check = async () => {
  const response = await axios({
    method: "get",
    url: "https://todo.hisfolio.com/api/auth/check",
  });
  return response;
};
