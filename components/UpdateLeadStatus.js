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

const UpdateLeadStatus = ({ navigation }) => {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [status, setStatus] = useState("");

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

  const handleStatusUpdate = () => {
    if (!selectedLead || !status) {
      Alert.alert("Error", "Please select a lead and status.");
      return;
    }

    // Update the status of the selected lead (this is where you'd add your database update logic)
    Alert.alert("Success", "Lead status updated successfully.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Lead</Text>
      <FlatList
        data={leads}
        keyExtractor={(item) => item.LeadID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setSelectedLead(item);
              setStatus(item.Status);
            }}
          >
            <Text style={styles.itemText}>ID: {item.LeadID}</Text>
            <Text style={styles.itemText}>
              Description: {item.LeadDescription}
            </Text>
          </TouchableOpacity>
        )}
      />

      {selectedLead && (
        <>
          <Text style={styles.label}>Status</Text>
          <TextInput
            style={styles.input}
            value={status}
            onChangeText={setStatus}
          />

          <Text style={styles.label}>
            Lead Source: {selectedLead.LeadSource}
          </Text>
          <Text style={styles.label}>
            Date Received: {selectedLead.DateReceived}
          </Text>
          <Text style={styles.label}>
            Time Received: {selectedLead.TimeReceived}
          </Text>
          <Text style={styles.label}>
            Source Contact Info: {selectedLead.SourceContactInfo}
          </Text>
          <Text style={styles.label}>
            Priority Level: {selectedLead.PriorityLevel}
          </Text>
          <Text style={styles.label}>
            Assigned Investigator: {selectedLead.AssignedInvestigator}
          </Text>
          <Text style={styles.label}>
            Assignment Date: {selectedLead.AssignmentDate}
          </Text>
          <Text style={styles.label}>
            Initial Actions: {selectedLead.InitialActions}
          </Text>
          <Text style={styles.label}>
            Follow-Up Actions: {selectedLead.FollowUpActions}
          </Text>
          <Text style={styles.label}>Results: {selectedLead.Results}</Text>
          <Text style={styles.label}>
            Verification Steps: {selectedLead.VerificationSteps}
          </Text>
          <Text style={styles.label}>
            Verification Results: {selectedLead.VerificationResults}
          </Text>
          <Text style={styles.label}>
            Linked Evidence: {selectedLead.LinkedEvidence}
          </Text>
          <Text style={styles.label}>
            Evidence Description: {selectedLead.EvidenceDescription}
          </Text>
          <Text style={styles.label}>
            Additional Notes: {selectedLead.AdditionalNotes}
          </Text>

          <Button
            color="#FFD700"
            title="Update Status"
            onPress={handleStatusUpdate}
          />
        </>
      )}
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
    color: "#000",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  itemText: {
    fontSize: 16,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});

export default UpdateLeadStatus;
