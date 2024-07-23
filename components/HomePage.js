import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ProfilePopup from "./ProfilePage"; // Ensure you import the ProfilePopup component

const HomeScreen = () => {
  const navigation = useNavigation();
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome name="home" size={30} color="#FFD700" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleProfile}>
          <FontAwesome name="user" size={30} color="#FFD700" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.recordSection}>
          <Text style={styles.sectionTitle}>Record</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate("AccessLogs")}
            >
              <FontAwesome name="book" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Access Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate("EvidenceScreen")}
            >
              <FontAwesome name="archive" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Evidence Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate("PhotoScreen")}
            >
              <FontAwesome name="camera" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Photo Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate("CrimeSceneScreen")}
            >
              <FontAwesome name="map" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Crime Scenes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="users" size={50} color="#FFD700" />
              <Text style={styles.iconText}>People of Interest</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate("ForensicAnalysisScreen")}
            >
              <FontAwesome name="flask" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Forensic Analysis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="microphone" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Interviews</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="lightbulb-o" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Leads</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="pencil" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Sketches</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {profileVisible && (
        <View style={styles.profileContainer}>
          <ProfilePopup onClose={toggleProfile} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  recordSection: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center", // Center the record section
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center", // Center the icons
  },
  iconButton: {
    alignItems: "center",
    width: "30%",
    aspectRatio: 1,
    margin: "0.5%",
    justifyContent: "center",
  },
  iconText: {
    color: "#000",
    marginTop: 5,
    textAlign: "center",
  },
  profileContainer: {
    position: "absolute",
    top: 60,
    right: 20,
    width: 200,
    backgroundColor: "#FFF8DC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 10,
    zIndex: 1,
  },
});

export default HomeScreen;
