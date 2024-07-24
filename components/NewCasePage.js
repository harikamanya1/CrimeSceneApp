import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const NewCasePage = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const handlePress = (button, screen) => {
    setActiveButton(button);
    navigation.navigate(screen); // Navigate to the appropriate screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Case Page</Text>
      <Button
        active={activeButton === "Record"}
        onPress={() => handlePress("Record", "Home")}
        iconName="microphone"
      >
        <ButtonText>Record</ButtonText>
      </Button>
      <Button
        active={activeButton === "Collaborate"}
        onPress={() => handlePress("Collaborate", "Collaboration")}
        iconName="users"
      >
        <ButtonText>Collaborate</ButtonText>
      </Button>
      <Button
        active={activeButton === "Management"}
        onPress={() => handlePress("Management", "Management")}
        iconName="cogs"
      >
        <ButtonText>Management</ButtonText>
      </Button>
      <Button
        active={activeButton === "Reporting"}
        onPress={() => handlePress("Reporting", "ReportScreen")}
        iconName="file-text"
      >
        <ButtonText>Reporting</ButtonText>
      </Button>
    </View>
  );
};

const Button = ({ active, onPress, children, iconName }) => {
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
  container: {
    flex: 1,
    backgroundColor: "#fff8e1", // Light yellow background
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000", // Black text
  },
  button: {
    width: "80%",
    marginVertical: 10,
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row", // Align icon and text horizontally
    justifyContent: "center", // Center the content
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#000", // Black text
    fontWeight: "bold",
  },
});

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export default NewCasePage;
