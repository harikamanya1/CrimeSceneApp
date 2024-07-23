// ForensicAnalysisMain.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ForensicAnalysisMain = () => {
  const navigation = useNavigation();

  const dummyAnalysis = {
    AnalysisID: "A001",
    EvidenceID: "E001",
    RequestedBy: "John Doe",
    DateOfRequest: "2023-01-01",
    Purpose: "Investigate",
    LabName: "Crime Lab",
    LabAddress: "123 Lab Street",
    LabContact: "1234567890",
    AnalystName: "Jane Doe",
    AnalystRole: "Lead Analyst",
    AnalystContact: "0987654321",
    AnalysisType: "DNA Analysis",
    MethodsUsed: "PCR",
    EquipmentUsed: "Thermal Cycler",
    Findings: "Positive match",
    Interpretation: "Suspect is the source",
    ComparisonResults: "Matched with suspect DNA",
    Report: "Full analysis report",
    Photos: "photo1.jpg,photo2.jpg",
    Notes: "Additional notes",
    CustodyDetails: "Handled by Officer A",
    TransferDetails: "Transferred to lab on 2023-01-02",
    Signatures: "Signature of Officer A",
    StorageLocation: "Evidence Room 1",
    StorageConditions: "Cold storage",
    DisposalDetails: "Disposed on 2023-01-03",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forensic Analysis</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Create Analysis"
          onPress={() => navigation.navigate("CreateForensicAnalysis")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Analyses"
          onPress={() => navigation.navigate("ViewForensicAnalysis")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Link Analysis to Evidence"
          onPress={() => navigation.navigate("LinkForensicAnalysis")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Update Analysis"
          onPress={() =>
            navigation.navigate("UpdateForensicAnalysis", {
              analysis: dummyAnalysis,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF8DC",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#FFD700",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
});

export default ForensicAnalysisMain;
