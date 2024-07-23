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
        UniqueID: "I001",
        FullName: "John Doe",
        Aliases: "JD",
        DateOfBirth: "1990-01-01",
        Gender: "Male",
        ContactInfo: "123 Main St, 555-555-5555, john@example.com",
        Role: "Witness",
        Date: "2023-01-01",
        Time: "12:00 PM",
        Location: "Police Station",
        InterviewerInfo: "Detective Smith",
        InterviewMethod: "In-Person",
        Purpose: "Gathering witness statement",
        Context: "At the police station",
        QuestionsAnswers: "Q: What did you see? A: I saw...",
        Statements: "I saw a person...",
        Observations: "Calm and cooperative",
        Documents: "Document 1",
        PhotosVideos: "Photo 1",
        AudioRecordings: "Audio 1",
        Summary: "Witness saw a person...",
        Analysis: "The statement is consistent...",
        Actions: "Verify alibi",
        AssignedPersonnel: "Detective Smith",
        Verification: "Contacted alibi",
        VerificationResults: "Alibi confirmed",
        AdditionalNotes: "No additional notes",
        RecordedDate: "2023-01-01",
        Duration: "5 mins",
        FilePath: "path/to/audio/file1.mp3",
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
            <Text style={styles.title}>Unique ID: {item.UniqueID}</Text>
            <Text style={styles.description}>Full Name: {item.FullName}</Text>
            <Text style={styles.description}>Aliases: {item.Aliases}</Text>
            <Text style={styles.description}>
              Date of Birth: {item.DateOfBirth}
            </Text>
            <Text style={styles.description}>Gender: {item.Gender}</Text>
            <Text style={styles.description}>
              Contact Info: {item.ContactInfo}
            </Text>
            <Text style={styles.description}>Role: {item.Role}</Text>
            <Text style={styles.description}>Date: {item.Date}</Text>
            <Text style={styles.description}>Time: {item.Time}</Text>
            <Text style={styles.description}>Location: {item.Location}</Text>
            <Text style={styles.description}>
              Interviewer Info: {item.InterviewerInfo}
            </Text>
            <Text style={styles.description}>
              Interview Method: {item.InterviewMethod}
            </Text>
            <Text style={styles.description}>Purpose: {item.Purpose}</Text>
            <Text style={styles.description}>Context: {item.Context}</Text>
            <Text style={styles.description}>
              Questions and Answers: {item.QuestionsAnswers}
            </Text>
            <Text style={styles.description}>
              Statements: {item.Statements}
            </Text>
            <Text style={styles.description}>
              Observations: {item.Observations}
            </Text>
            <Text style={styles.description}>Documents: {item.Documents}</Text>
            <Text style={styles.description}>
              Photos/Videos: {item.PhotosVideos}
            </Text>
            <Text style={styles.description}>
              Audio Recordings: {item.AudioRecordings}
            </Text>
            <Text style={styles.description}>Summary: {item.Summary}</Text>
            <Text style={styles.description}>Analysis: {item.Analysis}</Text>
            <Text style={styles.description}>
              Follow-Up Actions: {item.Actions}
            </Text>
            <Text style={styles.description}>
              Assigned Personnel: {item.AssignedPersonnel}
            </Text>
            <Text style={styles.description}>
              Verification: {item.Verification}
            </Text>
            <Text style={styles.description}>
              Verification Results: {item.VerificationResults}
            </Text>
            <Text style={styles.description}>
              Additional Notes: {item.AdditionalNotes}
            </Text>
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
    color: "#000",
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: "#000",
  },
  date: {
    fontSize: 14,
    marginBottom: 4,
    color: "#000",
  },
  duration: {
    fontSize: 14,
    marginBottom: 8,
    color: "#000",
  },
  button: {
    padding: 8,
    backgroundColor: "#FFD700",
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default ViewInterviews;
