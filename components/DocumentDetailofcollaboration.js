import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import CustomButton from "./CustomButton";

const DocumentDetail = ({ route, navigation }) => {
  const { document } = route.params || {};
  const [title, setTitle] = useState(document?.Title || "");
  const [content, setContent] = useState(document?.Content || "");
  const [sharedWith, setSharedWith] = useState(document?.SharedWith || []);

  const saveDocument = () => {
    // Logic to save the document
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {document ? "Edit Document" : "Add Document"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Text style={styles.label}>Shared With</Text>
      <FlatList
        data={sharedWith}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
        ListEmptyComponent={<Text>No users shared with.</Text>}
      />
      <CustomButton active={false} onPress={saveDocument} iconName="save">
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DocumentDetail;
