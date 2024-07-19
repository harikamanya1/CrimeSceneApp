import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePopup = ({ onClose }) => {
  const navigation = useNavigation();

  // Sample data; replace with actual data
  const profileData = {
    imageUrl: 'https://via.placeholder.com/150',
    name: 'John Doe',
    employeeId: '123456',
    email: 'john.doe@example.com',
  };

  const handleLogout = () => {
    console.log('Logged out');
    navigation.navigate('Login');
    onClose();
  };

  return (
    <View style={styles.popupContainer}>
      <View style={styles.profileView}>
        <Image source={{ uri: profileData.imageUrl }} style={styles.profileImage} />
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.info}>Employee ID: {profileData.employeeId}</Text>
        <Text style={styles.info}>Email: {profileData.email}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    alignItems: 'center',
  },
  profileView: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProfilePopup;
