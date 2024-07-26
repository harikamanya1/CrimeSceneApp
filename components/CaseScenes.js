import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const { width: screenWidth } = Dimensions.get("window");

const CaseScenes = ({ route }) => {
  const { caseId, scenes } = route.params;
  const [currentCaseId, setCurrentCaseId] = useState(caseId);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCaseId, setNewCaseId] = useState(currentCaseId);

  const handleEdit = () => {
    setCurrentCaseId(newCaseId);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.caseInfoContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }}
            style={styles.personImage}
          />
          <Text style={styles.caseId}>Case ID: {currentCaseId}</Text>
          <Text style={styles.address}>123 Main St, Somewhere, DC 15243</Text>
          <Text style={styles.details}>
            Time of Arrival: Dec 12, 2011 - 5:34pm
          </Text>
          <Text style={styles.officer}>
            Investigating Officer: Officer James Smith
          </Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scenesContainer}>
          <ScrollView style={styles.scenesList}>
            {scenes.map((scene, index) => (
              <View key={index} style={styles.sceneItem}>
                <View style={styles.sceneInfo}>
                  <Text style={styles.sceneTitle}>{scene.title}</Text>
                  <Text style={styles.sceneLocation}>{scene.location}</Text>
                  <Text style={styles.sceneDate}>{scene.date}</Text>
                </View>
                {scene.image && (
                  <Image
                    source={{ uri: scene.image }}
                    style={styles.sceneImage}
                  />
                )}
                <Text style={styles.sceneDescription}>{scene.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="unlock" size={24} color="black" />
          <Text style={styles.footerText}>Access</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name="folder" size={24} color="black" />
          <Text style={styles.footerText}>Evidence</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="comments" size={24} color="black" />
          <Text style={styles.footerText}>Interview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="sticky-note" size={24} color="black" />
          <Text style={styles.footerText}>Note</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="camera" size={24} color="black" />
          <Text style={styles.footerText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="wrench" size={24} color="black" />
          <Text style={styles.footerText}>Techniques</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="pencil" size={24} color="black" />
          <Text style={styles.footerText}>Sketch</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit Case ID</Text>
            <TextInput
              style={styles.modalInput}
              value={newCaseId}
              onChangeText={setNewCaseId}
            />
            <Button title="Save" onPress={handleEdit} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  caseInfoContainer: {
    width: screenWidth * 0.4,
    backgroundColor: "#333",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  personImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  caseId: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  address: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  details: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  officer: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  scenesContainer: {
    width: screenWidth * 0.6,
    padding: 20,
  },
  scenesList: {
    flex: 1,
  },
  sceneItem: {
    backgroundColor: "#444",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  sceneInfo: {
    marginBottom: 10,
  },
  sceneTitle: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },
  sceneLocation: {
    color: "#FFF",
  },
  sceneDate: {
    color: "#FFF",
  },
  sceneImage: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  sceneDescription: {
    color: "#DDD",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#444",
    backgroundColor: "#FFD700",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    color: "black",
    fontSize: 12,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
});

export default CaseScenes;
