import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.Alineacion}>
      <Text style={styles.Titulo2}>Bienvenido</Text>
      <Text style={styles.Titulo}>REGISTRARSE</Text>
      <TextInput style={styles.Textos} placeholder="Nombre" placeholderTextColor="black" />
      <TextInput style={styles.Textos} placeholder="Correo electrónico" placeholderTextColor="black" />
      <TextInput style={styles.Textos} placeholder="Contraseña" placeholderTextColor="black" secureTextEntry />
      <TextInput style={styles.Textos} placeholder="Confirme su contraseña" placeholderTextColor="blacka" secureTextEntry />
      <TouchableOpacity style={styles.FondoBoton}>
        <Text style={styles.BotonRT}>Registrarse</Text>
      </TouchableOpacity>
      <Text
        style={{ color: 'blue' }}
        onPress={() => navigation.navigate('Login')}
      >
        ¿Ya tienes una cuenta? Inicia aquí.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    Fondo: {
        flex: 1,
        resizeMode: 'cover',
    },
    Titulo2: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 60,
        color: 'black',
    },
    Titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 60,
        color: 'black',
    },
    Alineacion: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    Textos: {
        width: '80%',
        height: 50,
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#140029',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    FondoBoton: {
        backgroundColor: "black",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    BotonRT: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
    },
});