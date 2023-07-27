import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [text, setText] = useState('');
   
  return (
    <View style={styles.container}>
      <Text>Hello word, this is the firs app usinf vscode spaces</Text>
      <Text>Para poder abrir esta aplicacion creada en vscode spaces hay que agregar
            un tunel, esto se hace con un comando de la cli de expo
         </Text>  
         <Text>
          el comando usa es: expo start --tunnel
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Escriba un texto"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
