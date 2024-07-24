import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Management = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Management Module</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#D3D3D3" : "#FFD700" },
        ]}
        onPress={() => navigation.navigate("CaseManagement")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="briefcase" size={24} color="#000" />
          <Text style={styles.buttonText}>Case Management</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#D3D3D3" : "#FFD700" },
        ]}
        onPress={() => navigation.navigate("TeamManagement")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="users" size={24} color="#000" />
          <Text style={styles.buttonText}>Team Management</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#D3D3D3" : "#FFD700" },
        ]}
        onPress={() => navigation.navigate("TaskAssignment")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="tasks" size={24} color="#000" />
          <Text style={styles.buttonText}>Task Assignment</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#D3D3D3" : "#FFD700" },
        ]}
        onPress={() => navigation.navigate("ResourceAllocation")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="cogs" size={24} color="#000" />
          <Text style={styles.buttonText}>Resource Allocation</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#D3D3D3" : "#FFD700" },
        ]}
        onPress={() => navigation.navigate("WorkflowTemplates")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="file-text" size={24} color="#000" />
          <Text style={styles.buttonText}>Workflow Templates</Text>
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
    padding: 20,
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

export default Management;
