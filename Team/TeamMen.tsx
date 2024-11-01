import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, FlatList } from 'react-native';

const mensTeams = [
  {
    name: 'IMMORTALS',
    category: 'M.Sc',
    logo: require('./../assets/Teamlogo/9.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
        ],
  },
  {
    name: 'SHAOLIN MONKS',
    category: 'FACULTY',
    logo: require('./../assets/Teamlogo/15.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'F1001' },
      { name: 'Player Two', admissionNumber: 'F1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'AVENGERS',
    category: 'PhD',
    logo: require('./../assets/Teamlogo/6.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'P1001' },
      { name: 'Player Two', admissionNumber: 'P1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'VENGEANCE',
    category: 'B.Tech III - A',
    logo: require('./../assets/Teamlogo/19.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'BTA1001' },
      { name: 'Player Two', admissionNumber: 'BTA1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'HERCULEANS',
    category: 'B.Tech III - B',
    logo: require('./../assets/Teamlogo/8.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'BTB1001' },
      { name: 'Player Two', admissionNumber: 'BTB1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'SCORPIONS',
    category: 'B.Tech IV - B',
    logo: require('./../assets/Teamlogo/14.jpg'),
    players: [
      { name: 'Ram', admissionNumber: 'BTIVB1001' },
      { name: 'Player Two', admissionNumber: 'BTIVB1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'SPARTANS',
    category: 'B.Tech IV - A',
    logo: require('./../assets/Teamlogo/16.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'BTIVA1001' },
      { name: 'Player Two', admissionNumber: 'BTIVA1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'KNIGHT TEMPLARS',
    category: 'B.Tech II - B',
    logo: require('./../assets/Teamlogo/10.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'BTIIB1001' },
      { name: 'Player Two', admissionNumber: 'BTIIB1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'ASSYRIANS',
    category: 'M.Tech II',
    logo: require('./../assets/Teamlogo/4.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'MTII1001' },
      { name: 'Player Two', admissionNumber: 'MTII1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'NINJAS',
    category: 'MESS',
    logo: require('./../assets/Teamlogo/11.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'MESS1001' },
      { name: 'Player Two', admissionNumber: 'MESS1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'VIKINGS',
    category: 'B.Tech II - A',
    logo: require('./../assets/Teamlogo/20.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'BTIIA1001' },
      { name: 'Player Two', admissionNumber: 'BTIIA1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'AMORITES',
    category: 'M.Tech I',
    logo: require('./../assets/Teamlogo/3.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'MTI1001' },
      { name: 'Player Two', admissionNumber: 'MTI1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'SUMERIANS',
    category: 'B.Tech I - A',
    logo: require('./../assets/Teamlogo/17.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'BTIA1001' },
      { name: 'Player Two', admissionNumber: 'BTIA1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'AKKADIANS',
    category: 'B.Tech I - B',
    logo: require('./../assets/Teamlogo/1.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'BTIB1001' },
      { name: 'Player Two', admissionNumber: 'BTIB1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'SAMURAI',
    category: 'LOCALITES',
    logo: require('./../assets/Teamlogo/13.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'LOC1001' },
      { name: 'Player Two', admissionNumber: 'LOC1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
];

const womensTeams = [
  {
    name: 'BEALONIANS',
    category: 'M.Sc',
    logo: require('./../assets/Teamlogo/7.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'WMSC1001' },
      { name: 'Player Two', admissionNumber: 'WMSC1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'VALKYRIES',
    category: 'M.Tech & PhD',
    logo: require('./../assets/Teamlogo/18.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'WMT1001' },
      { name: 'Player Two', admissionNumber: 'WMT1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'ATHENIANS',
    category: 'B.Tech III',
    logo: require('./../assets/Teamlogo/5.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'WBIII1001' },
      { name: 'Player Two', admissionNumber: 'WBIII1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'SAMARITANS',
    category: 'B.Tech II',
    logo: require('./../assets/Teamlogo/21.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'WBTII1001' },
      { name: 'Player Two', admissionNumber: 'WBTII1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'PARTHIANS',
    category: 'B.Tech I',
    logo: require('./../assets/Teamlogo/12.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'WBIII1001' },
      { name: 'Player Two', admissionNumber: 'WBIII1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
  {
    name: 'AMAZONS',
    category: 'B.Tech IV',
    logo: require('./../assets/Teamlogo/2.jpg'),
    players: [
      { name: 'Player One', admissionNumber: 'WBIV1001' },
      { name: 'Player Two', admissionNumber: 'WBIV1002' },
       { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      { name: 'Player Two', admissionNumber: 'M1002' },
      { name: 'Player One', admissionNumber: 'M1001' },
      
    ],
  },
];

const MensTeams = () => {
  const [selectedCategory, setSelectedCategory] = useState('Men');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = selectedCategory === 'Men' ? mensTeams : womensTeams;

  const openModal = (team) => {
    setSelectedTeam(team);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedTeam(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Men' && styles.selectedButton]}
          onPress={() => setSelectedCategory('Men')}
        >
          <Text style={styles.buttonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Women' && styles.selectedButton]}
          onPress={() => setSelectedCategory('Women')}
        >
          <Text style={styles.buttonText}>Women</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.teamList} showsHorizontalScrollIndicator={false}>
        {teams.map((team, index) => (
          <View key={index} style={styles.teamCard}>
            <Image source={team.logo} style={styles.teamLogo} />
            <Text style={styles.teamName}>{team.name}</Text>
            <Text style={styles.teamCategory}>{team.category}</Text>
            <TouchableOpacity style={styles.button} onPress={() => openModal(team)}>
              <Text style={styles.fullSquadButtonText}>Full squad</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedTeam?.name} Squad</Text>
          <FlatList
            data={selectedTeam?.players}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.playerCard}>
                <Text style={styles.playerName}>{item.name}</Text>
                <Text style={styles.playerAdmission}>{item.admissionNumber}</Text>
              </View>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
  },
  selectedButton: {
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  teamList: {
    flexDirection: 'row',
  },
  teamCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginRight: 12,
    width: 160,
    alignItems: 'center',
    elevation: 3,
  },
  teamLogo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  teamCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  fullSquadButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  playerCard: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  playerAdmission: {
    fontSize: 14,
    color: '#555',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MensTeams;
