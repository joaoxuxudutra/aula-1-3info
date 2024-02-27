import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>*etec prof milta gazeta*</Text>
      <Text style={styles.textoK}>3 Info</Text>
      <Text style={styles.risco}>Mocréia</Text>
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
  textoK: {
    fontStyle: 'italic',
  },
  risco: {
    textDecorationLine: 'line-through',
    fontSize:  18,
  },

});
