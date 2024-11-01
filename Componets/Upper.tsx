import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';

export default function MainFram() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              style={styles.menuIcon}
              source={require('./../assets/images/3.png')} // Replace with the correct path to your menu icon
            />
          </TouchableOpacity>

          <Image
            style={styles.mainImage}
            source={require('./../assets/images/2.png')} // Replace with the correct path to the uploaded image
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <View style={styles.navLinks}>
                <TouchableOpacity onPress={() => console.log('Fixture pressed')}>
                  <Text style={styles.navText}>Fixtures</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Point Table pressed')}>
                  <Text style={styles.navText}>Points Table</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Polls pressed')}>
                  <Text style={styles.navText}>Polls</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Stars pressed')}>
                  <Text style={styles.navText}>Stars</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Memories pressed')}>
                  <Text style={styles.navText}>Memories</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Organising Team pressed')}>
                  <Text style={styles.navText}>Organising Team</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Past Records pressed')}>
                  <Text style={styles.navText}>Past Records</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  menuIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 50,
  },
  mainImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 50,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#333',
  },
  navLinks: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 20,
    paddingLeft: 20,
  },
  navText: {
    fontSize: 18,
    color: 'black',
    marginVertical: 10,
  },
});
