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
          <Avatar.Text size={50} label="A" />
          <View style={styles.textContainer}>
            <Text variant="titleMedium">{name}</Text>
            <Text variant="bodySmall">Medicamento</Text>
          </View>
        </View>

        {/* Campos de edición */}
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={setName}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Hora"
          value={time}
          onChangeText={setTime}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Periodicidad"
          value={frequency}
          onChangeText={setFrequency}
          mode="outlined"
          style={styles.input}
        />

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <Button mode="outlined" onPress={() => navigation.goBack()}>
            Volver
          </Button>
          <Button mode="contained" onPress={() => console.log("Alarma actualizada")} style={styles.updateButton}>
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
    backgroundColor: "white",
  },
  content: {
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
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  updateButton: {
    backgroundColor: "#007BFF",
  },
});
