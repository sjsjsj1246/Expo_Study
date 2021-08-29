import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const Singup = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    onLogin({ username, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="아이디"
        style={styles.inputContent}
        value={username}
        type="text"
        onChangeText={(text) => {
          setUsername(text);
        }}
      ></TextInput>
      <TextInput
        placeholder="비밀번호"
        style={styles.inputContent}
        value={password}
        type="password"
        onChangeText={(text) => {
          setPassword(text);
        }}
      ></TextInput>
      <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
        <Text style={styles.signupButtonText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <Text style={styles.signinButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContent: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 5,
    marginBottom: 10,
  },
  signupButton: {
    width: 200,
    height: 50,
    backgroundColor: "#3B5DF5",
    marginBottom: 10,
  },
  signinButton: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#3B5DF5",
    marginBottom: 10,
  },
  signupButtonText: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    lineHeight: 50,
    color: "white",
  },
  signinButtonText: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    lineHeight: 50,
    color: "#3B5DF5",
  },
});

export default Singup;
