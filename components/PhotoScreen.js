import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "./CustomButton";
import PhotoGridScreen from "./PhotoGridScreen";

const PhotoLogsScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [albumModalVisible, setAlbumModalVisible] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");
  const [editAlbumIndex, setEditAlbumIndex] = useState(null);
  const [photoGridVisible, setPhotoGridVisible] = useState(false);
  const [albumOptionsVisible, setAlbumOptionsVisible] = useState(false);
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);
  const [newAlbumPhotos, setNewAlbumPhotos] = useState([]); // Store new album photos

  const capturePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const photoData = {
          uri: result.uri,
          name: result.uri.split("/").pop(),
          album: "Uncategorized",
          date: new Date().toISOString(),
          size: "Unknown",
        };
        setPhotos((prevPhotos) => [...prevPhotos, photoData]);
      }
    }
  };

  const selectPhotosForAlbum = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setNewAlbumPhotos([
        ...newAlbumPhotos,
        ...result.assets.map((item) => ({
          uri: item.uri,
          name: item.uri.split("/").pop(),
          album: newAlbumName || "Uncategorized",
          date: item.creationTime || new Date().toISOString(),
          size: item.fileSize || "Unknown",
        })),
      ]);
    }
  };

  const createAlbum = () => {
    if (newAlbumName.trim()) {
      const album = { name: newAlbumName, photos: newAlbumPhotos };
      if (editAlbumIndex !== null) {
        const updatedAlbums = albums.map((album, index) =>
          index === editAlbumIndex
            ? { ...album, name: newAlbumName, photos: newAlbumPhotos }
            : album
        );
        setAlbums(updatedAlbums);
      } else {
        setAlbums([...albums, album]);
      }

      // Update the main photos state with the new album photos, avoiding duplicates
      setPhotos((prevPhotos) => [
        ...prevPhotos,
        ...newAlbumPhotos.filter(
          (newPhoto) => !prevPhotos.some((photo) => photo.uri === newPhoto.uri)
        ),
      ]);

      setNewAlbumName("");
      setEditAlbumIndex(null);
      setAlbumModalVisible(false);
      setNewAlbumPhotos([]); // Clear the temporary photos
    }
  };

  const deleteAlbum = (index) => {
    setAlbums(albums.filter((_, i) => i !== index));
    setAlbumOptionsVisible(false);
  };

  const renderPhoto = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setPreviewImage(item);
        setModalVisible(true);
      }}
    >
      <Image source={{ uri: item.uri }} style={styles.photo} />
    </TouchableOpacity>
  );

  const openAlbumModal = (album = null, index = null) => {
    if (album) {
      setNewAlbumName(album.name);
      setEditAlbumIndex(index);
      setNewAlbumPhotos(album.photos || []); // Load existing photos for editing
    } else {
      setNewAlbumName("");
      setEditAlbumIndex(null);
      setNewAlbumPhotos([]);
    }
    setAlbumModalVisible(true);
  };

  const openAlbumOptions = (index) => {
    setSelectedAlbumIndex(index);
    setSelectedAlbum(albums[index]); // Set the selected album
    setAlbumOptionsVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomButton active={false} onPress={capturePhoto} iconName="camera">
          Capture Photo
        </CustomButton>
      </View>
      <View style={styles.albums}>
        <FlatList
          data={albums}
          keyExtractor={(item) => item.name}
          horizontal
          renderItem={({ item, index }) => (
            <View style={styles.albumContainer}>
              <TouchableOpacity
                style={styles.album}
                onPress={() => openAlbumOptions(index)}
              >
                <Image
                  source={{
                    uri:
                      item.photos[0]?.uri || "https://via.placeholder.com/150",
                  }} // Use a placeholder image if no photos
                  style={styles.albumImage}
                />
                <Text style={styles.albumText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <CustomButton
          active={false}
          onPress={() => openAlbumModal()}
          iconName="plus"
        >
          Add Album
        </CustomButton>
        <CustomButton
          active={false}
          onPress={() => setPhotoGridVisible(true)}
          iconName="image"
        >
          View Photos
        </CustomButton>
      </View>
      <View style={styles.photos}>
        {selectedAlbum && (
          <FlatList
            data={selectedAlbum.photos}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3} // Adjust the number of columns as needed
          />
        )}
      </View>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          {previewImage && (
            <Image
              source={{ uri: previewImage.uri }}
              style={styles.previewImage}
            />
          )}
          <CustomButton
            active={false}
            onPress={() => setModalVisible(false)}
            iconName="times"
          >
            Close
          </CustomButton>
        </View>
      </Modal>
      <Modal visible={albumModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.albumModal}>
            <TextInput
              style={styles.input}
              placeholder="Album Name"
              value={newAlbumName}
              onChangeText={setNewAlbumName}
            />
            <FlatList
              data={newAlbumPhotos}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3} // Adjust the number of columns as needed
              renderItem={renderPhoto}
            />
            <CustomButton
              active={false}
              onPress={selectPhotosForAlbum}
              iconName="photo"
            >
              Add Photos
            </CustomButton>
            <CustomButton active={false} onPress={createAlbum} iconName="save">
              Save
            </CustomButton>
            <CustomButton
              active={false}
              onPress={() => setAlbumModalVisible(false)}
              iconName="times"
            >
              Cancel
            </CustomButton>
          </View>
        </View>
      </Modal>
      <Modal visible={albumOptionsVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.albumModal}>
            <Text style={styles.modalTitle}>{selectedAlbum?.name}</Text>
            <FlatList
              data={selectedAlbum?.photos || []}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3} // Show images in a grid
              renderItem={({ item }) => (
                <Image source={{ uri: item.uri }} style={styles.albumPhoto} />
              )}
            />
            <CustomButton
              active={false}
              onPress={() => {
                openAlbumModal(selectedAlbum, selectedAlbumIndex);
                setAlbumOptionsVisible(false);
              }}
              iconName="edit"
            >
              Edit Album
            </CustomButton>
            <CustomButton
              active={false}
              onPress={() => deleteAlbum(selectedAlbumIndex)}
              iconName="trash"
            >
              Delete Album
            </CustomButton>
            <CustomButton
              active={false}
              onPress={() => setAlbumOptionsVisible(false)}
              iconName="times"
            >
              Cancel
            </CustomButton>
          </View>
        </View>
      </Modal>
      <Modal visible={photoGridVisible} transparent={true}>
        <PhotoGridScreen
          photos={photos}
          close={() => setPhotoGridVisible(false)}
        />
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
    marginTop: 20,
  },
  albums: {
    padding: 20,
    marginTop: 20,
  },
  albumContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
  },
  album: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  albumText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  albumImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
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
  albumModal: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  albumPhoto: {
    width: 100,
    height: 100,
    margin: 5,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
  },
});

export default PhotoLogsScreen;
