import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddEntry = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [badgeNumber, setBadgeNumber] = useState('');
  const [reason, setReason] = useState('');
  const [authorizingPerson, setAuthorizingPerson] = useState('');
  const [authorizationDetails, setAuthorizationDetails] = useState('');
  const [areaAccessed, setAreaAccessed] = useState('');
  const [gpsCoordinates, setGpsCoordinates] = useState('');
  const [activities, setActivities] = useState('');
  const [duration, setDuration] = useState('');
  const [witnesses, setWitnesses] = useState('');
  const [logEntryMethod, setLogEntryMethod] = useState('');
  const [signature, setSignature] = useState('');
  const [ppeUsed, setPpeUsed] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleAddEntry = () => {
    if (!name || !role || !badgeNumber || !reason || !authorizingPerson || !areaAccessed || !activities || !logEntryMethod || !signature || !ppeUsed) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    // Save the entry to your backend or state
    // For now, we'll just show an alert
    Alert.alert('Success', 'Entry added successfully');
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Timestamp:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text>{date ? date.toLocaleDateString() : 'Select Date'}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onChangeDate}
          onClose={() => setShowDatePicker(false)}
        />
      )}

      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.input}>
        <Text>{time ? time.toLocaleTimeString() : 'Select Time'}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time || new Date()}
          mode="time"
          display="default"
          onChange={onChangeTime}
          onClose={() => setShowTimePicker(false)}
        />
      )}

      <Text style={styles.label}>Personnel Identification</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <TextInput
        style={styles.input}
        placeholder="Badge Number/ID"
        value={badgeNumber}
        onChangeText={setBadgeNumber}
      />

      <Text style={styles.label}>Purpose of Access</Text>
      <TextInput
        style={styles.input}
        placeholder="Reason for Entry/Exit"
        value={reason}
        onChangeText={setReason}
      />

      <Text style={styles.label}>Authorization</Text>
      <TextInput
        style={styles.input}
        placeholder="Authorizing Person"
        value={authorizingPerson}
        onChangeText={setAuthorizingPerson}
      />
      <TextInput
        style={styles.input}
        placeholder="Authorization Details"
        value={authorizationDetails}
        onChangeText={setAuthorizationDetails}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Specific Area Accessed"
        value={areaAccessed}
        onChangeText={setAreaAccessed}
      />
      <TextInput
        style={styles.input}
        placeholder="GPS Coordinates (optional)"
        value={gpsCoordinates}
        onChangeText={setGpsCoordinates}
      />

      <Text style={styles.label}>Actions Performed</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Activities"
        value={activities}
        onChangeText={setActivities}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Duration"
        value={duration}
        onChangeText={setDuration}
      />

      <Text style={styles.label}>Witnesses</Text>
      <TextInput
        style={styles.input}
        placeholder="Witnesses Present"
        value={witnesses}
        onChangeText={setWitnesses}
      />

      <Text style={styles.label}>Documentation</Text>
      <TextInput
        style={styles.input}
        placeholder="Log Entry Method"
        value={logEntryMethod}
        onChangeText={setLogEntryMethod}
      />
      <TextInput
        style={styles.input}
        placeholder="Signature/Verification"
        value={signature}
        onChangeText={setSignature}
      />

      <Text style={styles.label}>Protective Measures</Text>
      <TextInput
        style={styles.input}
        placeholder="PPE Used"
        value={ppeUsed}
        onChangeText={setPpeUsed}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddEntry}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF8DC', // Light yellow background
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: '#000', 
    marginTop:30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFD700', // Gold border
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#FFF', // White background
    borderRadius: 5,
    justifyContent: 'center',
    height: 40,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#FFD700', // Gold border
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#FFF', // White background
    borderRadius: 5,
    height: 100,
  },
  button: {
    backgroundColor: '#FFD700', // Gold button background
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000', // Black text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddEntry;
