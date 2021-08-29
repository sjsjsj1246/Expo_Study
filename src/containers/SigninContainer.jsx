import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Singin from "../components/Singin";
import { login } from "../modules/auth";
import { check } from "../modules/user";

const SigninContainer = () => {
  const { auth, error } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogin = ({ username, password }) => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (error) {
      setErrorMessage("아이디와 패스워드를 다시 입력해주세요");
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, error, dispatch]);

  useEffect(() => {
    if (user) {
      alert(`${user.username}님 안녕하세요!`);
      navigation.navigate("TodoList");
    }
  }, [user]);

  return <Singin onLogin={onLogin} errorMessage={errorMessage} />;
};

export default SigninContainer;
