import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";

const Users = () => {
  const navigation = useNavigation();
  const users = [
    // Example data
    {
      UserID: "1",
      Username: "John Doe",
      Email: "john@example.com",
      Role: "Investigator",
      OnlineStatus: true,
    },
    // Add more users here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.UserID}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>
              {item.Username} - {item.Role}
            </Text>
            <Text>Email: {item.Email}</Text>
            <Text>Status: {item.OnlineStatus ? "Online" : "Offline"}</Text>
            <CustomButton
              active={false}
              onPress={() => navigation.navigate("UserProfile", { user: item })}
              iconName="edit"
            >
              Edit
            </CustomButton>
          </View>
        )}
      />
      <CustomButton
        active={false}
        onPress={() => navigation.navigate("UserProfile")}
        iconName="plus"
      >
        Add User
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
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
});

export default Users;
