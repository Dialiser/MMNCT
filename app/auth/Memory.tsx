import FooterComponent from '@/Componets/FooterComponent';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const imageSources = [
  require('./../../assets/memory/1.jpg'),
  require('./../../assets/memory/2.jpg'),
  require('./../../assets/memory/3.jpg'),
  require('./../../assets/memory/4.jpg'),
  require('./../../assets/memory/5.jpg'),
  require('./../../assets/memory/6.jpg'),
  require('./../../assets/memory/7.jpg'),
  require('./../../assets/memory/8.jpg'),
  require('./../../assets/memory/9.jpg'),
  require('./../../assets/memory/10.jpg'),
  require('./../../assets/memory/11.jpg'),
  require('./../../assets/memory/12.jpg'),
  require('./../../assets/memory/13.jpg'),
  require('./../../assets/memory/14.jpg'),
  require('./../../assets/memory/15.jpg'),
  require('./../../assets/memory/16.jpg'),
  require('./../../assets/memory/17.jpg'),
  require('./../../assets/memory/18.jpg'),
  require('./../../assets/memory/19.jpg'),
  require('./../../assets/memory/20.jpg'),
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Memories</Text>
        <Text style={styles.subHeaderText}>Have a look at how spectacular the previous editions were!</Text>
      </View>
      <View style={styles.imageGrid}>
        {imageSources.map((source, index) => (
          <Image key={index} style={styles.image} source={source} />
        ))}
      </View>
      <FooterComponent/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:15
  },
  header: {
    padding: 20,
    backgroundColor: '#FFDAB9', // Light peach background color
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6347', // Tomato color
  },
  subHeaderText: {
    fontSize: 16,
    color: '#FF6347', // Tomato color
    marginTop: 5,
    textAlign: 'center',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 185,
    height: 150,
    margin: 8,
    borderRadius:10,
    
  },
});
