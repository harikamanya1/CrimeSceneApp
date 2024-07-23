// ViewPeople.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const people = [
  { id: "1", name: "John Doe", age: 30, description: "Person of interest 1" },
  { id: "2", name: "Jane Smith", age: 25, description: "Person of interest 2" },
  // Add more mock data here
];

const ViewPeople = () => {
  const [filter, setFilter] = useState("");
  const navigation = useNavigation();

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSelectPerson = (person) => {
    navigation.navigate("ManageNotes", { person });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>People of Interest</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={filter}
        onChangeText={setFilter}
      />
      <FlatList
        data={filteredPeople}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectPerson(item)}>
            <View style={styles.personItem}>
              <Text style={styles.personText}>{item.name}</Text>
              <Text style={styles.personText}>Age: {item.age}</Text>
              <Text style={styles.personText}>
                {item.description.length > 50
                  ? `${item.description.substring(0, 50)}...`
                  : item.description}
              </Text>
            </View>
          </TouchableOpacity>
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
  personItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700",
  },
  personText: {
    color: "#000",
  },
});

export default ViewPeople;
