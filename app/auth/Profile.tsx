import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const ProfileCard = () => {
  // Phone number click function
  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Instagram click function
  const handleInstagram = () => {
    Linking.openURL('https://instagram.com/sxtyxmbhxrdwxj'); // Replace with actual profile link
  };

  return (
    <View style={styles.card}>
      {/* Profile Image */}
      <Image
        style={styles.profileImage}
        source={require('./../../assets/images/1002.jpg')} // Path to the local image (adjust the path based on your project structure)
      />
      
      {/* Name and Details */}
      <Text style={styles.name}>Satyam Bhardwaj</Text>
      <Text style={styles.designation}>CSE</Text>
      <Text style={styles.details}>B.Tech. - Final Year</Text>
      <Text style={styles.details}>Phone No.- 6207063911</Text>

      {/* Phone Number Clickable */}
      <TouchableOpacity onPress={() => handleCall('6207063911')}>
        <Text style={styles.phone}>Call Now</Text>
      </TouchableOpacity>

      {/* Instagram Button */}
      <TouchableOpacity style={styles.instagramButton} onPress={handleInstagram}>
        <Text style={styles.instagramText}>Get connected</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop:110
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  designation: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#007BFF',
    marginVertical: 10,
  },
  instagramButton: {
    backgroundColor: '#E1306C',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  instagramText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileCard;
