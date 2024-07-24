import React, { useState } from "react";
import { View, Text, TextInput, Switch, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const UserProfile = ({ route, navigation }) => {
  const { user } = route.params || {};
  const [username, setUsername] = useState(user?.Username || "");
  const [email, setEmail] = useState(user?.Email || "");
  const [role, setRole] = useState(user?.Role || "");
  const [onlineStatus, setOnlineStatus] = useState(user?.OnlineStatus || false);

  const saveUser = () => {
    // Add logic to save user details
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user ? "Edit User" : "Add User"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <View style={styles.switchContainer}>
        <Text>Online Status</Text>
        <Switch value={onlineStatus} onValueChange={setOnlineStatus} />
      </View>
      <CustomButton active={false} onPress={saveUser} iconName="save">
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default UserProfile;
