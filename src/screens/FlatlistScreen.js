import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const FlastListScreen = () => {
  const persons = [
    { name: "Амараа", color: "#D63031" },
    { name: "Нараа", color: "#AE1438" },
    { name: "Болдоо", color: "#74B9FF" },
    { name: "Сараа", color: "#26ae60" },
    { name: "Урнаа", color: "#6A89CC" },
  ];

  const handleClick = (name) => {
    Alert.alert(`Сайн байна уу : ${name}`);
  };

  return (
    <FlatList
      data={persons}
      keyExtractor={(p) => p.name}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={() => handleClick(item.name)}>
          <View style={{ backgroundColor: item.color, padding: 20 }}>
            <Text>
              {index + 1}) {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FlastListScreen;

const styles = StyleSheet.create({});
