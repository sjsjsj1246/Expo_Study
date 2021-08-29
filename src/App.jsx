import { registerRootComponent } from "expo";
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootStore from "./modules";
import { NavigationContainer } from "@react-navigation/native";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import TodoListScreen from "./screens/TodoListScreen";

const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="TodoList" component={TodoListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default registerRootComponent(App);
