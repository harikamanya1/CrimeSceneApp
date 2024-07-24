import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton"; // Ensure you have a CustomButton component

const TaskAssignment = () => {
  const navigation = useNavigation();
  const tasks = [
    {
      taskID: "1",
      title: "Collect Evidence",
      description: "Gather all physical evidence from the scene.",
      status: "Not Started",
      dueDate: "2024-07-25",
      assignedTo: "John Doe",
    },
    // Add more tasks here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Assignment</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.taskID}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>Title: {item.title}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Assigned To: {item.assignedTo}</Text>
            <Text>Due Date: {item.dueDate}</Text>
            <CustomButton
              active={false}
              onPress={() => navigation.navigate("TaskDetail", { task: item })}
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
          onPress={() => navigation.navigate("TaskDetail")}
          iconName="plus"
        >
          Add Task
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
  taskItem: {
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

export default TaskAssignment;
