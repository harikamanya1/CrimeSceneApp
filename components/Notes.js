import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

const Notes = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const notes = [
    // Example data
    {
      NoteID: "1",
      Content: "Initial crime scene observations...",
      CreatedBy: "John Doe",
      CreatedAt: "2024-07-20",
      LastEditedBy: "Jane Doe",
      LastEditedAt: "2024-07-21",
    },
    // Add more notes here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.NoteID}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text>{item.Content}</Text>
            <Text>
              Created by: {item.CreatedBy} on {item.CreatedAt}
            </Text>
            <Text>
              Last edited by: {item.LastEditedBy} on {item.LastEditedAt}
            </Text>
            <CustomButton
              active={activeButton === item.NoteID}
              onPress={() => {
                setActiveButton(item.NoteID);
                navigation.navigate("NoteDetail", { note: item });
              }}
              iconName="edit"
            >
              Edit
            </CustomButton>
          </View>
        )}
      />
      <CustomButton
        active={activeButton === "AddNote"}
        onPress={() => {
          setActiveButton("AddNote");
          navigation.navigate("NoteDetail");
        }}
        iconName="plus"
      >
        Add Note
      </CustomButton>
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
    fontSize: 24,
    marginBottom: 20,
    color: "#FFD700",
  },
  noteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
});

export default Notes;
