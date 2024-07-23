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
import { Picker } from "@react-native-picker/picker";

const RecordInterview = ({ navigation }) => {
  const [uniqueId, setUniqueId] = useState("");
  const [fullName, setFullName] = useState("");
  const [aliases, setAliases] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState("Male");
  const [contactInfo, setContactInfo] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [interviewerInfo, setInterviewerInfo] = useState("");
  const [interviewMethod, setInterviewMethod] = useState("In-Person");
  const [purpose, setPurpose] = useState("");
  const [context, setContext] = useState("");
  const [questionsAnswers, setQuestionsAnswers] = useState("");
  const [statements, setStatements] = useState("");
  const [observations, setObservations] = useState("");
  const [documents, setDocuments] = useState("");
  const [photosVideos, setPhotosVideos] = useState("");
  const [audioRecordings, setAudioRecordings] = useState("");
  const [summary, setSummary] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [actions, setActions] = useState("");
  const [assignedPersonnel, setAssignedPersonnel] = useState("");
  const [verification, setVerification] = useState("");
  const [verificationResults, setVerificationResults] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [recordedDate, setRecordedDate] = useState(new Date());
  const [duration, setDuration] = useState(null);
  const [filePath, setFilePath] = useState("");
  const [recording, setRecording] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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
    if (
      !uniqueId ||
      !fullName ||
      !dateOfBirth ||
      !gender ||
      !contactInfo ||
      !role ||
      !date ||
      !time ||
      !location ||
      !interviewerInfo ||
      !interviewMethod ||
      !purpose ||
      !context ||
      !questionsAnswers ||
      !statements ||
      !observations ||
      !documents ||
      !photosVideos ||
      !audioRecordings ||
      !summary ||
      !analysis ||
      !actions ||
      !assignedPersonnel ||
      !verification ||
      !verificationResults ||
      !additionalNotes ||
      !recordedDate ||
      !duration ||
      !filePath
    ) {
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

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Unique ID</Text>
        <TextInput
          style={styles.input}
          value={uniqueId}
          onChangeText={setUniqueId}
          placeholder="Enter unique ID"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter full name"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Aliases</Text>
        <TextInput
          style={styles.input}
          value={aliases}
          onChangeText={setAliases}
          placeholder="Enter aliases"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.input}
        >
          <Text style={styles.dateText}>
            {dateOfBirth.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <Text style={styles.label}>Contact Information</Text>
        <TextInput
          style={styles.input}
          value={contactInfo}
          onChangeText={setContactInfo}
          placeholder="Enter contact information"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Role</Text>
        <TextInput
          style={styles.input}
          value={role}
          onChangeText={setRole}
          placeholder="Enter role"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.input}
        >
          <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Time</Text>
        <TouchableOpacity
          onPress={() => setShowTimePicker(true)}
          style={styles.input}
        >
          <Text style={styles.dateText}>{time.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter location"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Interviewer Information</Text>
        <TextInput
          style={styles.input}
          value={interviewerInfo}
          onChangeText={setInterviewerInfo}
          placeholder="Enter interviewer information"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Interview Method</Text>
        <Picker
          selectedValue={interviewMethod}
          onValueChange={(itemValue) => setInterviewMethod(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="In-Person" value="In-Person" />
          <Picker.Item label="Phone" value="Phone" />
          <Picker.Item label="Video Call" value="Video Call" />
        </Picker>

        <Text style={styles.label}>Purpose</Text>
        <TextInput
          style={styles.input}
          value={purpose}
          onChangeText={setPurpose}
          placeholder="Enter purpose"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Context</Text>
        <TextInput
          style={styles.input}
          value={context}
          onChangeText={setContext}
          placeholder="Enter context"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Questions and Answers</Text>
        <TextInput
          style={styles.textArea}
          value={questionsAnswers}
          onChangeText={setQuestionsAnswers}
          placeholder="Enter questions and answers"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Interviewee Statements</Text>
        <TextInput
          style={styles.textArea}
          value={statements}
          onChangeText={setStatements}
          placeholder="Enter interviewee statements"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Observations</Text>
        <TextInput
          style={styles.textArea}
          value={observations}
          onChangeText={setObservations}
          placeholder="Enter observations"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Documents</Text>
        <TextInput
          style={styles.textArea}
          value={documents}
          onChangeText={setDocuments}
          placeholder="Enter documents"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Photos/Videos</Text>
        <TextInput
          style={styles.textArea}
          value={photosVideos}
          onChangeText={setPhotosVideos}
          placeholder="Enter photos/videos"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Audio Recordings</Text>
        <TextInput
          style={styles.textArea}
          value={audioRecordings}
          onChangeText={setAudioRecordings}
          placeholder="Enter audio recordings"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Summary</Text>
        <TextInput
          style={styles.textArea}
          value={summary}
          onChangeText={setSummary}
          placeholder="Enter summary"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Analysis</Text>
        <TextInput
          style={styles.textArea}
          value={analysis}
          onChangeText={setAnalysis}
          placeholder="Enter analysis"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Follow-Up Actions</Text>
        <TextInput
          style={styles.textArea}
          value={actions}
          onChangeText={setActions}
          placeholder="Enter follow-up actions"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Assigned Personnel</Text>
        <TextInput
          style={styles.input}
          value={assignedPersonnel}
          onChangeText={setAssignedPersonnel}
          placeholder="Enter assigned personnel"
          placeholderTextColor="#000"
        />

        <Text style={styles.label}>Verification</Text>
        <TextInput
          style={styles.textArea}
          value={verification}
          onChangeText={setVerification}
          placeholder="Enter verification"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Verification Results</Text>
        <TextInput
          style={styles.textArea}
          value={verificationResults}
          onChangeText={setVerificationResults}
          placeholder="Enter verification results"
          placeholderTextColor="#000"
          multiline
        />

        <Text style={styles.label}>Additional Notes</Text>
        <TextInput
          style={styles.textArea}
          value={additionalNotes}
          onChangeText={setAdditionalNotes}
          placeholder="Enter additional notes"
          placeholderTextColor="#000"
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
  picker: {
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 16,
    color: "#000",
  },
});

export default RecordInterview;
