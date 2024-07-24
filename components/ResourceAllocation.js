import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";

const ResourceAllocation = () => {
  const navigation = useNavigation();
  const resources = [
    {
      resourceID: "1",
      name: "Forensic Kit",
      type: "Equipment",
      availability: "Available",
    },
    // Add more resources here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resource Allocation</Text>
      <FlatList
        data={resources}
        keyExtractor={(item) => item.resourceID}
        renderItem={({ item }) => (
          <View style={styles.resourceItem}>
            <Text>Name: {item.name}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Availability: {item.availability}</Text>
            <CustomButton
              active={false}
              onPress={() =>
                navigation.navigate("ResourceDetail", { resource: item })
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
            navigation.navigate("ResourceDetail", { resource: null })
          }
          iconName="plus"
        >
          Add Resource
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
  resourceItem: {
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

export default ResourceAllocation;
