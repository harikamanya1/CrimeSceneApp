import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const PhotoLogsScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const capturePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setPhotos([...photos, result.uri]);
      }
    }
  };

  const createAlbum = (name) => {
    setAlbums([...albums, { name, photos: [] }]);
  };

  const movePhotoToAlbum = (photoUri, albumName) => {
    const updatedAlbums = albums.map((album) => {
      if (album.name === albumName) {
        return { ...album, photos: [...album.photos, photoUri] };
      }
      return album;
    });
    setAlbums(updatedAlbums);
  };

  const renderPhoto = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setPreviewImage(item);
        setModalVisible(true);
      }}
    >
      <Image source={{ uri: item }} style={styles.photo} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={capturePhoto}>
          <FontAwesome name="camera" size={30} color="#FFD700" />
        </TouchableOpacity>
      </View>
      <View style={styles.albums}>
        <Text style={styles.sectionTitle}>Albums</Text>
        <FlatList
          data={albums}
          keyExtractor={(item) => item.name}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.album}
              onPress={() => setSelectedAlbum(item)}
            >
              <Text style={styles.albumText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.photos}>
        <Text style={styles.sectionTitle}>Photos</Text>
        <FlatList
          data={selectedAlbum ? selectedAlbum.photos : photos}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={renderPhoto}
        />
      </View>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: previewImage }} style={styles.previewImage} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    zIndex: 1,
  },
  albums: {
    padding: 20,
    marginTop: 100,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
    textAlign: "center",
  },
  album: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  albumText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  photos: {
    flex: 1,
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  previewImage: {
    width: 300,
    height: 300,
  },
});

export default PhotoLogsScreen;
