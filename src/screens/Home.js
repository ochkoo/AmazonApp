import React from "react";
import { View, Text, Button } from "react-native";
import MyButton from "../components/MyButton";

function Home({ navigation }) {
  return (
    <View>
      <Text style={{ marginVertical: 20, textAlign: "center" }}>
        HOME Screen
      </Text>

      <MyButton
        title="Flexbox"
        onPress={() => navigation.navigate("Flexbox")}
      />
      <MyButton
        title="Flatlist"
        onPress={() => navigation.navigate("Flatlist")}
      />
    </View>
  );
}

export default Home;
