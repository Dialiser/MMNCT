import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const { width: screenWidth } = Dimensions.get('window'); // Get screen width

export default function Sponsors() {
  return (
    <View style={styles.container}>
      {/* Blue background for title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Our Proud Sponsors</Text>
      </View>
      
      {/* White background for images */}
      <ScrollView 
        horizontal={true} 
        pagingEnabled={true} // Enables snap-to-screen behavior
        showsHorizontalScrollIndicator={false} 
        style={styles.scrollContainer}
      >
        <Image style={styles.image} source={require('./../assets/images/202.jpg')} />
        <Image style={styles.image} source={require('./../assets/images/201.jpg')} />
         
        {/* Add more images as needed */}

      </ScrollView>

      <Text style={{fontSize:35,textAlign:'center',}}>Want to Sponsor us?</Text>


      <TouchableOpacity style={{}}>

        <Text style={{fontSize:35,textAlign:'center',borderRadius:10,}}>Click here!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  titleContainer: {
    backgroundColor: 'blue',
    paddingVertical: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',  
    marginBottom:8,
    marginTop:5
  },
  image: {
    width: screenWidth,   
    height: 400,           
    resizeMode: 'cover',
  },
});
