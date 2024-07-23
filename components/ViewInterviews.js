import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";

const ViewInterviews = () => {
  const [interviews, setInterviews] = useState([]);
  const [playing, setPlaying] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    // Fetch interview records from backend or use dummy data
    setInterviews([
      {
        InterviewID: "1",
        Title: "Interview with John Doe",
        Description: "Discussed the case details",
        RecordedDate: "2023-01-01",
        Duration: "5 mins",
        FilePath: "path/to/audio/file1.mp3",
      },
      {
        InterviewID: "2",
        Title: "Interview with Jane Smith",
        Description: "Witness statement",
        RecordedDate: "2023-02-01",
        Duration: "3 mins",
        FilePath: "path/to/audio/file2.mp3",
      },
      // Add more dummy entries
    ]);
  }, []);

  const playAudio = async (filePath) => {
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: filePath });
      setSound(sound);
      await sound.playAsync();
      setPlaying(filePath);
    } catch (error) {
      console.error("Error playing audio", error);
    }
  };

  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setSound(null);
      setPlaying(null);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={interviews}
        keyExtractor={(item) => item.InterviewID}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.description}>{item.Description}</Text>
            <Text style={styles.date}>Recorded Date: {item.RecordedDate}</Text>
            <Text style={styles.duration}>Duration: {item.Duration}</Text>
            <TouchableOpacity
              onPress={() =>
                playing === item.FilePath
                  ? stopAudio()
                  : playAudio(item.FilePath)
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                {playing === item.FilePath ? "Stop" : "Play"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8DC",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Black text
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: "#000", // Black text
  },
  date: {
    fontSize: 14,
    marginBottom: 4,
    color: "#000", // Black text
  },
  duration: {
    fontSize: 14,
    marginBottom: 8,
    color: "#000", // Black text
  },
  button: {
    padding: 8,
    backgroundColor: "#FFD700",
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#000", // Black text
    fontSize: 16,
  },
});

export default ViewInterviews;
