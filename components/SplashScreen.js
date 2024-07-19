  // components/SplashScreen.js
  import React, { useEffect } from 'react';
  import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';

  const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Login');
      }, 3000);
    }, [navigation]);

    return (
      <ImageBackground source={require('../assets/crime3.jpg')} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.title}>PTRAX</Text>
          <ActivityIndicator size="large" color="#FFD700" />
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
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFD700',
      marginBottom: 20,
    },
  });

  export default SplashScreen;
