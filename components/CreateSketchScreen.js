import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const CreateSketchScreen = ({ navigation }) => {
  const [caseNumber, setCaseNumber] = useState("");
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [role, setRole] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [gps, setGps] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [measurements, setMeasurements] = useState("");
  const [scale, setScale] = useState("");
  const [annotations, setAnnotations] = useState("");
  const [legend, setLegend] = useState("");
  const [evidence, setEvidence] = useState("");
  const [photos, setPhotos] = useState("");
  const [documentation, setDocumentation] = useState("");

  const handleCreateSketch = () => {
    console.log("Sketch Created:", {
      caseNumber,
      title,
      creator,
      role,
      contact,
      location,
      gps,
      type,
      description,
      measurements,
      scale,
      annotations,
      legend,
      evidence,
      photos,
      documentation,
    });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Case Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter case number"
          value={caseNumber}
          onChangeText={setCaseNumber}
        />

        <Text style={styles.label}>Sketch Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter sketch title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Creator</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter creator's name"
          value={creator}
          onChangeText={setCreator}
        />

        <Text style={styles.label}>Role/Position</Text>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="Select role" value="" />
          <Picker.Item label="Forensic Artist" value="Forensic Artist" />
          <Picker.Item label="Detective" value="Detective" />
          <Picker.Item label="Officer" value="Officer" />
          {/* Add more roles as needed */}
        </Picker>

        <Text style={styles.label}>Contact Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter contact information"
          value={contact}
          onChangeText={setContact}
        />

        <Text style={styles.label}>Scene Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter scene location"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>GPS Coordinates</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter GPS coordinates"
          value={gps}
          onChangeText={setGps}
        />

        <Text style={styles.label}>Type of Sketch</Text>
        <Picker
          selectedValue={type}
          style={styles.picker}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label="Select type" value="" />
          <Picker.Item label="Hand-drawn" value="Hand-drawn" />
          <Picker.Item label="Digital" value="Digital" />
          {/* Add more types as needed */}
        </Picker>

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Measurements</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter measurements"
          value={measurements}
          onChangeText={setMeasurements}
        />

        <Text style={styles.label}>Scale</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter scale"
          value={scale}
          onChangeText={setScale}
        />

        <Text style={styles.label}>Annotations</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter annotations"
          value={annotations}
          onChangeText={setAnnotations}
        />

        <Text style={styles.label}>Legend</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter legend"
          value={legend}
          onChangeText={setLegend}
        />

        <Text style={styles.label}>Linked Evidence</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter linked evidence"
          value={evidence}
          onChangeText={setEvidence}
        />

        <Text style={styles.label}>Photos</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter photo information"
          value={photos}
          onChangeText={setPhotos}
        />

        <Text style={styles.label}>Documentation</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter documentation"
          value={documentation}
          onChangeText={setDocumentation}
        />

        <TouchableOpacity style={styles.button} onPress={handleCreateSketch}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF8DC",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  input: {
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    marginBottom: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 16,
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateSketchScreen;
