import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const CustomButton = ({ active, onPress, children, iconName }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      style={styles.button}
    >
      <LinearGradient
        colors={
          pressed
            ? ["#D3D3D3", "#7D7D7D"]
            : active
            ? ["#D3D3D3", "#7D7D7D"]
            : ["#ffeb3b", "#fdd835"]
        }
        style={styles.gradient}
      >
        <FontAwesome
          name={iconName}
          size={24}
          color="#000"
          style={styles.icon}
        />
        <ButtonText>{children}</ButtonText>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
});

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export default CustomButton;
