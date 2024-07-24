import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "./CustomButton"; // Import your CustomButton component

const TeamDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { team } = route.params || {};

  const [name, setName] = useState(team ? team.name : "");
  const [members, setMembers] = useState(team ? team.members.join(", ") : "");
  const [roles, setRoles] = useState(team ? team.roles.join(", ") : "");

  const saveTeam = () => {
    if (team) {
      // Update existing team logic
    } else {
      // Add new team logic
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{team ? "Edit Team" : "Add Team"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Members (comma separated)"
        value={members}
        onChangeText={setMembers}
      />
      <TextInput
        style={styles.input}
        placeholder="Roles (comma separated)"
        value={roles}
        onChangeText={setRoles}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={saveTeam} iconName="save">
          Save
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
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default TeamDetail;
