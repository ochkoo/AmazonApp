import React from "react";
import { View, StyleSheet } from "react-native";

function FlexboxScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#E5D68A",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        <View style={{ backgroundColor: "#50DBB4", flex: 1 }}></View>
        <View style={{ backgroundColor: "#23C4ED", flex: 5 }}></View>
        <View style={{ backgroundColor: "#FF6263", flex: 2 }}></View>
      </View>
      <View
        style={{
          backgroundColor: "#E5D68A",
          marginTop: 20,
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        <View style={{ backgroundColor: "#50DBB4", flex: 1 }}></View>
        <View style={{ backgroundColor: "#23C4ED", flex: 5 }}></View>
        <View style={{ backgroundColor: "#FF6263", flex: 2 }}></View>
      </View>
    </View>
  );
}

const css = StyleSheet.create({});

export default FlexboxScreen;
