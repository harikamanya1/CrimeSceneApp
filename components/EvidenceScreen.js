import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const EvidenceScreen = () => {
  const navigation = useNavigation();
  const [evidences, setEvidences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch evidences from your backend or state
    // For now, we'll use dummy data
    setEvidences([
      {
        id: "1",
        type: "Document",
        description: "Case report",
        date: "01/15/2022",
        associatedCase: "Case1",
      },
      {
        id: "2",
        type: "Photo",
        description: "Crime scene photo",
        date: "01/16/2022",
        associatedCase: "Case2",
      },
      // Add more dummy entries
    ]);
  }, []);

  const handleSearch = () => {
    // Implement search functionality here
    // For now, we'll filter the evidences locally
    const filteredEvidences = evidences.filter(
      (evidence) =>
        evidence.description.includes(searchTerm) ||
        evidence.associatedCase.includes(searchTerm) ||
        evidence.type.includes(searchTerm)
    );
    setEvidences(filteredEvidences);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search evidences"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={evidences}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.evidenceItem}>
            <Text style={styles.evidenceText}>{item.type}</Text>
            <Text style={styles.evidenceText}>{item.description}</Text>
            <Text style={styles.evidenceText}>{item.date}</Text>
            <Text style={styles.evidenceText}>{item.associatedCase}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() =>
                navigation.navigate("EditEvidence", { evidence: item })
              }
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddEvidence")}
      >
        <Text style={styles.addButtonText}>Add Entry</Text>
      </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    flex: 1,
    marginRight: 10,
  },
  evidenceItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  evidenceText: {
    fontSize: 16,
    flex: 1,
  },
  editButton: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  editButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EvidenceScreen;
