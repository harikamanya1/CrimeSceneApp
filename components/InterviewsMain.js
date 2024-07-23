import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const InterviewsMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interviews - Recording Module</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Record Interview"
          onPress={() => navigation.navigate("RecordInterview")}
          color="#FFD700" // Yellow button text
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Interviews"
          onPress={() => navigation.navigate("ViewInterviews")}
          color="#FFD700" // Yellow button text
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Attach Audio"
          onPress={() => navigation.navigate("AttachAudio")}
          color="#FFD700" // Yellow button text
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF8DC",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#000",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
});

export default InterviewsMain;
