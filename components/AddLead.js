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
import { Picker } from "@react-native-picker/picker";

const AddLead = ({ navigation }) => {
  const [leadId, setLeadId] = useState("");
  const [description, setDescription] = useState("");
  const [dateReceived, setDateReceived] = useState(new Date());
  const [timeReceived, setTimeReceived] = useState(new Date());
  const [leadSource, setLeadSource] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [priority, setPriority] = useState("Medium");
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
  const [notes, setNotes] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleSaveLead = () => {
    if (!leadId || !description || !dateReceived || !status) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    // Save the lead to your backend or state
    Alert.alert("Success", "Lead added successfully");
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
    setShowDatePicker(false);
    setAssignmentDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Lead ID:</Text>
      <TextInput
        style={styles.input}
        value={leadId}
        onChangeText={setLeadId}
        placeholder="Enter lead ID"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />

      <Text style={styles.label}>Date Received:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
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

      <Text style={styles.label}>Time Received:</Text>
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
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

      <Text style={styles.label}>Lead Source:</Text>
      <TextInput
        style={styles.input}
        value={leadSource}
        onChangeText={setLeadSource}
        placeholder="Enter lead source"
      />

      <Text style={styles.label}>Contact Information:</Text>
      <TextInput
        style={styles.input}
        value={contactInfo}
        onChangeText={setContactInfo}
        placeholder="Enter contact information"
      />

      <Text style={styles.label}>Priority Level:</Text>
      <Picker
        selectedValue={priority}
        onValueChange={(itemValue) => setPriority(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="High" value="High" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="Low" value="Low" />
      </Picker>

      <Text style={styles.label}>Status:</Text>
      <Picker
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="New" value="New" />
        <Picker.Item label="In Progress" value="In Progress" />
        <Picker.Item label="Closed" value="Closed" />
      </Picker>

      <Text style={styles.label}>Assigned Investigator:</Text>
      <TextInput
        style={styles.input}
        value={assignedInvestigator}
        onChangeText={setAssignedInvestigator}
        placeholder="Enter assigned investigator"
      />

      <Text style={styles.label}>Assignment Date:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{assignmentDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={assignmentDate}
          mode="date"
          display="default"
          onChange={handleAssignmentDateChange}
        />
      )}

      <Text style={styles.label}>Initial Actions:</Text>
      <TextInput
        style={styles.textArea}
        value={initialActions}
        onChangeText={setInitialActions}
        placeholder="Enter initial actions"
        multiline
      />

      <Text style={styles.label}>Follow-Up Actions:</Text>
      <TextInput
        style={styles.textArea}
        value={followUpActions}
        onChangeText={setFollowUpActions}
        placeholder="Enter follow-up actions"
        multiline
      />

      <Text style={styles.label}>Results:</Text>
      <TextInput
        style={styles.textArea}
        value={results}
        onChangeText={setResults}
        placeholder="Enter results"
        multiline
      />

      <Text style={styles.label}>Verification Steps:</Text>
      <TextInput
        style={styles.textArea}
        value={verificationSteps}
        onChangeText={setVerificationSteps}
        placeholder="Enter verification steps"
        multiline
      />

      <Text style={styles.label}>Verification Results:</Text>
      <TextInput
        style={styles.textArea}
        value={verificationResults}
        onChangeText={setVerificationResults}
        placeholder="Enter verification results"
        multiline
      />

      <Text style={styles.label}>Linked Evidence:</Text>
      <TextInput
        style={styles.input}
        value={linkedEvidence}
        onChangeText={setLinkedEvidence}
        placeholder="Enter linked evidence"
      />

      <Text style={styles.label}>Evidence Description:</Text>
      <TextInput
        style={styles.textArea}
        value={evidenceDescription}
        onChangeText={setEvidenceDescription}
        placeholder="Enter evidence description"
        multiline
      />

      <Text style={styles.label}>Additional Notes:</Text>
      <TextInput
        style={styles.textArea}
        value={notes}
        onChangeText={setNotes}
        placeholder="Enter additional notes"
        multiline
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveLead}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  picker: {
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddLead;
