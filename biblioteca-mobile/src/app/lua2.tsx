import { StyleSheet, Text, View } from 'react-native';

export default function Lua2Screen() {
  return (
    <View style={styles.container}>
         <View style={styles.card}>
           <Text style={styles.title}>Página 2: Lua 2 ✨</Text>
         </View>
       </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(184, 203, 210)' },
  title: { fontSize: 22, fontWeight: 'bold' },
  card: {
    width: '90%',
    maxWidth: 500,
    padding: 24,
    backgroundColor: '#e1d5d5',
    borderRadius: 12,
    alignItems: 'center',
  },
});