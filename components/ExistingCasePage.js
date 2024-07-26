import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ExistingCasePage = ({ route, navigation }) => {
  const { caseId, scenes } = route.params;

  const handleGoToCaseScenes = () => {
    navigation.navigate("CaseScenes", { caseId, scenes });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Existing Case Page</Text>
      <Text style={styles.subtitle}>Case ID: {caseId}</Text>
      <TouchableOpacity onPress={handleGoToCaseScenes} style={styles.button}>
        <Text style={styles.buttonText}>View Case Scenes</Text>
      </TouchableOpacity>
      {/* Implement your existing case details logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8DC",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 18,
    color: "#000",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FFD700",
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default ExistingCasePage;
