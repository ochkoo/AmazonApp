import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function MyInput({ style, ...rest }) {
  return <TextInput style={[css.input, style]} {...rest} />;
}

const css = StyleSheet.create({
  input: {
    borderBottomColor: "#c6c6c6",
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingVertical: 10,
  },
});
