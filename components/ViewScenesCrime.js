import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity, // Ensure TouchableOpacity is imported
} from "react-native";

const scenes = [
  {
    id: "1",
    location: "Location 1",
    date: "01/15/13",
    description: "Description 1",
  },
  {
    id: "2",
    location: "Location 2",
    date: "01/16/13",
    description: "Description 2",
  },
];

const ViewScenes = () => {
  const [filter, setFilter] = useState("");

  const filteredScenes = scenes.filter((scene) =>
    scene.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crime Scenes</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by location"
        value={filter}
        onChangeText={setFilter}
      />
      <FlatList
        data={filteredScenes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sceneItem}>
            <Text style={styles.sceneText}>{item.location}</Text>
            <Text style={styles.sceneText}>{item.date}</Text>
            <Text style={styles.sceneText}>
              {item.description.length > 50
                ? `${item.description.substring(0, 50)}...`
                : item.description}
            </Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  sceneItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  sceneText: {
    color: "#000",
  },
});

export default ViewScenes;
 