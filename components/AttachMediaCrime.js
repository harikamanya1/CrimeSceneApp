import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const AttachMedia = () => {
  const [media, setMedia] = useState([]);

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setMedia([...media, ...result.assets]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Attach Media</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={media}
          keyExtractor={(item) => item.uri}
          renderItem={({ item }) => (
            <View style={styles.mediaItem}>
              <Image source={{ uri: item.uri }} style={styles.mediaImage} />
            </View>
          )}
          horizontal
          style={styles.mediaList}
          contentContainerStyle={styles.mediaListContent}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Pick Media" onPress={pickMedia} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              title="Save"
              onPress={() => Alert.alert("Media attached successfully")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
  },
  header: {
    backgroundColor: "#FFD700",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mediaList: {
    flexGrow: 0,
  },
  mediaListContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  mediaItem: {
    marginRight: 10,
  },
  mediaImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    marginVertical: 10,
    width: "100%",
  },
});

export default AttachMedia;
