import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function ForensicAnalysisScreen() {
  const [analysisId, setAnalysisId] = useState('');
  const [evidenceId, setEvidenceId] = useState('');
  const [requestedBy, setRequestedBy] = useState('');
  const [dateOfRequest, setDateOfRequest] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [purpose, setPurpose] = useState('');
  const [labName, setLabName] = useState('');
  const [labAddress, setLabAddress] = useState('');
  const [labContact, setLabContact] = useState('');
  const [analystName, setAnalystName] = useState('');
  const [analystRole, setAnalystRole] = useState('');
  const [analystContact, setAnalystContact] = useState('');
  const [typeOfAnalysis, setTypeOfAnalysis] = useState('');
  const [methodsUsed, setMethodsUsed] = useState('');
  const [equipmentUsed, setEquipmentUsed] = useState('');
  const [analysisFindings, setAnalysisFindings] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [comparisonResults, setComparisonResults] = useState('');
  const [analysisReport, setAnalysisReport] = useState('');
  const [photosImages, setPhotosImages] = useState('');
  const [notes, setNotes] = useState('');
  const [custodyDetails, setCustodyDetails] = useState('');
  const [transferDetails, setTransferDetails] = useState('');
  const [signatures, setSignatures] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [storageConditions, setStorageConditions] = useState('');
  const [disposalDetails, setDisposalDetails] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfRequest;
    setShowDatePicker(false);
    setDateOfRequest(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Forensic Analysis</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Analysis Identifier</Text>
        <TextInput
          style={styles.input}
          value={analysisId}
          onChangeText={(text) => setAnalysisId(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Evidence Identifier</Text>
        <TextInput
          style={styles.input}
          value={evidenceId}
          onChangeText={(text) => setEvidenceId(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Requested By</Text>
        <TextInput
          style={styles.input}
          value={requestedBy}
          onChangeText={(text) => setRequestedBy(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Date of Request</Text>
        <Button onPress={() => setShowDatePicker(true)} title={dateOfRequest.toLocaleDateString()} color="#FFD700" />
        {showDatePicker && (
          <DateTimePicker
            value={dateOfRequest}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Purpose</Text>
        <TextInput
          style={styles.input}
          value={purpose}
          onChangeText={(text) => setPurpose(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Lab Name</Text>
        <TextInput
          style={styles.input}
          value={labName}
          onChangeText={(text) => setLabName(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Lab Address</Text>
        <TextInput
          style={styles.input}
          value={labAddress}
          onChangeText={(text) => setLabAddress(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Lab Contact</Text>
        <TextInput
          style={styles.input}
          value={labContact}
          onChangeText={(text) => setLabContact(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Analyst Name</Text>
        <TextInput
          style={styles.input}
          value={analystName}
          onChangeText={(text) => setAnalystName(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Analyst Role/Position</Text>
        <TextInput
          style={styles.input}
          value={analystRole}
          onChangeText={(text) => setAnalystRole(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Analyst Contact</Text>
        <TextInput
          style={styles.input}
          value={analystContact}
          onChangeText={(text) => setAnalystContact(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Type of Analysis</Text>
        <TextInput
          style={styles.input}
          value={typeOfAnalysis}
          onChangeText={(text) => setTypeOfAnalysis(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Methods Used</Text>
        <TextInput
          style={styles.input}
          value={methodsUsed}
          onChangeText={(text) => setMethodsUsed(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Equipment Used</Text>
        <TextInput
          style={styles.input}
          value={equipmentUsed}
          onChangeText={(text) => setEquipmentUsed(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Analysis Findings</Text>
        <TextInput
          style={styles.textArea}
          value={analysisFindings}
          onChangeText={(text) => setAnalysisFindings(text)}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Interpretation</Text>
        <TextInput
          style={styles.textArea}
          value={interpretation}
          onChangeText={(text) => setInterpretation(text)}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Comparison Results</Text>
        <TextInput
          style={styles.textArea}
          value={comparisonResults}
          onChangeText={(text) => setComparisonResults(text)}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Analysis Report</Text>
        <TextInput
          style={styles.input}
          value={analysisReport}
          onChangeText={(text) => setAnalysisReport(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Photos/Images</Text>
        <TextInput
          style={styles.input}
          value={photosImages}
          onChangeText={(text) => setPhotosImages(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.textArea}
          value={notes}
          onChangeText={(text) => setNotes(text)}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Custody Details</Text>
        <TextInput
          style={styles.textArea}
          value={custodyDetails}
          onChangeText={(text) => setCustodyDetails(text)}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Transfer Details</Text>
        <TextInput
          style={styles.textArea}
          value={transferDetails}
          onChangeText={(text) => setTransferDetails(text)}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Signatures</Text>
        <TextInput
          style={styles.input}
          value={signatures}
          onChangeText={(text) => setSignatures(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Storage Location</Text>
        <TextInput
          style={styles.input}
          value={storageLocation}
          onChangeText={(text) => setStorageLocation(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Storage Conditions</Text>
        <TextInput
          style={styles.input}
          value={storageConditions}
          onChangeText={(text) => setStorageConditions(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Disposal Details</Text>
        <TextInput
          style={styles.textArea}
          value={disposalDetails}
          onChangeText={(text) => setDisposalDetails(text)}
          multiline={true}
        />
      </View>
      <Button title="Download Report" onPress={() => {}} color="#FFD700" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF8DC',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginVertical: 10,
  },
  section: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  textArea: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
});
