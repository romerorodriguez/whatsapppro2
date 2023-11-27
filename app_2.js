import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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

/*const styles = StyleSheet.create({
  container: {
    "llave": "valor", 
    "backgroundColor": "#FFF",
    "color": "#000"
  },
  title: {
    "llave": "valor", 
    "backgroundColor": "#FFF",
    "color": "#000"
  }
  })