import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const LogsScreen = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [badgeNumber, setBadgeNumber] = useState('');
  const [purpose, setPurpose] = useState('');
  const [authorizingPerson, setAuthorizingPerson] = useState('');
  const [areaAccessed, setAreaAccessed] = useState('');
  const [actionsPerformed, setActionsPerformed] = useState('');
  const [duration, setDuration] = useState('');
  const [witnesses, setWitnesses] = useState('');
  const [ppeUsed, setPpeUsed] = useState('');
  const [incidents, setIncidents] = useState('');

  const handleAddEntry = () => {
    const newEntry = {
      timestamp: new Date().toLocaleString(),
      name,
      role,
      badgeNumber,
      purpose,
      authorizingPerson,
      areaAccessed,
      actionsPerformed,
      duration,
      witnesses,
      ppeUsed,
      incidents,
    };
    setEntries([...entries, newEntry]);
    // Clear the form
    setName('');
    setRole('');
    setBadgeNumber('');
    setPurpose('');
    setAuthorizingPerson('');
    setAreaAccessed('');
    setActionsPerformed('');
    setDuration('');
    setWitnesses('');
    setPpeUsed('');
    setIncidents('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Access Logs</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Role"
          placeholderTextColor="#999"
          value={role}
          onChangeText={setRole}
        />
        <TextInput
          style={styles.input}
          placeholder="Badge Number"
          placeholderTextColor="#999"
          value={badgeNumber}
          onChangeText={setBadgeNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Purpose of Access"
          placeholderTextColor="#999"
          value={purpose}
          onChangeText={setPurpose}
        />
        <TextInput
          style={styles.input}
          placeholder="Authorizing Person"
          placeholderTextColor="#999"
          value={authorizingPerson}
          onChangeText={setAuthorizingPerson}
        />
        <TextInput
          style={styles.input}
          placeholder="Specific Area Accessed"
          placeholderTextColor="#999"
          value={areaAccessed}
          onChangeText={setAreaAccessed}
        />
        <TextInput
          style={styles.input}
          placeholder="Actions Performed"
          placeholderTextColor="#999"
          value={actionsPerformed}
          onChangeText={setActionsPerformed}
        />
        <TextInput
          style={styles.input}
          placeholder="Duration"
          placeholderTextColor="#999"
          value={duration}
          onChangeText={setDuration}
        />
        <TextInput
          style={styles.input}
          placeholder="Witnesses"
          placeholderTextColor="#999"
          value={witnesses}
          onChangeText={setWitnesses}
        />
        <TextInput
          style={styles.input}
          placeholder="PPE Used"
          placeholderTextColor="#999"
          value={ppeUsed}
          onChangeText={setPpeUsed}
        />
        <TextInput
          style={styles.input}
          placeholder="Incidents"
          placeholderTextColor="#999"
          value={incidents}
          onChangeText={setIncidents}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddEntry}>
          <Text style={styles.buttonText}>Add Entry</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logContainer}>
        {entries.map((entry, index) => (
          <View key={index} style={styles.logEntry}>
            <Text style={styles.logText}>Timestamp: {entry.timestamp}</Text>
            <Text style={styles.logText}>Name: {entry.name}</Text>
            <Text style={styles.logText}>Role: {entry.role}</Text>
            <Text style={styles.logText}>Badge Number: {entry.badgeNumber}</Text>
            <Text style={styles.logText}>Purpose of Access: {entry.purpose}</Text>
            <Text style={styles.logText}>Authorizing Person: {entry.authorizingPerson}</Text>
            <Text style={styles.logText}>Specific Area Accessed: {entry.areaAccessed}</Text>
            <Text style={styles.logText}>Actions Performed: {entry.actionsPerformed}</Text>
            <Text style={styles.logText}>Duration: {entry.duration}</Text>
            <Text style={styles.logText}>Witnesses: {entry.witnesses}</Text>
            <Text style={styles.logText}>PPE Used: {entry.ppeUsed}</Text>
            <Text style={styles.logText}>Incidents: {entry.incidents}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logContainer: {
    marginTop: 20,
  },
  logEntry: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  logText: {
    color: '#000',
    marginBottom: 5,
  },
});

export default LogsScreen;
