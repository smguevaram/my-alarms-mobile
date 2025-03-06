import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Avatar, Appbar } from "react-native-paper";

export default function AlarmDetailScreen({ route, navigation }) {
  const { alarm } = route.params;

  return (
    <View style={styles.container}>
      {/* Barra de navegación superior */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Alarms" />
      </Appbar.Header>

      {/* Contenido */}
      <View style={styles.content}>
        {/* Avatar y título */}
        <View style={styles.avatarContainer}>
          <Avatar.Text size={50} label="A" />
          <View style={styles.textContainer}>
            <Text variant="titleMedium">{alarm.name}</Text>
            <Text variant="bodySmall">Medicamento</Text>
          </View>
        </View>

        {/* Información de la alarma */}
        <Text style={styles.infoText}>Hora: <Text style={styles.boldText}>{alarm.time}</Text></Text>
        <Text style={styles.infoText}>Periodicidad: <Text style={styles.boldText}>{alarm.frequency}</Text></Text>

        {/* Botón de volver */}
        <Button mode="outlined" onPress={() => navigation.goBack()} style={styles.backButton}>
          Volver
        </Button>
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
    alignItems: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
  },
});
