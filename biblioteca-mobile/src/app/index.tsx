import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LuaScreen() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const router = useRouter();

 const handleLogin = () => {
  if (!nome.trim() || !senha.trim() || !confirmacaoSenha.trim()) {
    alert('Preencha todos os campos obrigatórios!');
    return;
  }

  if (senha !== confirmacaoSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  router.push('/lua2');
};

  return (
    <View style={styles.container}>
  
      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor='#888'
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          placeholderTextColor='#888'
        />

        <Text style={styles.label}>Confirmação de senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmacaoSenha}
          onChangeText={setConfirmacaoSenha}
          placeholder="Confirme sua senha"
          placeholderTextColor='#888'
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
  <Text style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8B9CAC',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A5864',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    backgroundColor: '#F0F4F7',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
  width: '100%',
  maxWidth: 220,
  backgroundColor: '#6B7C8Cs',
  height: 50,                
  borderRadius: 25,        
  marginTop: 28,
  alignItems: 'center',
  justifyContent: 'center', 

  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.20,
  shadowRadius: 6,
  elevation: 4,
},
  buttonText: {
  color: '#FFFFFF',         
  fontSize: 16,
  fontWeight: 'bold',
  letterSpacing: 1.5 ,       
  userSelect: 'none',   
},
});