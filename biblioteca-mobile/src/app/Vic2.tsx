import { StyleSheet, Text, View } from 'react-native';

export default function Vic2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
     alignItems: 'center',
      backgroundColor: '#8B9CAC' },
     title: { fontSize: 22, fontWeight: 'bold' },

})

  