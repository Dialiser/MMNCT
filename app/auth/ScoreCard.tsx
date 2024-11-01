import FooterComponent from '@/Componets/FooterComponent';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const App = () => {
  // Define states for the scorecard
  const [score, setScore] = useState('BAN 49/5 (21.1)');
  const [session, setSession] = useState('Day 1: 1st Session');
  const [batters, setBatters] = useState([
    { name: 'Mehidy Hasan Miraz *', runs: 4, balls: 6, fours: 1, sixes: 0, sr: 66.67 },
    { name: 'Mahmudul Hasan Joy', runs: 15, balls: 74, fours: 1, sixes: 0, sr: 20.27 }
  ]);
  const [bowlers, setBowlers] = useState([
    { name: 'Wiaan Mulder *', overs: 6.1, maidens: 3, runs: 17, wickets: 3, eco: 2.80 },
    { name: 'Keshav Maharaj', overs: 7, maidens: 2, runs: 12, wickets: 0, eco: 1.70 }
  ]);
  const [keyStats, setKeyStats] = useState({
    partnership: '4(12)',
    lastWkt: 'Litton Das c Tristan Stubbs b Rabada 1(13) - 45/5 in 19.1 ov.',
    ovLeft: '68.5',
    last10Overs: '15 runs, 2 wkts',
    toss: 'Bangladesh (Batting)'
  });
  const [commentary, setCommentary] = useState('21.1 Wiaan Mulder to Mehidy Hasan Miraz, no run');
  const [recent, setRecent] = useState('... 0 0 0 4 0 | 0 0 0 0 0 | 0 0');
  const [overSummary, setOverSummary] = useState({
    runs: '21 Runs Scored: 0',
    score: 'Score after 21 overs BAN 49-5',
    batsmen: 'Mahmudul Hasan Joy 15(74) Mehidy Hasan Miraz 4(5)',
    bowler: 'Keshav Maharaj 7-2-12-0'
  });

  // Placeholder function for live updates (this could be an API call)
  const fetchLiveData = () => {
    // Logic to fetch and update live data goes here
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLiveData();
    }, 10000); // Fetch live data every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bangladesh vs South Africa, 1st Test - Live Cricket Score, Commentary</Text>
      <Text style={styles.subtitle}>Series: South Africa tour of Bangladesh, 2024</Text>
      <Text style={styles.subtitle}>Venue: Shere Bangla National Stadium, Dhaka</Text>
      <Text style={styles.subtitle}>Date & Time: </Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.session}>{session}</Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.header}>Batter</Text>
          <Text style={styles.header}>R</Text>
          <Text style={styles.header}>B</Text>
          <Text style={styles.header}>4s</Text>
          <Text style={styles.header}>6s</Text>
          <Text style={styles.header}>SR</Text>
        </View>
        {batters.map((batter, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{batter.name}</Text>
            <Text style={styles.cell}>{batter.runs}</Text>
            <Text style={styles.cell}>{batter.balls}</Text>
            <Text style={styles.cell}>{batter.fours}</Text>
            <Text style={styles.cell}>{batter.sixes}</Text>
            <Text style={styles.cell}>{batter.sr}</Text>
          </View>
        ))}
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.header}>Bowler</Text>
          <Text style={styles.header}>O</Text>
          <Text style={styles.header}>M</Text>
          <Text style={styles.header}>R</Text>
          <Text style={styles.header}>W</Text>
          <Text style={styles.header}>ECO</Text>
        </View>
        {bowlers.map((bowler, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{bowler.name}</Text>
            <Text style={styles.cell}>{bowler.overs}</Text>
            <Text style={styles.cell}>{bowler.maidens}</Text>
            <Text style={styles.cell}>{bowler.runs}</Text>
            <Text style={styles.cell}>{bowler.wickets}</Text>
            <Text style={styles.cell}>{bowler.eco}</Text>
          </View>
        ))}
      </View>

       

      

      <View style={styles.recentContainer}>
        <Text style={styles.recentText}>Recent: {recent}</Text>
      </View>

     

      <Button title="Update Score" onPress={fetchLiveData} />

       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop:15
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  session: {
    fontSize: 16,
    color: '#666',
  },
  tableContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '16%',
    textAlign: 'center',
  },
  cell: {
    fontSize: 14,
    width: '16%',
    textAlign: 'center',
  },
  keyStatsContainer: {
    marginBottom: 20,
  },
  keyStatsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  keyStat: {
    fontSize: 14,
    marginBottom: 5,
  },
  commentaryContainer: {
    marginBottom: 20,
  },
  commentaryHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentaryText: {
    fontSize: 14,
  },
  recentContainer: {
    marginBottom: 20,
  },
  recentText: {
    fontSize: 14,
  },
  overSummaryContainer: {
    marginBottom: 20,
  },
  overSummaryHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overSummaryText: {
    fontSize: 14,
  },
});

export default App;


// const fetchLiveData = async () => {
//     try {
//       const response = await fetch('YOUR_API_ENDPOINT');
//       const data = await response.json();
//       // Update state with fetched data
//       setScore(data.score);
//       setSession(data.session);
//       setBatters(data.batters);
//       setBowlers(data.bowlers);
//       setKeyStats(data.keyStats);
//       setCommentary(data.commentary);
//       setRecent(data.recent);
//       setOverSummary(data.overSummary);
//     } catch (error) {
//       console.error('Error fetching live data:', error);
//     }
//   };
  