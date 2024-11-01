import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const App = () => {

  // Press handlers for each individual button
  const handleStarsPress = () => { 
    Alert.alert('STARS Pressed', 'You pressed the STARS button.');
  };

  const handleFixturesPress = () => {
    Alert.alert('FIXTURES Pressed', 'You pressed the FIXTURES button.');
  };

  const handlePointsTablePress = () => {
    router.push('/auth/Point Table')
    
  };

  const handlePollsPress = () => {
   router.push('./')
     
  };

  const handleMemoriesPress = () => {
    router.push('/auth/Memory')
     
  };

  const handleDevelopersPress = () => {
     router.push('./auth/Profile')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* STARS Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#ff5f6d' }]}
        onPress={handleStarsPress}
      >
        <Text style={styles.buttonText}>STARS</Text>
      </TouchableOpacity>

      {/* FIXTURES Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#8e2de2' }]}
        onPress={handleFixturesPress}
      >
        <Text style={styles.buttonText}>FIXTURES</Text>
      </TouchableOpacity>

      {/* POINTS TABLE Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#11998e' }]}
        onPress={handlePointsTablePress}
      >
        <Text style={styles.buttonText}>POINTS TABLE</Text>
      </TouchableOpacity>

      {/* POLLS Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f12711' }]}
        onPress={handlePollsPress}
      >
        <Text style={styles.buttonText}>POLLS</Text>
      </TouchableOpacity>

      {/* MEMORIES Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f7971e' }]}
        onPress={handleMemoriesPress}
      >
        <Text style={styles.buttonText}>MEMORIES</Text>
      </TouchableOpacity>

      {/* DEVELOPERS ❤️ Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#00c6ff' }]}
        onPress={handleDevelopersPress}
      >
        <Text style={styles.buttonText}>DEVELOPERS ❤️</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
