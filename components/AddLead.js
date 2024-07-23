import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddLead = ({ navigation }) => {
  const [leadSource, setLeadSource] = useState("");
  const [leadDescription, setLeadDescription] = useState("");
  const [dateReceived, setDateReceived] = useState(new Date());
  const [timeReceived, setTimeReceived] = useState(new Date());
  const [sourceContactInfo, setSourceContactInfo] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("Medium");
  const [status, setStatus] = useState("New");
  const [assignedInvestigator, setAssignedInvestigator] = useState("");
  const [assignmentDate, setAssignmentDate] = useState(new Date());
  const [initialActions, setInitialActions] = useState("");
  const [followUpActions, setFollowUpActions] = useState("");
  const [results, setResults] = useState("");
  const [verificationSteps, setVerificationSteps] = useState("");
  const [verificationResults, setVerificationResults] = useState("");
  const [linkedEvidence, setLinkedEvidence] = useState("");
  const [evidenceDescription, setEvidenceDescription] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // New state variables for showing the pickers
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showAssignmentDatePicker, setShowAssignmentDatePicker] =
    useState(false);

  const handleSave = () => {
    if (!leadDescription) {
      Alert.alert("Error", "Lead Description is required.");
      return;
    }

    // Save the lead (this is where you'd add your database save logic)
    Alert.alert("Success", "Lead added successfully.");
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateReceived;
    setShowDatePicker(false);
    setDateReceived(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || timeReceived;
    setShowTimePicker(false);
    setTimeReceived(currentTime);
  };

  const handleAssignmentDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || assignmentDate;
    setShowAssignmentDatePicker(false);
    setAssignmentDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Lead Source</Text>
      <TextInput
        style={styles.input}
        value={leadSource}
        onChangeText={setLeadSource}
        placeholder="Enter lead source"
      />

      <Text style={styles.label}>Lead Description</Text>
      <TextInput
        style={styles.textArea}
        value={leadDescription}
        onChangeText={setLeadDescription}
        placeholder="Enter lead description"
        multiline
      />

      <Text style={styles.label}>Date Received</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.input}
      >
        <Text>{dateReceived.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dateReceived}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>Time Received</Text>
      <TouchableOpacity
        onPress={() => setShowTimePicker(true)}
        style={styles.input}
      >
        <Text>{timeReceived.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={timeReceived}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <Text style={styles.label}>Source Contact Information</Text>
      <TextInput
        style={styles.input}
        value={sourceContactInfo}
        onChangeText={setSourceContactInfo}
        placeholder="Enter source contact information"
      />

      <Text style={styles.label}>Priority Level</Text>
      <TextInput
        style={styles.input}
        value={priorityLevel}
        onChangeText={setPriorityLevel}
        placeholder="Enter priority level"
      />

      <Text style={styles.label}>Status</Text>
      <TextInput
        style={styles.input}
        value={status}
        onChangeText={setStatus}
        placeholder="Enter status"
      />

      <Text style={styles.label}>Assigned Investigator</Text>
      <TextInput
        style={styles.input}
        value={assignedInvestigator}
        onChangeText={setAssignedInvestigator}
        placeholder="Enter assigned investigator"
      />

      <Text style={styles.label}>Assignment Date</Text>
      <TouchableOpacity
        onPress={() => setShowAssignmentDatePicker(true)}
        style={styles.input}
      >
        <Text>{assignmentDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showAssignmentDatePicker && (
        <DateTimePicker
          value={assignmentDate}
          mode="date"
          display="default"
          onChange={handleAssignmentDateChange}
        />
      )}

      <Text style={styles.label}>Initial Actions</Text>
      <TextInput
        style={styles.textArea}
        value={initialActions}
        onChangeText={setInitialActions}
        placeholder="Enter initial actions"
        multiline
      />

      <Text style={styles.label}>Follow-Up Actions</Text>
      <TextInput
        style={styles.textArea}
        value={followUpActions}
        onChangeText={setFollowUpActions}
        placeholder="Enter follow-up actions"
        multiline
      />

      <Text style={styles.label}>Results</Text>
      <TextInput
        style={styles.textArea}
        value={results}
        onChangeText={setResults}
        placeholder="Enter results"
        multiline
      />

      <Text style={styles.label}>Verification Steps</Text>
      <TextInput
        style={styles.textArea}
        value={verificationSteps}
        onChangeText={setVerificationSteps}
        placeholder="Enter verification steps"
        multiline
      />

      <Text style={styles.label}>Verification Results</Text>
      <TextInput
        style={styles.textArea}
        value={verificationResults}
        onChangeText={setVerificationResults}
        placeholder="Enter verification results"
        multiline
      />

      <Text style={styles.label}>Linked Evidence</Text>
      <TextInput
        style={styles.input}
        value={linkedEvidence}
        onChangeText={setLinkedEvidence}
        placeholder="Enter linked evidence IDs"
      />

      <Text style={styles.label}>Evidence Description</Text>
      <TextInput
        style={styles.textArea}
        value={evidenceDescription}
        onChangeText={setEvidenceDescription}
        placeholder="Enter evidence description"
        multiline
      />

      <Text style={styles.label}>Additional Notes</Text>
      <TextInput
        style={styles.textArea}
        value={additionalNotes}
        onChangeText={setAdditionalNotes}
        placeholder="Enter additional notes"
        multiline
      />

      <Button color="#FFD700" title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF8DC",
  },
  label: {
    fontSize: 16,
    color: "#FFD700",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    height: 100,
  },
});

export default AddLead;
