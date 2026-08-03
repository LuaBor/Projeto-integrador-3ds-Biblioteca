          import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Lua2Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.push('/vic')}
        >
          <Text style={styles.buttonText}>CADASTRAR LIVRO</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.push('/vic2')}
        >
          <Text style={styles.buttonText}>EMPRÉSTIMO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#8b9cac', 
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '400',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    height: '90%',
    backgroundColor: '#ffffff', 
    borderRadius: 24, 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100, 
    padding: 24,
  },
  button: {
    width: '80%',
    height: 65,
    backgroundColor: '#8b9cac', 
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },
});