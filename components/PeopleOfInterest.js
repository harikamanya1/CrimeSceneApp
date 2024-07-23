// PeopleOfInterest.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PeopleOfInterest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>People of Interest</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Add Person"
          onPress={() => navigation.navigate("AddPerson")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View People"
          onPress={() => navigation.navigate("ViewPeople")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8DC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Adds vertical space between buttons
    width: "80%", // Ensures buttons are the same width
  },
});

export default PeopleOfInterest;
