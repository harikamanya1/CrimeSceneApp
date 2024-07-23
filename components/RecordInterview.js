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
} from "react-native";
import { Audio } from "expo-av";
import DateTimePicker from "@react-native-community/datetimepicker";

const RecordInterview = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recordedDate, setRecordedDate] = useState(new Date());
  const [duration, setDuration] = useState(null);
  const [filePath, setFilePath] = useState("");
  const [recording, setRecording] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "You need to grant audio recording permissions."
        );
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();

      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setFilePath(uri);
      const { sound, status } = await recording.createNewLoadedSoundAsync();
      setDuration(status.durationMillis);
      setRecording(null);
    } catch (err) {
      console.error("Failed to stop recording", err);
    }
  };

  const handleSave = () => {
    if (!title || !description || !recordedDate || !duration || !filePath) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    // Save the interview record (this is where you'd add your database save logic)
    Alert.alert("Success", "Interview recorded successfully.");
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || recordedDate;
    setShowDatePicker(false);
    setRecordedDate(currentDate);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter interview title"
          placeholderTextColor="#000" // Placeholder text color
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter interview description"
          placeholderTextColor="#000" // Placeholder text color
          multiline
        />

        <Text style={styles.label}>Recorded Date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.input}
        >
          <Text style={styles.dateText}>
            {recordedDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={recordedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <View style={styles.buttonContainer}>
          <Button
            color="#FFD700"
            title={recording ? "Stop Recording" : "Start Recording"}
            onPress={recording ? stopRecording : startRecording}
          />
        </View>

        {filePath ? (
          <View style={styles.fileInfo}>
            <Text style={styles.filePath}>File Path: {filePath}</Text>
            <Text style={styles.filePath}>
              Duration: {Math.floor(duration / 1000)} seconds
            </Text>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <Button color="#FFD700" title="Save" onPress={handleSave} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#FFF8DC", // Set background color for the whole page
  },
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: "#FFD700",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "#000", // Text color
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    height: 100,
    color: "#000", // Text color
  },
  dateText: {
    color: "#000", // Text color
  },
  fileInfo: {
    marginVertical: 16,
  },
  filePath: {
    fontSize: 14,
    marginVertical: 4,
    color: "#000", // Text color
  },
  buttonContainer: {
    marginVertical: 10, // Add vertical margin for spacing
  },
});

export default RecordInterview;
