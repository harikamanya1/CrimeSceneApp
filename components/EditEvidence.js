import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditEvidence = ({ route, navigation }) => {
  const { evidence } = route.params;
  const [type, setType] = useState(evidence.type);
  const [description, setDescription] = useState(evidence.description);
  const [date, setDate] = useState(new Date(evidence.date));
  const [associatedCase, setAssociatedCase] = useState(evidence.associatedCase);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSaveEvidence = () => {
    if (!type || !description || !date || !associatedCase) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Update the evidence entry in your backend or state
    // For now, we'll just show an alert
    Alert.alert('Success', 'Evidence updated successfully');
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Type:</Text>
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={setType}
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text style={styles.label}>Associated Case:</Text>
      <TextInput
        style={styles.input}
        value={associatedCase}
        onChangeText={setAssociatedCase}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveEvidence}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8DC", // Light yellow background
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: "#000", // Black text
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700", // Gold border
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#FFF", // White background
    borderRadius: 5,
    justifyContent: "center",
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
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#000", // Black text
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditEvidence;
