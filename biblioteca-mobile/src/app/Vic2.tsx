import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VicScreen() {
  const router = useRouter();

  const [nomedolivro, setNomedolivro] = useState('');
  const [códigodolivro, setCódigodolivro] = useState('');
  const [sessão, setSessão] = useState('');

  const [erros, setErros] = useState<{ [key: string]: boolean }>({});

  const inputCódigoRef = useRef<TextInput>(null);
  const inputSessãoRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    const novosErros = {
      nomedolivro: !nomedolivro.trim(),
      códigodolivro: !códigodolivro.trim(),
      sessão: !sessão.trim(),
    };

    setErros(novosErros);

    const temErro = Object.values(novosErros).some((erro) => erro);

    if (temErro) {
      if (Platform.OS === 'web') {
        alert('Atenção: Por favor, preencha todos os campos obrigatórios.');
      } else {
        Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios.');
      }
      return;
    }

    if (Platform.OS === 'web') {
      alert('Cadastro realizado com sucesso!');
    } else {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do Livro:</Text>
          <TextInput
            style={[styles.input, erros.nomedolivro && styles.inputError]}
            placeholder="Ex: Moby Dick"
            placeholderTextColor="#888"
            value={nomedolivro}
            onChangeText={(texto) => {
              setNomedolivro(texto);
              if (erros.nomedolivro) setErros({ ...erros, nomedolivro: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputCódigoRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Código do Livro:</Text>
          <TextInput
            ref={inputCódigoRef}
            style={[styles.input, erros.códigodolivro && styles.inputError]}
            placeholder="813"
            placeholderTextColor="#888"
            value={códigodolivro}
            onChangeText={(texto) => {
              setCódigodolivro(texto);
              if (erros.códigodolivro) setErros({ ...erros, códigodolivro: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputSessãoRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sessão:</Text>
          <TextInput
            ref={inputSessãoRef}
            style={[styles.input, erros.sessão && styles.inputError]}
            placeholder="Literatura americana"
            placeholderTextColor="#888"
            value={sessão}
            onChangeText={(texto) => {
              setSessão(texto);
              if (erros.sessão) setErros({ ...erros, sessão: false });
            }}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
          />
        </View>

        {(nomedolivro !== '' || códigodolivro !== '' || sessão !== '') && (
          <View style={styles.previewContainer}>
            <Text style={styles.previewText}>
              Livro: <Text style={styles.bold}>{nomedolivro || '-'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Código: <Text style={styles.bold}>{códigodolivro || '-'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Sessão: <Text style={styles.bold}>{sessão || '-'}</Text>
            </Text>
          </View>
        )}
      </View>

      {/* Botão Principal */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      {/* Botão de Voltar Discreto */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/lua2')}
      >
        <Text style={styles.backButtonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b9cac',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  inputError: {
    borderColor: '#ff0000',
    borderWidth: 1.5,
  },
  previewContainer: {
    marginTop: 16,
    width: '100%',
    alignItems: 'flex-start',
  },
  previewText: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    width: '100%',
    maxWidth: 220,
    backgroundColor: '#6B7C8C',
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  backButton: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});