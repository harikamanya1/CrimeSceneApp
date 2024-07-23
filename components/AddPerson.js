// AddPerson.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; // Ensure correct import
import { Picker } from "@react-native-picker/picker";

const AddPerson = ({ navigation }) => {
  const [name, setName] = useState("");
  const [aliases, setAliases] = useState("");
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [relationship, setRelationship] = useState("");
  const [idNumbers, setIdNumbers] = useState("");
  const [physicalDescription, setPhysicalDescription] = useState("");
  const [employment, setEmployment] = useState("");
  const [criminalRecord, setCriminalRecord] = useState("");
  const [knownAssociates, setKnownAssociates] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    if (!name || !dob || !gender || !role) {
      Alert.alert("Error", "Please fill all required fields.");
      return;
    }

    // Mock implementation to add person
    Alert.alert("Success", "Person added successfully.");
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios");
    setDob(currentDate);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter full name"
        />

        <Text style={styles.label}>Alias(es)</Text>
        <TextInput
          style={styles.input}
          value={aliases}
          onChangeText={setAliases}
          placeholder="Enter aliases"
        />

        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            style={styles.input}
            value={dob.toLocaleDateString()}
            editable={false}
            placeholder="Select date of birth"
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dob}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        <Text style={styles.label}>Contact Information</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter address"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email address"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Role in the Investigation</Text>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select role" value="" />
          <Picker.Item label="Suspect" value="suspect" />
          <Picker.Item label="Witness" value="witness" />
          <Picker.Item label="Victim" value="victim" />
        </Picker>
        <TextInput
          style={styles.input}
          value={relationship}
          onChangeText={setRelationship}
          placeholder="Enter relationship to the case"
        />

        <Text style={styles.label}>Identifiers</Text>
        <TextInput
          style={styles.input}
          value={idNumbers}
          onChangeText={setIdNumbers}
          placeholder="Enter identification numbers"
        />
        <TextInput
          style={styles.input}
          value={physicalDescription}
          onChangeText={setPhysicalDescription}
          placeholder="Enter physical description"
          multiline
        />

        <Text style={styles.label}>Background Information</Text>
        <TextInput
          style={styles.input}
          value={employment}
          onChangeText={setEmployment}
          placeholder="Enter employment information"
          multiline
        />
        <TextInput
          style={styles.input}
          value={criminalRecord}
          onChangeText={setCriminalRecord}
          placeholder="Enter criminal record"
          multiline
        />
        <TextInput
          style={styles.input}
          value={knownAssociates}
          onChangeText={setKnownAssociates}
          placeholder="Enter known associates"
          multiline
        />

        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.input}
          value={notes}
          onChangeText={setNotes}
          placeholder="Enter additional notes"
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

export default AddPerson;
