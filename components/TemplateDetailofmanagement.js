import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";

const TemplateDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { template } = route.params || {};

  const [name, setName] = useState(template ? template.name : "");
  const [description, setDescription] = useState(
    template ? template.description : ""
  );
  const [steps, setSteps] = useState(template ? template.steps.join(", ") : "");

  useEffect(() => {
    if (template) {
      setName(template.name);
      setDescription(template.description);
      setSteps(template.steps.join(", "));
    }
  }, [template]);

  const saveTemplate = () => {
    if (template) {
      // Update existing template logic
      // Example: updateTemplate(templateID, { name, description, steps: steps.split(", ") });
    } else {
      // Add new template logic
      // Example: addTemplate({ name, description, steps: steps.split(", ") });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {template ? "Edit Template" : "Add Template"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
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
        placeholder="Steps (comma separated)"
        value={steps}
        onChangeText={setSteps}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={saveTemplate} iconName="save">
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

export default TemplateDetail;
