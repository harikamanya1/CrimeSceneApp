import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

const AttachAudio = ({ navigation }) => {
  const [interviewId, setInterviewId] = useState("");
  const [filePath, setFilePath] = useState("");
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    // Fetch interview records from backend or use dummy data
    setInterviews([
      { InterviewID: "1", Title: "Interview with John Doe" },
      { InterviewID: "2", Title: "Interview with Jane Smith" },
      // Add more dummy entries
    ]);
  }, []);

  const handleFileUpload = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "audio/*",
      });
      if (result.type === "success") {
        setFilePath(result.uri);
      }
    } catch (error) {
      console.error("Error picking document", error);
    }
  };

  const handleAttach = () => {
    if (!interviewId || !filePath) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    // Attach the audio file to the interview record (this is where you'd add your database update logic)
    Alert.alert("Success", "Audio file attached successfully.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Interview</Text>
      <FlatList
        data={interviews}
        keyExtractor={(item) => item.InterviewID}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => setInterviewId(item.InterviewID)}
          >
            <Text style={styles.itemText}>ID: {item.InterviewID}</Text>
            <Text style={styles.itemText}>Title: {item.Title}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button
          color="#FFD700"
          title="Upload Audio"
          onPress={handleFileUpload}
        />
      </View>

      {filePath ? (
        <Text style={styles.filePath}>File Path: {filePath}</Text>
      ) : null}

      <View style={styles.buttonContainer}>
        <Button color="#FFD700" title="Attach" onPress={handleAttach} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8DC",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#000",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  itemText: {
    fontSize: 16,
    color: "#000",
  },
  filePath: {
    fontSize: 14,
    marginVertical: 16,
    color: "#FFD700",
  },
  buttonContainer: {
    marginVertical: 10, // Add vertical margin for spacing
  },
});

export default AttachAudio;
