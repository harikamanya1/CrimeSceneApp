import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Collaboration = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const handlePress = (button, screen) => {
    setActiveButton(button);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collaboration Module</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed
              ? "#D3D3D3"
              : activeButton === "Users"
              ? "#7D7D7D"
              : "#FFD700",
          },
        ]}
        onPress={() => handlePress("Users", "Users")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="user" size={24} color="#000" />
          <Text style={styles.buttonText}>Users</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed
              ? "#D3D3D3"
              : activeButton === "Notes"
              ? "#7D7D7D"
              : "#FFD700",
          },
        ]}
        onPress={() => handlePress("Notes", "Notes")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="sticky-note" size={24} color="#000" />
          <Text style={styles.buttonText}>Notes</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed
              ? "#D3D3D3"
              : activeButton === "Documents"
              ? "#7D7D7D"
              : "#FFD700",
          },
        ]}
        onPress={() => handlePress("Documents", "Documents")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="file" size={24} color="#000" />
          <Text style={styles.buttonText}>Documents</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed
              ? "#D3D3D3"
              : activeButton === "Tasks"
              ? "#7D7D7D"
              : "#FFD700",
          },
        ]}
        onPress={() => handlePress("Tasks", "Tasks")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="tasks" size={24} color="#000" />
          <Text style={styles.buttonText}>Tasks</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  button: {
    width: "80%",
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
});

export default Collaboration;
