import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

const Tasks = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const tasks = [
    {
      TaskID: "1",
      Title: "Collect Evidence",
      Description: "Gather all physical evidence from the scene.",
      AssignedTo: "John Doe",
      CreatedBy: "Jane Doe",
      CreatedAt: "2024-07-20",
      DueDate: "2024-07-25",
      Status: "In Progress",
    },
    // Add more tasks here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.TaskID}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>Title: {item.Title}</Text>
            <Text>Description: {item.Description}</Text>
            <Text>Assigned to: {item.AssignedTo}</Text>
            <Text>
              Created by: {item.CreatedBy} on {item.CreatedAt}
            </Text>
            <Text>Due date: {item.DueDate}</Text>
            <Text>Status: {item.Status}</Text>
            <CustomButton
              active={activeButton === item.TaskID}
              onPress={() => {
                setActiveButton(item.TaskID);
                navigation.navigate("TaskDetail", { task: item });
              }}
              iconName="edit"
            >
              Edit
            </CustomButton>
          </View>
        )}
      />
      <CustomButton
        active={activeButton === "AddTask"}
        onPress={() => {
          setActiveButton("AddTask");
          navigation.navigate("TaskDetail");
        }}
        iconName="plus"
      >
        Add Task
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
    color: "#FFD700",
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
});

export default Tasks;
