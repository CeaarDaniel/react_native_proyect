import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello word, this is the firs app usinf vscode spaces</Text>
      <Text>Para poder abrir esta aplicacion creada en vscode spaces hay que agregar
            un tunel, esto se hace con un comando de la cli de expo
         </Text>  
         <Text>
          el comando usa es: expo start --tunnel
      </Text>
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
