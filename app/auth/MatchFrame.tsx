import { router } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const matches = [
    {
      series: '1st Test • South Africa tour of Bangladesh, 2024',
      matchType: 'Test',
      teams: [
        { name: 'BAN', score: '49-5', flag: '🇧🇩' },
        { name: 'RSA', score: '', flag: '🇿🇦' },
      ],
      status: 'Day 1: 1st Session',
      schedule: 'SCHEDULE',
    },
    {
      series: 'Final • ICC Womens T20 World Cup, 2024',
      matchType: 'T20I',
      teams: [
        { name: 'NZW', score: '158-5 (20)', flag: '🇳🇿' },
        { name: 'RSAW', score: '126-9 (20)', flag: '🇿🇦' },
      ],
      status: 'New Zealand Women won by 32 runs',
      schedule: 'FANTASY TABLE SCHEDULE',
    },
    {
      series: '1st Test • New Zealand tour of India, 2024',
      matchType: 'Test',
      teams: [
        { name: 'IND', score: '46 & 462', flag: '🇮🇳' },
        { name: 'NZ', score: '402 & 110-2', flag: '🇳🇿' },
      ],
      status: 'New Zealand won by 8 wkts',
      schedule: 'SCHEDULE',
    },
    {
      series: '1st ODI • West Indies tour of Sri Lanka, 2024',
      matchType: 'ODI',
      teams: [
        { name: 'WI', score: '185-4 (38.5)', flag: '🇱🇰' },
        { name: 'SL', score: '234-5 (45)', flag: '🇱🇰' },
      ],
      status: 'Sri Lanka won by 5 wkts (2nd innings)',
      schedule: 'FANTASY HANDBOOK',
    },
  ];

  const navigateToMatchDetails = (match) => {
    // Placeholder function for navigating to the match details screen.
    // This could be a navigation call if using React Navigation, e.g., `navigation.navigate('MatchDetails', { match })`.
    console.log('Navigate to details of:', match.series);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      {matches.map((match, index) => (
        <TouchableOpacity key={index} style={styles.matchCard} onPress={() => router.push('./auth/ScoreCard')}>
          <Text style={styles.series}>{match.series}</Text>
          <View style={styles.matchInfo}>
            {match.teams.map((team, idx) => (
              <View key={idx} style={styles.teamInfo}>
                <Text style={styles.teamFlag}>{team.flag}</Text>
                <Text style={styles.teamName}>{team.name}</Text>
                <Text style={styles.teamScore}>{team.score}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.status}>{match.status}</Text>
          <Text style={styles.schedule}>{match.schedule}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    flexDirection: 'row',
  },
  matchCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    width: 280,
    elevation: 2,
  },
  series: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  matchInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  teamInfo: {
    alignItems: 'center',
  },
  teamFlag: {
    fontSize: 24,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  teamScore: {
    fontSize: 16,
  },
  status: {
    color: 'red',
    marginBottom: 5,
  },
  schedule: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default App;
