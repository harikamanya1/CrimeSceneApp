import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const TaskDetail = ({ route, navigation }) => {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task?.Title || "");
  const [description, setDescription] = useState(task?.Description || "");
  const [assignedTo, setAssignedTo] = useState(task?.AssignedTo || "");
  const [dueDate, setDueDate] = useState(task?.DueDate || "");
  const [status, setStatus] = useState(task?.Status || "Pending");

  const saveTask = () => {
    // Logic to save the task
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task ? "Edit Task" : "Add Task"}</Text>
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
        placeholder="Assigned To"
        value={assignedTo}
        onChangeText={setAssignedTo}
      />
      <TextInput
        style={styles.input}
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <CustomButton active={false} onPress={saveTask} iconName="save">
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
    color: "#FFD700",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default TaskDetail;
