import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";

const LinkForensicAnalysis = ({ navigation }) => {
  const [analysisId, setAnalysisId] = useState("");
  const [evidenceId, setEvidenceId] = useState("");
  const [evidenceItems, setEvidenceItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch evidence items from backend or use dummy data
    setEvidenceItems([
      { EvidenceID: "E001", Description: "Blood sample" },
      { EvidenceID: "E002", Description: "Fingerprint" },
      // Add more dummy entries
    ]);
  }, []);

  const handleLink = () => {
    if (!analysisId || !evidenceId) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    // Link forensic analysis result to evidence item
    Alert.alert(
      "Success",
      "Forensic analysis linked to evidence item successfully."
    );
    navigation.goBack();
  };

  const handleSearch = () => {
    // Implement search functionality
    const filteredEvidence = evidenceItems.filter((item) =>
      item.Description.includes(searchTerm)
    );
    setEvidenceItems(filteredEvidence);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Analysis ID</Text>
      <TextInput
        style={styles.input}
        value={analysisId}
        onChangeText={setAnalysisId}
        placeholder="Enter analysis ID (e.g., A001)"
      />

      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search evidence items"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={evidenceItems}
        keyExtractor={(item) => item.EvidenceID}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => setEvidenceId(item.EvidenceID)}
          >
            <Text style={styles.itemText}>ID: {item.EvidenceID}</Text>
            <Text style={styles.itemText}>Description: {item.Description}</Text>
          </TouchableOpacity>
        )}
      />

      <Button title="Link" onPress={handleLink} color="#FFD700" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8DC",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#FFD700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
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
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  itemText: {
    fontSize: 16,
  },
});

export default LinkForensicAnalysis;
