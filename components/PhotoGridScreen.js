import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "./CustomButton";

const PhotoGridScreen = ({ photos, close }) => {
  const [sortCriteria, setSortCriteria] = useState("date");

  const sortedPhotos = [...photos].sort((a, b) => {
    switch (sortCriteria) {
      case "date":
        return new Date(b.date) - new Date(a.date);
      case "album":
        return a.album.localeCompare(b.album);
      case "name":
        return a.name.localeCompare(b.name);
      case "size":
        return b.size - a.size;
      default:
        return 0;
    }
  });

const renderPhotoItem = ({ item }) => {
  const displayName = item.name || "Unknown Name";
  const displayAlbum = item.album || "Unknown Album";
  const displayDate = item.date
    ? new Date(item.date).toLocaleDateString()
    : "Unknown Date";
  const displaySize =
    item.size !== "Unknown" ? `${item.size} KB` : "Unknown Size";

  return (
    <View style={styles.photoContainer}>
      <Image source={{ uri: item.uri }} style={styles.photo} />
      <Text style={styles.photoDetails} numberOfLines={1} ellipsizeMode="tail">
        {displayName}
      </Text>
      <Text style={styles.photoDetails} numberOfLines={1} ellipsizeMode="tail">
        Album: {displayAlbum}
      </Text>
      <Text style={styles.photoDetails} numberOfLines={1} ellipsizeMode="tail">
        Date: {displayDate}
      </Text>
      <Text style={styles.photoDetails} numberOfLines={1} ellipsizeMode="tail">
        Size: {displaySize}
      </Text>
    </View>
  );
};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Photo Grid</Text>
      </View>
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort by:</Text>
        <Picker
          selectedValue={sortCriteria}
          style={styles.picker}
          onValueChange={(itemValue) => setSortCriteria(itemValue)}
        >
          <Picker.Item label="Date" value="date" />
          <Picker.Item label="Album" value="album" />
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Size" value="size" />
        </Picker>
      </View>
      <FlatList
        data={sortedPhotos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPhotoItem}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
      <View style={styles.buttonContainer}>
        <CustomButton active={false} onPress={close} iconName="times">
          Close
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
    padding: 10,
  },
  headerContainer: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  sortContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  sortLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginRight: 10,
  },
  picker: {
    height: 50,
    width: 200,
    backgroundColor: "#FFF8DC",
    borderColor: "#FFD700",
    borderWidth: 1,
    borderRadius: 5,
  },
  grid: {
    marginVertical: 20,
  },
  photoContainer: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    maxWidth: 120, // Set max width to prevent stretching
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  photoDetails: {
    fontSize: 12,
    color: "#000",
    textAlign: "center",
    maxWidth: 100, // Ensure text does not exceed the width of the photo
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});


export default PhotoGridScreen;
