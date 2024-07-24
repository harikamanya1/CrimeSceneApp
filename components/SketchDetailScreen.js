// components/SketchDetailScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SketchDetailScreen = ({ route }) => {
  const { sketchId } = route.params || {}; // Use empty object fallback to avoid undefined
  const navigation = useNavigation();

  if (!sketchId) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          No sketch ID provided. Please go back and select a sketch.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Sample data for the specific sketch
  const sketchDetails = {
    S001: {
      caseNumber: "C2024-001",
      title: "Living Room Layout",
      date: "2024-07-05 09:30 AM",
      creator: "Jane Smith",
      role: "Forensic Artist",
      contact: "(123) 456-7890; jane.smith@forensics.com",
      location: "Living Room, 123 Main St, City, ST",
      gps: "34.0522 N, 118.2437 W",
      type: "Hand-drawn",
      description:
        "Sketch of the living room showing the position of the victim, furniture, and key evidence items.",
      measurements:
        "Distance from door to victim: 10 feet; couch length: 7 feet",
      scale: "1 inch = 1 foot",
      annotations: "V for victim, B for bloodstain, W for weapon",
      legend: "V: Victim, B: Bloodstain, W: Weapon",
      evidence: "E001 (weapon), E002 (bloodstain)",
      photos: "[Attached photos of the living room and sketch]",
      documentation: "[Attached notes and drafts]",
      verifiedBy: "Detective John Doe",
      verificationDate: "2024-07-06",
      approval: "Approved by Chief Inspector Mark Brown",
    },
    // Add more sketches details as needed
  };

  const sketch = sketchDetails[sketchId];

  if (!sketch) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          No details found for sketch ID: {sketchId}. Please go back and select
          a valid sketch.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Case Number</Text>
        <Text style={styles.value}>{sketch.caseNumber}</Text>

        <Text style={styles.label}>Sketch Title</Text>
        <Text style={styles.value}>{sketch.title}</Text>

        <Text style={styles.label}>Date and Time</Text>
        <Text style={styles.value}>{sketch.date}</Text>

        <Text style={styles.label}>Creator</Text>
        <Text style={styles.value}>{sketch.creator}</Text>

        <Text style={styles.label}>Role/Position</Text>
        <Text style={styles.value}>{sketch.role}</Text>

        <Text style={styles.label}>Contact Information</Text>
        <Text style={styles.value}>{sketch.contact}</Text>

        <Text style={styles.label}>Scene Location</Text>
        <Text style={styles.value}>{sketch.location}</Text>

        <Text style={styles.label}>GPS Coordinates</Text>
        <Text style={styles.value}>{sketch.gps}</Text>

        <Text style={styles.label}>Type of Sketch</Text>
        <Text style={styles.value}>{sketch.type}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{sketch.description}</Text>

        <Text style={styles.label}>Measurements</Text>
        <Text style={styles.value}>{sketch.measurements}</Text>

        <Text style={styles.label}>Scale</Text>
        <Text style={styles.value}>{sketch.scale}</Text>

        <Text style={styles.label}>Annotations</Text>
        <Text style={styles.value}>{sketch.annotations}</Text>

        <Text style={styles.label}>Legend</Text>
        <Text style={styles.value}>{sketch.legend}</Text>

        <Text style={styles.label}>Linked Evidence</Text>
        <Text style={styles.value}>{sketch.evidence}</Text>

        <Text style={styles.label}>Photos</Text>
        <Text style={styles.value}>{sketch.photos}</Text>

        <Text style={styles.label}>Documentation</Text>
        <Text style={styles.value}>{sketch.documentation}</Text>

        <Text style={styles.label}>Verified By</Text>
        <Text style={styles.value}>{sketch.verifiedBy}</Text>

        <Text style={styles.label}>Date of Verification</Text>
        <Text style={styles.value}>{sketch.verificationDate}</Text>

        <Text style={styles.label}>Approval</Text>
        <Text style={styles.value}>{sketch.approval}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
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
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginBottom: 16,
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

export default SketchDetailScreen;
