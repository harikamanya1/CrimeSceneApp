import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function AccessPage() {
  const [type, setType] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [person, setPerson] = useState('');
  const [location, setLocation] = useState('');
  const [purpose, setPurpose] = useState('');
  const [description, setDescription] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Access</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Type</Text>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Type" value="" />
          <Picker.Item label="Entry" value="Entry" />
          <Picker.Item label="Exit" value="Exit" />
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Date & time of access</Text>
        <Button onPress={() => setShowDatePicker(true)} title={date.toLocaleString()} color="#FFD700" />
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Person who accessed the scene</Text>
        <TextInput
          style={styles.input}
          value={person}
          onChangeText={(text) => setPerson(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Access location</Text>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Location" value="" />
          <Picker.Item label="Front Porch" value="Front Porch" />
          <Picker.Item label="Back Door" value="Back Door" />
        </Picker>
      </View>
      <Text style={styles.heading}>Purpose</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Purpose of access</Text>
        <Picker
          selectedValue={purpose}
          onValueChange={(itemValue) => setPurpose(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Purpose" value="" />
          <Picker.Item label="Medical walkthrough" value="Medical walkthrough" />
          <Picker.Item label="Inspection" value="Inspection" />
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Additional access description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
    </View>
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
    borderColor: '#FFD700',
    borderWidth: 1,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    backgroundColor: 'white',
    color: '#000',
  },
});
