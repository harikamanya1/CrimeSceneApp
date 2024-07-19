import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExistingCasePage = ({ route }) => {
  const { caseId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Existing Case Page</Text>
      <Text style={styles.subtitle}>Case ID: {caseId}</Text>
      {/* Implement your existing case details logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
  },
});

export default ExistingCasePage;
