import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        {/* Título */}
        <Text variant="headlineLarge" style={styles.title}>
          My Alarms
        </Text>

        {/* Imagen de bienvenida */}
        <Image source={require("../../assets/home.png")} style={styles.image} />

        {/* Botón de Google */}
        <Button
            mode="contained"
            onPress={() => navigation.navigate("PrivacyPolicy")}
            style={styles.googleButton}
            icon={() => <MaterialCommunityIcons name="google" size={20} color="white" />}
        >
          Iniciar con Google
        </Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
  googleButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});
