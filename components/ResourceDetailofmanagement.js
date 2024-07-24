import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";

const ResourceDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { resource } = route.params || {};

  const [name, setName] = useState(resource ? resource.name : "");
  const [type, setType] = useState(resource ? resource.type : "");
  const [availability, setAvailability] = useState(
    resource ? resource.availability : ""
  );

  useEffect(() => {
    if (resource) {
      setName(resource.name);
      setType(resource.type);
      setAvailability(resource.availability);
    }
  }, [resource]);

  const saveResource = () => {
    if (resource) {
      // Update existing resource logic
    } else {
      // Add new resource logic
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {resource ? "Edit Resource" : "Add Resource"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Availability"
        value={availability}
        onChangeText={setAvailability}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={saveResource} iconName="save">
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

export default ResourceDetail;
