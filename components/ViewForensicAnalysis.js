import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ViewForensicAnalysis = ({ navigation }) => {
  const [analysisResults, setAnalysisResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch forensic analysis results from backend or use dummy data
    setAnalysisResults([
      {
        AnalysisID: "1",
        EvidenceID: "E001",
        RequestedBy: "John Doe - Detective",
        DateOfRequest: "2023-01-01",
        Purpose: "Identify DNA",
        LabName: "ABC Forensic Lab",
        LabAddress: "123 Main St",
        LabContact: "123-456-7890",
        AnalystName: "Jane Smith",
        AnalystRole: "Forensic Scientist",
        AnalystContact: "jane.smith@forensics.com",
        AnalysisType: "DNA Analysis",
        MethodsUsed: "PCR, Gel Electrophoresis",
        EquipmentUsed: "PCR Machine, Gel Box",
        Findings: "DNA match found",
        Interpretation: "The DNA matches the suspect",
        ComparisonResults: "Match with suspect DNA",
        Report: "Link to detailed report",
        Photos: "Link to photos",
        Notes: "No anomalies detected",
        CustodyDetails: "Handled by John Doe",
        TransferDetails: "Transferred to lab on 2023-01-02",
        Signatures: "John Doe, Jane Smith",
        StorageLocation: "Evidence locker 3",
        StorageConditions: "Room temperature",
        DisposalDetails: "Not applicable",
      },
      // Add more dummy entries
    ]);
  }, []);

  const handleSearch = () => {
    // Implement search functionality
    const filteredResults = analysisResults.filter(
      (result) =>
        result.AnalysisType.includes(searchTerm) ||
        result.DateOfRequest.includes(searchTerm)
    );
    setAnalysisResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search analysis results"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={analysisResults}
        keyExtractor={(item) => item.AnalysisID}
        renderItem={({ item }) => (
          <ScrollView contentContainerStyle={styles.resultItem}>
            <Text style={styles.resultText}>
              Analysis ID: {item.AnalysisID}
            </Text>
            <Text style={styles.resultText}>
              Evidence ID: {item.EvidenceID}
            </Text>
            <Text style={styles.resultText}>
              Requested By: {item.RequestedBy}
            </Text>
            <Text style={styles.resultText}>
              Date of Request: {item.DateOfRequest}
            </Text>
            <Text style={styles.resultText}>Purpose: {item.Purpose}</Text>
            <Text style={styles.resultText}>Lab Name: {item.LabName}</Text>
            <Text style={styles.resultText}>
              Lab Address: {item.LabAddress}
            </Text>
            <Text style={styles.resultText}>
              Lab Contact: {item.LabContact}
            </Text>
            <Text style={styles.resultText}>
              Analyst Name: {item.AnalystName}
            </Text>
            <Text style={styles.resultText}>
              Analyst Role: {item.AnalystRole}
            </Text>
            <Text style={styles.resultText}>
              Analyst Contact: {item.AnalystContact}
            </Text>
            <Text style={styles.resultText}>
              Analysis Type: {item.AnalysisType}
            </Text>
            <Text style={styles.resultText}>
              Methods Used: {item.MethodsUsed}
            </Text>
            <Text style={styles.resultText}>
              Equipment Used: {item.EquipmentUsed}
            </Text>
            <Text style={styles.resultText}>Findings: {item.Findings}</Text>
            <Text style={styles.resultText}>
              Interpretation: {item.Interpretation}
            </Text>
            <Text style={styles.resultText}>
              Comparison Results: {item.ComparisonResults}
            </Text>
            <Text style={styles.resultText}>Report: {item.Report}</Text>
            <Text style={styles.resultText}>Photos/Images: {item.Photos}</Text>
            <Text style={styles.resultText}>Notes: {item.Notes}</Text>
            <Text style={styles.resultText}>
              Chain of Custody: {item.CustodyDetails}
            </Text>
            <Text style={styles.resultText}>
              Transfer Details: {item.TransferDetails}
            </Text>
            <Text style={styles.resultText}>Signatures: {item.Signatures}</Text>
            <Text style={styles.resultText}>
              Storage Location: {item.StorageLocation}
            </Text>
            <Text style={styles.resultText}>
              Storage Conditions: {item.StorageConditions}
            </Text>
            <Text style={styles.resultText}>
              Disposal Details: {item.DisposalDetails}
            </Text>
          </ScrollView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8DC",
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: "#fff",
  },
  searchButton: {
    padding: 8,
    backgroundColor: "#FFD700",
    color: "#fff",
    borderRadius: 4,
  },
  resultItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  resultText: {
    fontSize: 16,
  },
});

export default ViewForensicAnalysis;
