import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function EvidenceScreen() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [evidenceNumber, setEvidenceNumber] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [collector, setCollector] = useState('');
  const [custody, setCustody] = useState('');
  const [packaging, setPackaging] = useState('');
  const [analysis, setAnalysis] = useState(['']);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const addAnalysis = () => {
    setAnalysis([...analysis, '']);
  };

  const removeAnalysis = (index) => {
    setAnalysis(analysis.filter((_, i) => i !== index));
  };

  const updateAnalysis = (index, value) => {
    const updatedAnalysis = analysis.map((item, i) => (i === index ? value : item));
    setAnalysis(updatedAnalysis);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Evidence</Text>
      <View style={styles.section}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.imageButtons}>
          <Button title="Camera" onPress={() => {}} color="#FFD700" />
          <Button title="Library" onPress={() => {}} color="#FFD700" />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Evidence number</Text>
        <TextInput
          style={styles.input}
          value={evidenceNumber}
          onChangeText={(text) => setEvidenceNumber(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Evidence description</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline={true}
        />
        <Button title="Edit" onPress={() => {}} color="#FFD700" />
      </View>
      <Text style={styles.heading}>Collection</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Date and time of collection</Text>
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
        <Text style={styles.label}>Location of evidence</Text>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Location" value="" />
          <Picker.Item label="Front door of residence" value="Front door of residence" />
          <Picker.Item label="Back door of residence" value="Back door of residence" />
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Collector</Text>
        <TextInput
          style={styles.input}
          value={collector}
          onChangeText={(text) => setCollector(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Chain of custody (turned over to)</Text>
        <TextInput
          style={styles.input}
          value={custody}
          onChangeText={(text) => setCustody(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Packaged in</Text>
        <TextInput
          style={styles.input}
          value={packaging}
          onChangeText={(text) => setPackaging(text)}
        />
      </View>
      <Text style={styles.heading}>Analysis</Text>
      {analysis.map((item, index) => (
        <View key={index} style={styles.section}>
          <TextInput
            style={styles.input}
            value={item}
            onChangeText={(text) => updateAnalysis(index, text)}
          />
          <TouchableOpacity onPress={() => removeAnalysis(index)}>
            <Text style={styles.removeButton}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Button title="+ Analysis" onPress={addAnalysis} color="#FFD700" />
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
    flex: 1,
  },
  textArea: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  imageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    height: 50,
    backgroundColor: 'white',
    color: 'black',
  },
  removeButton: {
    color: '#FFD700',
    marginLeft: 10,
    fontSize: 18,
  },
});
