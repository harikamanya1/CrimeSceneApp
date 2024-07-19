import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProfilePopup from './ProfilePage'; // Ensure you import the ProfilePopup component

const HomeScreen = () => {
  const navigation = useNavigation();
  const [profileVisible, setProfileVisible] = useState(false);

  const cases = [
    {
      id: '#568746',
      date: '01/15/13',
      type: 'Aggravated Assault',
      officer: 'Lieutenant James Coburn',
      victims: 'None',
      suspects: 'Gary Sinese',
      scenes: [
        { title: 'Presumptive Blood Testing', location: 'Kitchen Window', date: 'Dec 12, 2011 - 11:54 pm', description: 'Testing at the kitchen window.', image: 'https://via.placeholder.com/150' },
        { title: 'Buccal Swab', location: 'Dec 12, 2011 - 9:12 pm', date: '', description: 'Buccal swab description.', image: 'https://via.placeholder.com/150' }
      ],
    },
  ];

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={30} color="#FFD700" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleProfile}>
          <FontAwesome name="user" size={30} color="#FFD700" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.caseList}>
          {cases.map((caseItem, index) => (
            <View key={index} style={styles.caseItem}>
              <View style={styles.caseInfo}>
                <Text style={styles.caseId}>{caseItem.id}</Text>
                <Text style={styles.caseDate}>{caseItem.date}</Text>
                <Text style={styles.caseType}>{caseItem.type}</Text>
              </View>
              <View style={styles.caseDetails}>
                <Text style={styles.caseDetailsText}>Opened by: {caseItem.officer}</Text>
                <Text style={styles.caseDetailsText}>Victims: {caseItem.victims}</Text>
                <Text style={styles.caseDetailsText}>Suspects: {caseItem.suspects}</Text>
              </View>
              <TouchableOpacity
                style={styles.caseScenes}
                onPress={() => navigation.navigate('CaseScenes', { caseId: caseItem.id, scenes: caseItem.scenes })}
              >
                <Text style={styles.scenesText}>{caseItem.scenes.length} Scenes</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.recordSection}>
          <Text style={styles.sectionTitle}>Record</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AccessLogs')}>
              <FontAwesome name="book" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Access Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('EvidenceScreen')}>
              <FontAwesome name="archive" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Evidence Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="camera" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Photo Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="map" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Crime Scenes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="users" size={50} color="#FFD700" />
              <Text style={styles.iconText}>People of Interest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('NotePage')}>
              <FontAwesome name="sticky-note" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Notes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('ForensicAnalysisScreen')}>
              <FontAwesome name="flask" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Forensic Analysis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="microphone" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Interviews</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="lightbulb-o" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Leads</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="pencil" size={50} color="#FFD700" />
              <Text style={styles.iconText}>Sketches</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {profileVisible && (
        <View style={styles.profileContainer}>
          <ProfilePopup onClose={toggleProfile} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  recordSection: {
    padding: 20,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconButton: {
    alignItems: 'center',
    width: '30%',
    aspectRatio: 1,
    margin: '0.5%',
    justifyContent: 'center',
  },
  iconText: {
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
  },
  caseList: {
    flex: 1,
  },
  caseItem: {
    backgroundColor: '#FFF8DC',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  caseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  caseId: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  caseDate: {
    color: '#000',
    fontSize: 14,
  },
  caseType: {
    color: '#000',
    fontSize: 14,
  },
  caseDetails: {
    marginBottom: 10,
  },
  caseDetailsText: {
    color: '#000',
    fontSize: 14,
  },
  caseScenes: {
    alignItems: 'flex-end',
  },
  scenesText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  profileContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 200,
    backgroundColor: '#FFF8DC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
    padding: 10,
    zIndex: 1,
  },
});

export default HomeScreen;
