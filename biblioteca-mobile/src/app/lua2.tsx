import { StyleSheet, Text, View } from 'react-native';

export default function Lua2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página 2: Lua 2 ✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold' },
});