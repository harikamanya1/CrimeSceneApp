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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; // Ensure correct import
import { Picker } from "@react-native-picker/picker";

const AddScene = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [sceneId, setSceneId] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [sceneName, setSceneName] = useState("");
  const [address, setAddress] = useState("");
  const [gpsCoordinates, setGpsCoordinates] = useState("");
  const [environment, setEnvironment] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [incidentDescription, setIncidentDescription] = useState("");
  const [initialObservations, setInitialObservations] = useState("");

  const handleSave = () => {
    if (
      !location ||
      !description ||
      !date ||
      !sceneId ||
      !caseNumber ||
      !sceneName ||
      !address ||
      !gpsCoordinates ||
      !environment ||
      !incidentType ||
      !incidentDescription ||
      !initialObservations
    ) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    // Add validation logic here
    Alert.alert("Success", "Crime scene added successfully.");
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setDate(currentTime);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.label}>Scene Identifier</Text>
        <TextInput
          style={styles.input}
          value={sceneId}
          onChangeText={setSceneId}
          placeholder="Enter scene ID (e.g., S001)"
        />

        <Text style={styles.label}>Case Number</Text>
        <TextInput
          style={styles.input}
          value={caseNumber}
          onChangeText={setCaseNumber}
          placeholder="Enter case number"
        />

        <Text style={styles.label}>Scene Name</Text>
        <TextInput
          style={styles.input}
          value={sceneName}
          onChangeText={setSceneName}
          placeholder="Enter scene name (e.g., Living Room)"
        />

        <Text style={styles.label}>Date and Time</Text>
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

        <TouchableOpacity
          onPress={() => setShowTimePicker(true)}
          style={styles.input}
        >
          <Text>{date.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter address"
        />

        <Text style={styles.label}>GPS Coordinates</Text>
        <TextInput
          style={styles.input}
          value={gpsCoordinates}
          onChangeText={setGpsCoordinates}
          placeholder="Enter GPS coordinates (latitude, longitude)"
        />

        <Text style={styles.label}>Environment</Text>
        <Picker
          selectedValue={environment}
          onValueChange={(itemValue) => setEnvironment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Residential" value="residential" />
          <Picker.Item label="Commercial" value="commercial" />
          <Picker.Item label="Outdoor" value="outdoor" />
        </Picker>

        <Text style={styles.label}>Type of Incident</Text>
        <TextInput
          style={styles.input}
          value={incidentType}
          onChangeText={setIncidentType}
          placeholder="Enter type of incident (e.g., burglary)"
        />

        <Text style={styles.label}>Incident Description</Text>
        <TextInput
          style={styles.input}
          value={incidentDescription}
          onChangeText={setIncidentDescription}
          placeholder="Enter brief incident description"
          multiline
        />

        <Text style={styles.label}>Initial Observations</Text>
        <TextInput
          style={styles.input}
          value={initialObservations}
          onChangeText={setInitialObservations}
          placeholder="Enter initial observations"
          multiline
        />

        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
  },
  scrollViewContent: {
    padding: 20,
    justifyContent: "center",
    flexGrow: 1,
  },
  label: {
    fontSize: 16,
    color: "#FFD700",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  picker: {
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default AddScene;
