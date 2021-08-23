import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function MyButton({ style, title, onPress }) {
  return (
    <View style={[css.button, style]}>
      <Button onPress={onPress} title={title} />
    </View>
  );
}

const css = StyleSheet.create({
  button: {
    marginTop: 15,
    marginHorizontal: 15,
  },
});
