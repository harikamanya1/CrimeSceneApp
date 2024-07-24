import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton"; // Ensure you have a CustomButton component

const TeamManagement = () => {
  const navigation = useNavigation();
  const teams = [
    {
      teamID: "1",
      name: "Team Alpha",
      members: ["John Doe", "Jane Smith"],
      roles: ["Investigator", "Forensic Analyst"],
    },
    // Add more teams here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Management</Text>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.teamID}
        renderItem={({ item }) => (
          <View style={styles.teamItem}>
            <Text>Name: {item.name}</Text>
            <Text>Members: {item.members.join(", ")}</Text>
            <Text>Roles: {item.roles.join(", ")}</Text>
            <CustomButton
              active={false}
              onPress={() => navigation.navigate("TeamDetail", { team: item })}
              iconName="edit"
            >
              Edit
            </CustomButton>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          active={false}
          onPress={() => navigation.navigate("TeamDetail")}
          iconName="plus"
        >
          Add Team
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8DC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  teamItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
  },
});

export default TeamManagement;
