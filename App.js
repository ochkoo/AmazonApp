import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import FlexboxScreen from "./src/screens/FlexboxScreen";
import FlatlistScreen from "./src/screens/FlatlistScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Нүүр" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Нэвтрэх" }}
        />
        <Stack.Screen
          name="Flexbox"
          component={FlexboxScreen}
          options={{ title: "Flexbox" }}
        />
        <Stack.Screen
          name="Flatlist"
          component={FlatlistScreen}
          options={{ title: "Flatlist" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
