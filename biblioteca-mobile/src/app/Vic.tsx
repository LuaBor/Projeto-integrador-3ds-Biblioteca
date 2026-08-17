import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VicScreen() {
  const router = useRouter();

  const [nomeAluno, setNomeAluno] = useState('');
  const [turmaAluno, setTurmaAluno] = useState('');
  const [nomedolivro, setNomedolivro] = useState('');
  const [númerodolivro, setNúmerodolivro] = useState('');
  const [datadoempréstimo, setDatadoempréstimo] = useState('');
  const [datadedevolução, setDatadeDevolução] = useState('');

  const [erros, setErros] = useState<{ [key: string]: boolean }>({});

  const inputTurmaRef = useRef<TextInput>(null);
  const inputLivroRef = useRef<TextInput>(null);
  const inputNumeroRef = useRef<TextInput>(null);
  const inputEmprestimoRef = useRef<TextInput>(null);
  const inputDevolucaoRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    const novosErros = {
      nomeAluno: !nomeAluno.trim(),
      turmaAluno: !turmaAluno.trim(),
      nomedolivro: !nomedolivro.trim(),
      númerodolivro: !númerodolivro.trim(),
      datadoempréstimo: !datadoempréstimo.trim(),
      datadedevolução: !datadedevolução.trim(),
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
      alert('Empréstimo finalizado com sucesso!');
    } else {
      Alert.alert('Sucesso', 'Empréstimo finalizado com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do Aluno:</Text>
          <TextInput
            style={[styles.input, erros.nomeAluno && styles.inputError]}
            placeholder="Digite o nome do aluno..."
            placeholderTextColor="#888"
            value={nomeAluno}
            onChangeText={(texto) => {
              setNomeAluno(texto);
              if (erros.nomeAluno) setErros({ ...erros, nomeAluno: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputTurmaRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Turma do Aluno:</Text>
          <TextInput
            ref={inputTurmaRef}
            style={[styles.input, erros.turmaAluno && styles.inputError]}
            placeholder="Ex: 3º Ano A"
            placeholderTextColor="#888"
            value={turmaAluno}
            onChangeText={(texto) => {
              setTurmaAluno(texto);
              if (erros.turmaAluno) setErros({ ...erros, turmaAluno: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputLivroRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do Livro:</Text>
          <TextInput
            ref={inputLivroRef}
            style={[styles.input, erros.nomedolivro && styles.inputError]}
            placeholder="Ex: Moby Dick"
            placeholderTextColor="#888"
            value={nomedolivro}
            onChangeText={(texto) => {
              setNomedolivro(texto);
              if (erros.nomedolivro) setErros({ ...erros, nomedolivro: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputNumeroRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número do Livro:</Text>
          <TextInput
            ref={inputNumeroRef}
            style={[styles.input, erros.númerodolivro && styles.inputError]}
            placeholder="Ex: 810"
            placeholderTextColor="#888"
            value={númerodolivro}
            onChangeText={(texto) => {
              setNúmerodolivro(texto);
              if (erros.númerodolivro) setErros({ ...erros, númerodolivro: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputEmprestimoRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data do empréstimo:</Text>
          <TextInput
            ref={inputEmprestimoRef}
            style={[styles.input, erros.datadoempréstimo && styles.inputError]}
            placeholder="Ex: 06/08/2026"
            placeholderTextColor="#888"
            value={datadoempréstimo}
            onChangeText={(texto) => {
              setDatadoempréstimo(texto);
              if (erros.datadoempréstimo) setErros({ ...erros, datadoempréstimo: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputDevolucaoRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de Devolução:</Text>
          <TextInput
            ref={inputDevolucaoRef}
            style={[styles.input, erros.datadedevolução && styles.inputError]}
            placeholder="Ex: 12/08/2026"
            placeholderTextColor="#888"
            value={datadedevolução}
            onChangeText={(texto) => {
              setDatadeDevolução(texto);
              if (erros.datadedevolução) setErros({ ...erros, datadedevolução: false });
            }}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
          />
        </View>

        {(nomeAluno !== '' || turmaAluno !== '' || nomedolivro !== '' || númerodolivro !== '') && (
          <View style={styles.previewContainer}>
            <Text style={styles.previewText}>
              Aluno: <Text style={styles.bold}>{nomeAluno || '-'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Turma: <Text style={styles.bold}>{turmaAluno || '-'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Livro: <Text style={styles.bold}>{nomedolivro || '-'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Número: <Text style={styles.bold}>{númerodolivro || '-'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Data: <Text style={styles.bold}>{datadoempréstimo || '-'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Devolução: <Text style={styles.bold}>{datadedevolução || '-'}</Text>
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>EMPRÉSTIMO</Text>
      </TouchableOpacity>

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