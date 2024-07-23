import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LeadsMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leads - Recording Module</Text>
      <View style={styles.buttonContainer}>
        <Button
          color="#FFD700"
          title="Add Lead"
          onPress={() => navigation.navigate("AddLead")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#FFD700"
          title="View Leads"
          onPress={() => navigation.navigate("ViewLeads")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#FFD700"
          title="Update Lead Status"
          onPress={() => navigation.navigate("UpdateLeadStatus")}
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
    padding: 16,
    backgroundColor: "#FFF8DC",
  },
  title: {
    fontSize: 24,
    color: "#000",
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Add vertical margin to create space between buttons
  },
});

export default LeadsMain;
