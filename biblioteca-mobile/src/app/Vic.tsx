import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function VicScreen() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [turmaAluno, setTurmaAluno] = useState('');
  const [nomedolivro,setNomedolivro] = useState ('');
  const [númerodolivro, setNúmerodolivro] = useState ('')
  const [datadoempréstimo,setDatadoempréstimo] = useState ('')
  const [datadedevolução,setDatadeDevolução] = useState ('')
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}></Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do Aluno:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do aluno..."
            placeholderTextColor="#888"
            value={nomeAluno}
            onChangeText={(texto) => setNomeAluno(texto)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Turma do Aluno:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 3º Ano A"
            placeholderTextColor="#888"
            value={turmaAluno}
            onChangeText={(texto) => setTurmaAluno(texto)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do Livro:</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex:Moby Dick"
          placeholderTextColor="#888"
          value={nomedolivro}
          onChangeText={(texto) => setNomedolivro (texto)}
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Número do Livro: </Text>
            <TextInput
            style={styles.input}
            placeholder= "Ex:810"
            placeholderTextColor="#888"
            value={númerodolivro}
            onChangeText={(texto) => setNúmerodolivro (texto)}
             />
          </View>
          <View style={styles.inputContainer}>
          <Text style={styles.label}> Data do empréstimo:</Text>
          <TextInput
          style={styles.input}
          placeholder="Ex:06/08/2026"
          placeholderTextColor="#888"
          value={datadoempréstimo}
          onChangeText={(texto) => setDatadoempréstimo (texto)}
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}> Data de Devolução:</Text>
            <TextInput
            style={styles.input}
            placeholder= "Ex: 12/08/2026"
            placeholderTextColor="#888"
            value={datadedevolução}
            onChangeText={(texto) => setDatadeDevolução (texto)}
            />
          </View>


        {(nomeAluno !== '' || turmaAluno !== '' || nomedolivro !== '' || númerodolivro !== '' ) && (
          <View style={styles.previewContainer}>
            <Text style={styles.previewText}>
              Aluno: <Text style={styles.bold}>{nomeAluno || '—'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Turma: <Text style={styles.bold}>{turmaAluno || '—'}</Text>
            </Text>
            <Text style={styles.previewText}>
            Livro: <Text style={styles.bold}>{nomedolivro || '—' } </Text>
            </Text>
            <Text style={styles.previewText}>
              Número: <Text style={styles.bold}>{númerodolivro  || '—' }</Text>
            </Text>
            <Text style={styles.previewText}>
              Data: <Text style={styles.bold}>{datadoempréstimo || '—'}</Text>
            </Text>
            <Text style={styles.previewText}>
              Devolução: <Text style={styles.bold}>{datadedevolução  || '—' } </Text>
            </Text>


              
              
          </View>
        )}
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
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  previewContainer: {
    marginTop: 10,
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
    color: '#007AFF',
  },
});