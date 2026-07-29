import { StyleSheet, Text, View } from 'react-native';

export default function VicScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página 3: Vic 📚</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold' },
});