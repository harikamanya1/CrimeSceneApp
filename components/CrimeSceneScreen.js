import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const cases = [
  {
    id: "1",
    caseNumber: "#568746",
    date: "01/15/13",
    type: "Aggravated Assault",
    scenes: 4,
  },
  {
    id: "2",
    caseNumber: "#12323",
    date: "01/15/13",
    type: "Arson",
    scenes: 3,
  },
  {
    id: "3",
    caseNumber: "#568747",
    date: "12/15/12",
    type: "Offenses against the Family and Children",
    scenes: 4,
  },
  {
    id: "4",
    caseNumber: "#568748",
    date: "12/15/12",
    type: "Robbery",
    scenes: 3,
  },
];

const CrimeSceneScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [highlightedCaseId, setHighlightedCaseId] = useState(null);

  const openModal = (item) => {
    setSelectedCase(item);
    setModalVisible(true);
    setHighlightedCaseId(item.id); // Set the highlighted case ID
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCase(null);
    setHighlightedCaseId(null); // Reset the highlighted case ID
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <View
        style={[
          styles.caseItem,
          item.id === highlightedCaseId && styles.highlightedCaseItem,
        ]}
      >
        <Text style={styles.caseNumber}>{item.caseNumber}</Text>
        <Text style={styles.caseDate}>{item.date}</Text>
        <Text style={styles.caseType}>{item.type}</Text>
        <Text style={styles.caseScenes}>{item.scenes} Scenes</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Crime Scenes</Text>
      </View>
      <FlatList
        data={cases}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.caseList}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Case Options</Text>
            <Text style={styles.modalText}>
              Case Number: {selectedCase?.caseNumber}
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                closeModal();
                navigation.navigate("AddScene");
              }}
            >
              <Text style={styles.modalButtonText}>Add Scene</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                closeModal();
                navigation.navigate("ViewScenes");
              }}
            >
              <Text style={styles.modalButtonText}>View Scenes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                closeModal();
                navigation.navigate("AttachMedia");
              }}
            >
              <Text style={styles.modalButtonText}>Attach Media</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
  },
  caseList: {
    flex: 1,
  },
  caseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  highlightedCaseItem: {
    backgroundColor: "#FFD700", // Highlight color
  },
  caseNumber: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
  },
  caseDate: {
    color: "#000",
    fontSize: 14,
  },
  caseType: {
    color: "#FFD700",
    fontSize: 16,
  },
  caseScenes: {
    color: "#000",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFD700",
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#FFD700",
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default CrimeSceneScreen;
