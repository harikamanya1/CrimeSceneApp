import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateForensicAnalysis = ({ navigation }) => {
  const [analysisId, setAnalysisId] = useState("");
  const [evidenceId, setEvidenceId] = useState("");
  const [requestedBy, setRequestedBy] = useState("");
  const [requestDate, setRequestDate] = useState(new Date());
  const [purpose, setPurpose] = useState("");
  const [labName, setLabName] = useState("");
  const [labAddress, setLabAddress] = useState("");
  const [labContact, setLabContact] = useState("");
  const [analystName, setAnalystName] = useState("");
  const [analystRole, setAnalystRole] = useState("");
  const [analystContact, setAnalystContact] = useState("");
  const [analysisType, setAnalysisType] = useState("");
  const [methodsUsed, setMethodsUsed] = useState("");
  const [equipmentUsed, setEquipmentUsed] = useState("");
  const [findings, setFindings] = useState("");
  const [interpretation, setInterpretation] = useState("");
  const [comparisonResults, setComparisonResults] = useState("");
  const [report, setReport] = useState("");
  const [photos, setPhotos] = useState("");
  const [notes, setNotes] = useState("");
  const [custodyDetails, setCustodyDetails] = useState("");
  const [transferDetails, setTransferDetails] = useState("");
  const [signatures, setSignatures] = useState("");
  const [storageLocation, setStorageLocation] = useState("");
  const [storageConditions, setStorageConditions] = useState("");
  const [disposalDetails, setDisposalDetails] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    if (
      !analysisId ||
      !evidenceId ||
      !requestedBy ||
      !requestDate ||
      !purpose ||
      !labName ||
      !labAddress ||
      !labContact ||
      !analystName ||
      !analystRole ||
      !analystContact ||
      !analysisType ||
      !methodsUsed ||
      !equipmentUsed ||
      !findings ||
      !interpretation ||
      !comparisonResults ||
      !report ||
      !photos ||
      !notes ||
      !custodyDetails ||
      !transferDetails ||
      !signatures ||
      !storageLocation ||
      !storageConditions ||
      !disposalDetails
    ) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    // Save the forensic analysis result
    Alert.alert("Success", "Forensic analysis result added successfully.");
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || requestDate;
    setShowDatePicker(false);
    setRequestDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Analysis Identifier</Text>
      <TextInput
        style={styles.input}
        value={analysisId}
        onChangeText={setAnalysisId}
        placeholder="Enter analysis ID (e.g., A001)"
      />

      <Text style={styles.label}>Evidence Identifier</Text>
      <TextInput
        style={styles.input}
        value={evidenceId}
        onChangeText={setEvidenceId}
        placeholder="Enter evidence ID (e.g., E001)"
      />

      <Text style={styles.label}>Requested By</Text>
      <TextInput
        style={styles.input}
        value={requestedBy}
        onChangeText={setRequestedBy}
        placeholder="Enter requester name and role"
      />

      <Text style={styles.label}>Date of Request</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.input}
      >
        <Text>{requestDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={requestDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>Purpose</Text>
      <TextInput
        style={styles.input}
        value={purpose}
        onChangeText={setPurpose}
        placeholder="Enter purpose of the analysis"
      />

      <Text style={styles.label}>Lab Name</Text>
      <TextInput
        style={styles.input}
        value={labName}
        onChangeText={setLabName}
        placeholder="Enter lab name"
      />

      <Text style={styles.label}>Lab Address</Text>
      <TextInput
        style={styles.input}
        value={labAddress}
        onChangeText={setLabAddress}
        placeholder="Enter lab address"
      />

      <Text style={styles.label}>Lab Contact</Text>
      <TextInput
        style={styles.input}
        value={labContact}
        onChangeText={setLabContact}
        placeholder="Enter lab contact info"
      />

      <Text style={styles.label}>Analyst Name</Text>
      <TextInput
        style={styles.input}
        value={analystName}
        onChangeText={setAnalystName}
        placeholder="Enter analyst name"
      />

      <Text style={styles.label}>Analyst Role/Position</Text>
      <TextInput
        style={styles.input}
        value={analystRole}
        onChangeText={setAnalystRole}
        placeholder="Enter analyst role"
      />

      <Text style={styles.label}>Analyst Contact</Text>
      <TextInput
        style={styles.input}
        value={analystContact}
        onChangeText={setAnalystContact}
        placeholder="Enter analyst contact info"
      />

      <Text style={styles.label}>Type of Analysis</Text>
      <TextInput
        style={styles.input}
        value={analysisType}
        onChangeText={setAnalysisType}
        placeholder="Enter type of analysis"
      />

      <Text style={styles.label}>Methods Used</Text>
      <TextInput
        style={styles.textArea}
        value={methodsUsed}
        onChangeText={setMethodsUsed}
        placeholder="Enter methods used"
        multiline
      />

      <Text style={styles.label}>Equipment Used</Text>
      <TextInput
        style={styles.input}
        value={equipmentUsed}
        onChangeText={setEquipmentUsed}
        placeholder="Enter equipment used"
      />

      <Text style={styles.label}>Analysis Findings</Text>
      <TextInput
        style={styles.textArea}
        value={findings}
        onChangeText={setFindings}
        placeholder="Enter findings"
        multiline
      />

      <Text style={styles.label}>Interpretation</Text>
      <TextInput
        style={styles.textArea}
        value={interpretation}
        onChangeText={setInterpretation}
        placeholder="Enter interpretation of results"
        multiline
      />

      <Text style={styles.label}>Comparison Results</Text>
      <TextInput
        style={styles.textArea}
        value={comparisonResults}
        onChangeText={setComparisonResults}
        placeholder="Enter comparison results"
        multiline
      />

      <Text style={styles.label}>Analysis Report</Text>
      <TextInput
        style={styles.textArea}
        value={report}
        onChangeText={setReport}
        placeholder="Enter analysis report"
        multiline
      />

      <Text style={styles.label}>Photos/Images</Text>
      <TextInput
        style={styles.textArea}
        value={photos}
        onChangeText={setPhotos}
        placeholder="Enter photo/image links"
        multiline
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.textArea}
        value={notes}
        onChangeText={setNotes}
        placeholder="Enter notes"
        multiline
      />

      <Text style={styles.label}>Chain of Custody</Text>
      <TextInput
        style={styles.textArea}
        value={custodyDetails}
        onChangeText={setCustodyDetails}
        placeholder="Enter custody details"
        multiline
      />

      <Text style={styles.label}>Transfer Details</Text>
      <TextInput
        style={styles.textArea}
        value={transferDetails}
        onChangeText={setTransferDetails}
        placeholder="Enter transfer details"
        multiline
      />

      <Text style={styles.label}>Signatures</Text>
      <TextInput
        style={styles.textArea}
        value={signatures}
        onChangeText={setSignatures}
        placeholder="Enter signatures"
        multiline
      />

      <Text style={styles.label}>Storage Location</Text>
      <TextInput
        style={styles.input}
        value={storageLocation}
        onChangeText={setStorageLocation}
        placeholder="Enter storage location"
      />

      <Text style={styles.label}>Storage Conditions</Text>
      <TextInput
        style={styles.input}
        value={storageConditions}
        onChangeText={setStorageConditions}
        placeholder="Enter storage conditions"
      />

      <Text style={styles.label}>Disposal Details</Text>
      <TextInput
        style={styles.input}
        value={disposalDetails}
        onChangeText={setDisposalDetails}
        placeholder="Enter disposal details"
      />

      <Button title="Save" onPress={handleSave} color="#FFD700" />
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

export default CreateForensicAnalysis;