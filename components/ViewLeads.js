import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ViewLeads = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch leads from backend or use dummy data
    setLeads([
      {
        LeadID: 1,
        LeadSource: "Tip from a witness",
        LeadDescription: "Detailed lead description 1",
        DateReceived: "2023-01-01",
        TimeReceived: "12:00 PM",
        SourceContactInfo: "John Doe, 123-456-7890, john@example.com",
        PriorityLevel: "High",
        Status: "New",
        AssignedInvestigator: "Investigator Name",
        AssignmentDate: "2023-01-02",
        InitialActions: "Initial actions taken",
        FollowUpActions: "Follow-up actions taken",
        Results: "Results of actions",
        VerificationSteps: "Verification steps taken",
        VerificationResults: "Verification results",
        LinkedEvidence: "E001, E002",
        EvidenceDescription: "Description of evidence",
        AdditionalNotes: "Additional notes for the lead",
      },
      // Add more dummy entries
    ]);
  }, []);

  const handleSearch = () => {
    // Implement search functionality
    const filteredLeads = leads.filter(
      (lead) =>
        lead.LeadDescription.includes(searchTerm) ||
        lead.DateReceived.includes(searchTerm) ||
        lead.Status.includes(searchTerm)
    );
    setLeads(filteredLeads);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search leads"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={leads}
        keyExtractor={(item) => item.LeadID.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>Lead ID: {item.LeadID}</Text>
            <Text style={styles.field}>Source: {item.LeadSource}</Text>
            <Text style={styles.field}>
              Description: {item.LeadDescription}
            </Text>
            <Text style={styles.field}>Date Received: {item.DateReceived}</Text>
            <Text style={styles.field}>Time Received: {item.TimeReceived}</Text>
            <Text style={styles.field}>
              Source Contact Info: {item.SourceContactInfo}
            </Text>
            <Text style={styles.field}>
              Priority Level: {item.PriorityLevel}
            </Text>
            <Text style={styles.field}>Status: {item.Status}</Text>
            <Text style={styles.field}>
              Assigned Investigator: {item.AssignedInvestigator}
            </Text>
            <Text style={styles.field}>
              Assignment Date: {item.AssignmentDate}
            </Text>
            <Text style={styles.field}>
              Initial Actions: {item.InitialActions}
            </Text>
            <Text style={styles.field}>
              Follow-Up Actions: {item.FollowUpActions}
            </Text>
            <Text style={styles.field}>Results: {item.Results}</Text>
            <Text style={styles.field}>
              Verification Steps: {item.VerificationSteps}
            </Text>
            <Text style={styles.field}>
              Verification Results: {item.VerificationResults}
            </Text>
            <Text style={styles.field}>
              Linked Evidence: {item.LinkedEvidence}
            </Text>
            <Text style={styles.field}>
              Evidence Description: {item.EvidenceDescription}
            </Text>
            <Text style={styles.field}>
              Additional Notes: {item.AdditionalNotes}
            </Text>
          </View>
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
  },
  searchButton: {
    padding: 8,
    backgroundColor: "#FFD700",
    color: "#000",
    borderRadius: 4,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  field: {
    fontSize: 16,
    marginVertical: 4,
    color: "#000",
  },
});

export default ViewLeads;
