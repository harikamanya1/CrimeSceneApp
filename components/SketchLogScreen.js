// components/SketchLogScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const SketchLogScreen = ({ navigation }) => {
  const sketches = [
    { id: "S001", title: "Living Room Layout", date: "2024-07-05" },
    { id: "S002", title: "Backyard Overview", date: "2024-07-06" },
    // Add more sketches here
  ];

  const navigateToSketchDetails = (sketchId) => {
    navigation.navigate("SketchDetail", { sketchId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigateToSketchDetails(item.id)}
      style={styles.item}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sketches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateSketchScreen")}
      >
        <Text style={styles.buttonText}>Create New Sketch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF8DC",
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#6c757d",
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

export default SketchLogScreen;
