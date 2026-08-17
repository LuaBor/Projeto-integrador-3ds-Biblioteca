import { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function VicScreen() {
  const [nomedolivro, setNomedolivro] = useState('');
  const [códigodolivro, setCódigodolivro] = useState('')
  const [sessão, setSessão] = useState ('')
  
  const [erros, setErros] = useState<{ [key: string]: boolean }>({});

  const inputLivroRef = useRef<TextInput>(null);
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
      Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert('Sucesso', 'Empréstimo registrado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}></Text>


        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do Livro:</Text>
          <TextInput
            ref={inputLivroRef}
            style={[styles.input, erros.nomedolivro && styles.inputError]}
            placeholder="Ex:Moby Dick"
            placeholderTextColor="#888"
            value={nomedolivro}
            onChangeText={(texto) => {
              setNomedolivro(texto);
              if (erros.nomedolivro) setErros({ ...erros, nomedolivro: false });
            }}
            returnKeyType="next"
            onSubmitEditing={() => inputLivroRef.current?.focus()}
            blurOnSubmit={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}> Código do Livro:</Text>
          <TextInput
          ref={inputCódigoRef}
          style={[styles.input,erros.códigodolivro && styles.inputError]}
          placeholder='813'
          placeholderTextColor="#888"
          value={códigodolivro}
          onChangeText={(texto) => {  
            setCódigodolivro(texto);
            if (erros.códigodolivro) setErros ({ ...erros, códigodolivro: false});
          }}
          returnKeyType="next"
          onSubmitEditing={() => inputCódigoRef.current?.focus()}
          blurOnSubmit={false}
         />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}> Sessão:</Text>
          <TextInput
         ref={inputSessãoRef}
         style={[styles.input,erros.Sessão && styles.inputError]}
         placeholder='Literatura americana'
         placeholderTextColor="#888"
         value={sessão}
         onChangeText={(texto) => {
          setSessão(texto);
          if (erros.Sessão) setErros ({ ...erros, sessão: false});
         }}
         returnKeyType="next"
         onSubmitEditing={() => inputSessãoRef.current?.focus()}
         blurOnSubmit={false}
         />
        </View>

        
        {( nomedolivro !== ''  ) && (
          <View style={styles.previewContainer}>
            <Text style={styles.previewText}>
              Livro: <Text style={styles.bold}>{nomedolivro || '-'}</Text>
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
});