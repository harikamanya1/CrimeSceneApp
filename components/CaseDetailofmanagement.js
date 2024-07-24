import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "./CustomButton"; // Assuming you have a CustomButton component

const CaseDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { case: caseData } = route.params || {};

  const [title, setTitle] = useState(caseData ? caseData.title : "");
  const [description, setDescription] = useState(
    caseData ? caseData.description : ""
  );
  const [status, setStatus] = useState(caseData ? caseData.status : "Open");
  const [assignedTeam, setAssignedTeam] = useState(
    caseData ? caseData.assignedTeam : ""
  );

  const saveCase = () => {
    // Logic to save the case, either by creating a new one or updating an existing one
    if (caseData) {
      // Update existing case logic
    } else {
      // Add new case logic
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{caseData ? "Edit Case" : "Add Case"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Assigned Team"
        value={assignedTeam}
        onChangeText={setAssignedTeam}
      />
      <CustomButton active={false} onPress={saveCase} iconName="save">
        Save
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
    marginBottom: 20,
    color: "#000",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default CaseDetail;
