import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Avatar, Appbar } from "react-native-paper";

export default function AlarmEditScreen({ navigation }) {
  const [name, setName] = useState("Acetaminofén 500 mg");
  const [time, setTime] = useState("12:00 m");
  const [frequency, setFrequency] = useState("Cada 8 horas");

  return (
      <View style={styles.container}>
        {/* Barra de navegación superior */}
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="My Alarms" />
        </Appbar.Header>

        {/* Contenido de la pantalla */}
        <View style={styles.content}>
          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Avatar.Text size={50} label="A" style={{ backgroundColor: '#D0D0D0' }} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>Medicamento</Text>
            </View>
          </View>

          {/* Campos de edición */}
          <TextInput
              label="Nombre"
              value={name}
              onChangeText={setName}
              style={styles.input}
          />
          <TextInput
              label="Hora"
              value={time}
              onChangeText={setTime}
              style={styles.input}
          />
          <TextInput
              label="Periodicidad"
              value={frequency}
              onChangeText={setFrequency}
              style={styles.input}
          />

          {/* Botones */}
          <View style={styles.buttonContainer}>
            <Button mode="outlined" onPress={() => navigation.goBack()} style={styles.backButton} labelStyle={{ color: "black" }}>
              Volver
            </Button>
            <Button mode="contained" onPress={() => navigation.goBack()} style={styles.updateButton}>
              Actualizar
            </Button>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  input: {
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  backButton: {
    borderColor: "black",
    borderWidth: 1,
    width: '40%',
    marginRight: 10,
  },
  updateButton: {
    backgroundColor: "#007BFF",
    width: '40%',
  },
});