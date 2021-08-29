import { useNavigation } from "@react-navigation/core";
import React from "react";
import { register } from "../api/auth";
import Signup from "../components/Signup";

const SignupContainer = () => {
  const navigation = useNavigation();

  const onRegister = ({ username, password }) => {
    register({ username, password }).then(() => {
      navigation.nativate("TodoList");
    });
  };

  return <Signup onRegister={onRegister} />;
};

export default SignupContainer;
