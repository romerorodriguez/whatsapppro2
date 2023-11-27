import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Login(props) {
    const {navigation}= props; 
    const goToRegister= () => {
        navigation.navigate("Registro");
    }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            position: "absolute",
            fontSize: 48,
            fontWeight: "bold",
          }}
        >
          Regístrate
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Correo Electrónico</Text>
          <TextInput
            keyboardType="email-address" 
            returnKeyType="next" 
            placeholder="Tu correo electrónico"
          />
          <View style={{ height: 30 }} />
          <Text style={styles.title}>Contraseña</Text>
          <TextInput
            keyboardType="default" 
            returnKeyType="next" 
            placeholder="Tu contraseña"
            secureTextEntry={true}
          />
          <Text
            style={[
              styles.title,
              {
                color: "#000",
                textAlign: "right",
              },
            ]}
          >
            ¿Olvidaste tu contraseña?
          </Text>
          <View style={{ height: 30 }} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.noAccount}>No tienes una cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 40,
    flex: 2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30, 
    justifyContent: "space-between"
  }
});
