import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

// Initial data for points table, starting with all matches and stats set to 0
const initialTableData = [
  { id: '1', team: "IMMORTALS", matches: 0, wins: 0, losses: 0, ties: 0, points: 0, pct: 0 },
  { id: '2', team: "SHAOLIN MONKS", matches: 0, wins: 0, losses: 0, ties: 0, points: 0, pct: 0 },
  { id: '3', team: "AVENGERS", matches: 0, wins: 0, losses: 0, ties: 0, points: 0, pct: 0 },
  { id: '4', team: "VENGEANCE", matches: 0, wins: 0, losses: 0, ties: 0, points: 0, pct: 0 },
  { id: '5', team: "SCORPIONS", matches: 0, wins: 0, losses: 0, ties: 0, points: 0, pct: 0 },
  // Add other teams similarly...
];

const PointsTable = () => {
  const [tableData, setTableData] = useState(initialTableData);

  // Function to update the table for a specific team
  const updateTable = (teamId, newStats) => {
    const updatedTable = tableData.map(team =>
      team.id === teamId ? { ...team, ...newStats } : team
    );
    setTableData(updatedTable);
  };

  // Function to calculate PCT based on wins and matches
  const calculatePct = (wins, matches) => {
    return matches > 0 ? ((wins / matches) * 100).toFixed(2) : 0;
  };

  // Example update functions for all teams
  const updateImmortals = () => {
    const matches = 12, wins = 8, losses = 4, ties = 0, points = wins * 12; // Each win = 12 points
    const pct = calculatePct(wins, matches);
    updateTable('1', { matches, wins, losses, ties, points, pct });
  };

  const updateShaolinMonks = () => {
    const matches = 12, wins = 7, losses = 5, ties = 0, points = wins * 12;
    const pct = calculatePct(wins, matches);
    updateTable('2', { matches, wins, losses, ties, points, pct });
  };

  const updateAvengers = () => {
    const matches = 9, wins = 6, losses = 3, ties = 0, points = wins * 12;
    const pct = calculatePct(wins, matches);
    updateTable('3', { matches, wins, losses, ties, points, pct });
  };

  const updateVengeance = () => {
    const matches = 9, wins = 5, losses = 4, ties = 0, points = wins * 12;
    const pct = calculatePct(wins, matches);
    updateTable('4', { matches, wins, losses, ties, points, pct });
  };

  const updateScorpions = () => {
    const matches = 18, wins = 8, losses = 10, ties = 0, points = wins * 12;
    const pct = calculatePct(wins, matches);
    updateTable('5', { matches, wins, losses, ties, points, pct });
  };

  // Render each row in the table
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.team}</Text>
      <Text style={styles.cell}>{item.matches}</Text>
      <Text style={styles.cell}>{item.wins}</Text>
      <Text style={styles.cell}>{item.losses}</Text>
      <Text style={styles.cell}>{item.ties}</Text>
      <Text style={styles.cell}>{item.points}</Text>
      <Text style={styles.cell}>{item.pct}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MMNCT Points Table</Text>

      {/* Table Headers */}
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Team</Text>
        <Text style={styles.headerCell}>M</Text>
        <Text style={styles.headerCell}>W</Text>
        <Text style={styles.headerCell}>L</Text>
        <Text style={styles.headerCell}>T</Text>
        <Text style={styles.headerCell}>PTS</Text>
        <Text style={styles.headerCell}>PCT</Text>
      </View>

      {/* FlatList to render table rows */}
      <FlatList
        data={tableData}
        renderItem={renderRow}
        keyExtractor={item => item.id}
      />

      {/* Buttons to simulate updates for each team */}
      <Button title="Update Immortals Stats" onPress={updateImmortals} />
      <Button title="Update Shaolin Monks Stats" onPress={updateShaolinMonks} />
      <Button title="Update Avengers Stats" onPress={updateAvengers} />
      <Button title="Update Vengeance Stats" onPress={updateVengeance} />
      <Button title="Update Scorpions Stats" onPress={updateScorpions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', marginTop: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  headerRow: { flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#c8e1ff', paddingBottom: 10, marginBottom: 10 },
  headerCell: { flex: 1, fontWeight: 'bold', textAlign: 'center' },
  row: { flexDirection: 'row', paddingVertical: 10 },
  cell: { flex: 1, textAlign: 'center' },
});

export default PointsTable;
