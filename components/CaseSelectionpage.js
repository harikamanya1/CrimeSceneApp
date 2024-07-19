import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CaseSelectionPage = ({ navigation }) => {
  const [caseId, setCaseId] = useState('');

  const handleNewCase = () => {
    navigation.navigate('NewCasePage');
  };

  const handleExistingCase = () => {
    navigation.navigate('ExistingCasePage', { caseId });
  };

  return (
    <ImageBackground source={require('../assets/crime3.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleNewCase}>
            <FontAwesome name="plus-circle" size={24} color="#000" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>New Case</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>Or search for an existing case by ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Case ID"
            placeholderTextColor="#999"
            value={caseId}
            onChangeText={setCaseId}
          />
          <TouchableOpacity style={styles.button} onPress={handleExistingCase}>
            <FontAwesome name="search" size={24} color="#000" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Search Case</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // semi-transparent black overlay
    width: '100%',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
  },
});

export default CaseSelectionPage;
