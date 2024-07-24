import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton"; // Assuming you have a CustomButton component

const CaseManagement = () => {
  const navigation = useNavigation();
  const cases = [
    {
      caseID: "1",
      title: "Burglary at 5th Avenue",
      description: "A detailed description of the case...",
      status: "Open",
      dateOpened: "2024-07-01",
      assignedTeam: "Team Alpha",
    },
    // Add more cases here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Case Management</Text>
      <FlatList
        data={cases}
        keyExtractor={(item) => item.caseID}
        renderItem={({ item }) => (
          <View style={styles.caseItem}>
            <Text>Title: {item.title}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Assigned Team: {item.assignedTeam}</Text>
            <CustomButton
              active={false}
              onPress={() => navigation.navigate("CaseDetail", { case: item })}
              iconName="edit"
            >
              Edit
            </CustomButton>
          </View>
        )}
      />
      <CustomButton
        active={false}
        onPress={() => navigation.navigate("CaseDetail", { case: null })}
        iconName="plus"
      >
        Add Case
      </CustomButton>
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
  caseItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
});

export default CaseManagement;
