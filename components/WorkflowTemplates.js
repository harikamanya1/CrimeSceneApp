import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";

const WorkflowTemplates = () => {
  const navigation = useNavigation();
  const templates = [
    {
      templateID: "1",
      name: "Initial Investigation",
      description: "Steps for initial crime scene investigation...",
      steps: ["Secure Scene", "Collect Evidence", "Document Scene"],
    },
    // Add more templates here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workflow Templates</Text>
      <FlatList
        data={templates}
        keyExtractor={(item) => item.templateID}
        renderItem={({ item }) => (
          <View style={styles.templateItem}>
            <Text>Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Steps: {item.steps.join(", ")}</Text>
            <CustomButton
              active={false}
              onPress={() =>
                navigation.navigate("TemplateDetail", { template: item })
              }
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
          onPress={() =>
            navigation.navigate("TemplateDetail", { template: null })
          }
          iconName="plus"
        >
          Add Template
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
  templateItem: {
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

export default WorkflowTemplates;
