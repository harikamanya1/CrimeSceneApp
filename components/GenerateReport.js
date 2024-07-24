import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const GenerateReport = () => {
  const [reportName, setReportName] = useState("");
  const [template, setTemplate] = useState("");
  const [criteria, setCriteria] = useState("");

  const generateReport = () => {
    // Logic to generate a report
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate New Report</Text>
      <TextInput
        style={styles.input}
        placeholder="Report Name"
        value={reportName}
        onChangeText={setReportName}
      />
      <TextInput
        style={styles.input}
        placeholder="Template"
        value={template}
        onChangeText={setTemplate}
      />
      <TextInput
        style={styles.input}
        placeholder="Criteria"
        value={criteria}
        onChangeText={setCriteria}
        multiline
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={generateReport} iconName="save">
          Generate
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

export default GenerateReport;
