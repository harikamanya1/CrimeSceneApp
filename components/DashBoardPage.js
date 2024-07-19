import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.moduleContainer}>
          <Text style={styles.module}>Record</Text>
          <Text style={styles.module}>Collaborate</Text>
          <Text style={styles.module}>Management</Text>
           <Text style={styles.module}>Reporting</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC', // Light yellow background
  },
  header: {
    flex: 1,
    backgroundColor: '#FFD700', // Gold header
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Black text
  },
  content: {
    flex: 2,
    backgroundColor: '#FFF8DC', // Light yellow background
    padding: 20,
  },
  moduleContainer: {
    alignItems: 'center',
  },
  module: {
    fontSize: 18,
    marginVertical: 8,
    color: '#000', // Black text
  },
});
