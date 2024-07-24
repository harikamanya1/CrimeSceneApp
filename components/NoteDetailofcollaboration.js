import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const NoteDetail = ({ route, navigation }) => {
  const { note } = route.params || {};
  const [content, setContent] = useState(note?.Content || "");
  const [createdBy, setCreatedBy] = useState(note?.CreatedBy || "");
  const [lastEditedBy, setLastEditedBy] = useState(note?.LastEditedBy || "");

  const saveNote = () => {
    // Logic to save the note
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note ? "Edit Note" : "Add Note"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Created By"
        value={createdBy}
        onChangeText={setCreatedBy}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Edited By"
        value={lastEditedBy}
        onChangeText={setLastEditedBy}
      />
      <CustomButton active={false} onPress={saveNote} iconName="save">
        Save
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default NoteDetail;
