import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "./CustomButton";

const Documents = () => {
  const navigation = useNavigation();
  const documents = [
    {
      DocumentID: "1",
      Title: "Evidence Report",
      Content: "Details of the collected evidence...",
      CreatedBy: "John Doe",
      CreatedAt: "2024-07-20",
      LastEditedBy: "Jane Doe",
      LastEditedAt: "2024-07-21",
      SharedWith: ["Jane Doe", "Bob Smith"],
    },
    // Add more documents here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documents</Text>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.DocumentID}
        renderItem={({ item }) => (
          <View style={styles.documentItem}>
            <Text>Title: {item.Title}</Text>
            <Text>
              Created by: {item.CreatedBy} on {item.CreatedAt}
            </Text>
            <Text>
              Last edited by: {item.LastEditedBy} on {item.LastEditedAt}
            </Text>
            <Text>Shared with: {item.SharedWith.join(", ")}</Text>
            <CustomButton
              active={false}
              onPress={() =>
                navigation.navigate("DocumentDetail", { document: item })
              }
              iconName="edit"
            >
              Edit
            </CustomButton>
          </View>
        )}
      />
      <CustomButton
        active={false}
        onPress={() => navigation.navigate("DocumentDetail")}
        iconName="plus"
      >
        Add Document
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
    color: "#000",
  },
  documentItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
});

export default Documents;
