import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as DocumentPicker from "expo-document-picker";

const AddEvidence = ({ navigation }) => {
  const [uniqueId, setUniqueId] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [collectorName, setCollectorName] = useState("");
  const [role, setRole] = useState("");
  const [badgeNumber, setBadgeNumber] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [photos, setPhotos] = useState([]);
  const [chainOfCustody, setChainOfCustody] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [labName, setLabName] = useState("");
  const [results, setResults] = useState("");
  const [storageLocation, setStorageLocation] = useState("");
  const [storageConditions, setStorageConditions] = useState("");
  const [notes, setNotes] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleSaveEvidence = () => {
    if (
      !uniqueId ||
      !collectorName ||
      !role ||
      !badgeNumber ||
      !location ||
      !description ||
      !condition
    ) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    // Save the evidence to your backend or state
    Alert.alert("Success", "Evidence added successfully");
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleFileUpload = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["image/*"],
      copyToCacheDirectory: true,
    });
    if (result.type === "success") {
      setPhotos([...photos, result]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.label}>Evidence Identifier:</Text>
        <TextInput
          style={styles.input}
          value={uniqueId}
          onChangeText={setUniqueId}
        />

        <Text style={styles.label}>Collection Date:</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.input}
        >
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Collection Time:</Text>
        <TouchableOpacity
          onPress={() => setShowTimePicker(true)}
          style={styles.input}
        >
          <Text>{time.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}

        <Text style={styles.label}>Collector Name:</Text>
        <TextInput
          style={styles.input}
          value={collectorName}
          onChangeText={setCollectorName}
        />

        <Text style={styles.label}>Role/Position:</Text>
        <TextInput style={styles.input} value={role} onChangeText={setRole} />

        <Text style={styles.label}>Badge Number/ID:</Text>
        <TextInput
          style={styles.input}
          value={badgeNumber}
          onChangeText={setBadgeNumber}
        />

        <Text style={styles.label}>Location of Collection:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Description of Evidence:</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Text style={styles.label}>Condition:</Text>
        <TextInput
          style={styles.input}
          value={condition}
          onChangeText={setCondition}
        />

        <Text style={styles.label}>Photographic Documentation:</Text>
        <TouchableOpacity onPress={handleFileUpload} style={styles.button}>
          <Text style={styles.buttonText}>Upload Photos</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Chain of Custody:</Text>
        <TextInput
          style={styles.input}
          value={chainOfCustody}
          onChangeText={setChainOfCustody}
        />

        <Text style={styles.label}>Analysis and Testing:</Text>
        <TextInput
          style={styles.input}
          value={analysis}
          onChangeText={setAnalysis}
        />

        <Text style={styles.label}>Lab Name:</Text>
        <TextInput
          style={styles.input}
          value={labName}
          onChangeText={setLabName}
        />

        <Text style={styles.label}>Results:</Text>
        <TextInput
          style={styles.input}
          value={results}
          onChangeText={setResults}
        />

        <Text style={styles.label}>Storage Location:</Text>
        <TextInput
          style={styles.input}
          value={storageLocation}
          onChangeText={setStorageLocation}
        />

        <Text style={styles.label}>Storage Conditions:</Text>
        <TextInput
          style={styles.input}
          value={storageConditions}
          onChangeText={setStorageConditions}
        />

        <Text style={styles.label}>Additional Notes:</Text>
        <TextInput
          style={styles.textArea}
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveEvidence}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC", // Light yellow background
  },
  scrollViewContent: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: "#000", // Black text
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700", // Gold border
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#FFF", // White background
    borderRadius: 5,
    height: 40,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#FFD700", // Gold border
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#FFF", // White background
    borderRadius: 5,
    height: 100,
  },
  button: {
    backgroundColor: "#FFD700", // Gold button background
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#000", // Black text
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#FFD700", // Gold button background
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#000", // Black text
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddEvidence;
