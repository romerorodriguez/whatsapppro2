import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.alineacion}>
      <Text style={styles.Titulo2}>Bienvenido</Text>
      <Text style={styles.Titulo}>Inicia Sesión</Text>
      <TextInput style={styles.textos} placeholder="Correo electrónico" placeholderTextColor="black" />
      <TextInput style={styles.textos} placeholder="Contraseña" placeholderTextColor="black" secureTextEntry />
      <TouchableOpacity style={styles.FondoBoton}>
        <Text style={styles.Boton}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Text
        style={{ color: 'blue' }}
        onPress={() => navigation.navigate('Register')}
      >
        ¿No tienes una cuenta? Crea una.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Fondo: {
    flex: 1,
    resizeMode: "cover",
  },
  Titulo2: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 60,
    color: 'black',
  },
  Titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 60,
    color: "black",
  },
  textos: {
    width: "80%",
    height: 50,
    borderColor: "violet",
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#140029",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  alineacion: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  FondoBoton: {
    backgroundColor: "#35517e",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  Boton: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});