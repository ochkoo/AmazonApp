import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

function Login(props) {
  const { navigation } = props;

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (phone || password) {
      Alert.alert(`Таны дугаар ${phone} нууц үг ${password}`);
    }
    navigation.navigate("Home");
  };

  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/images/shop.png")}
      />
      <Text style={{ margin: 20 }}>
        Та хэрэглэгчийн нэр нууц үгээ оруулна уу
      </Text>
      <MyInput
        placeholder="Дугаараа оруулана уу"
        value={phone}
        keyboardType="number-pad"
        onChangeText={setPhone}
      />
      <MyInput
        placeholder="Нууц үгээ оруулана уу"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <MyButton onPress={handleLogin} title="Нэвтрэх" />
      <MyButton
        onPress={() => {
          navigation.pop();
        }}
        title="Буцах"
      />
    </View>
  );
}

export default Login;
