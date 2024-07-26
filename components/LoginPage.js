import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    navigation.navigate('CaseSelection');
  };

  return (
    <ImageBackground source={require('../assets/crime3.jpg')} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.form}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>PTRAX</Text>
          <Text style={styles.subtitle}>Sign in to continue.</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>Forgot Password?</Text>
          <Text style={styles.footerText}>Signup!</Text>
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
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // semi-transparent black overlay
  },
  form: {
    backgroundColor: 'rgba(0,0,0,0.3)', // semi-transparent black overlay
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff', 
    marginBottom: 20,
    fontWeight:'bold',
  },
  input: {
    height: 50,
    borderColor: '#ffd700', 
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff', // White text
  },
  button: {
    backgroundColor: '#FFD700', // Gold button
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: '#fff', // White footer text
    marginTop: 10,
    fontWeight:'bold',
  },
});

export default LoginPage;
