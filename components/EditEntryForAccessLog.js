import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditEntry = ({ route, navigation }) => {
  const { log } = route.params;
  const [date, setDate] = useState(new Date(log.date));
  const [time, setTime] = useState(new Date(log.time));
  const [description, setDescription] = useState(log.description);
  const [userId, setUserId] = useState(log.userId);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleSaveEntry = () => {
    if (!description || !userId || !date || !time) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Update the log entry in your backend or state
    // For now, we'll just show an alert
    Alert.alert('Success', 'Entry updated successfully');
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
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

      <Text style={styles.label}>Time:</Text>
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
        <Text>{time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.textArea}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>User ID:</Text>
      <TextInput
        style={styles.input}
        value={userId}
        onChangeText={setUserId}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveEntry}>
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
    color: "#000",
    marginTop: 30, // Black text
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

export default EditEntry;
