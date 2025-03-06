import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, Text, Button, Avatar, Appbar, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AlarmsScreen({ navigation }) {
  const alarms = [
    { id: "1", name: "Acetaminofén 500 mg", time: "12:00 PM", type: "Alarma" },
  ];

  const reminders = [
    { id: "2", name: "Medicina General", time: "Cita Médico 10/02/2025", type: "Recordatorio" },
  ];

  return (
    <View style={styles.container}>
      {/* Barra de navegación */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Alarms" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Sección de Alarmas */}
        <Text style={styles.sectionTitle}>Alarma</Text>
        {alarms.map((alarm) => (
          <Card key={alarm.id} style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Text size={50} label="A" style={{ backgroundColor: '#D0D0D0' }} />
              <View style={styles.textContainer}>
                <Text variant="titleMedium">{alarm.name}</Text>
                <Text variant="bodySmall">Medicamento {alarm.time}</Text>
              </View>
            </Card.Content>
            <Divider />
            <Card.Actions style={styles.buttonContainer}>
              <Button
                mode="contained-tonal"
                onPress={() => navigation.navigate("AlarmDetail", { alarm })}
                style={[styles.actionButton, styles.viewButton]}
                icon={() => <MaterialCommunityIcons name="eye" size={16} color="white" />}
              >
                Ver Más
              </Button>
              <Button
                mode="contained-tonal"
                onPress={() => navigation.navigate("AlarmEdit", { alarm })}
                style={[styles.actionButton, styles.editButton]}
                icon={() => <MaterialCommunityIcons name="pencil" size={16} color="black" />}
              >
                Editar
              </Button>
              <Button
                mode="contained-tonal"
                onPress={() => console.log("Eliminar")}
                style={[styles.actionButton, styles.deleteButton]}
                icon={() => <MaterialCommunityIcons name="delete" size={16} color="white" />}
              >
                Borrar
              </Button>
            </Card.Actions>
          </Card>
        ))}

        {/* Sección de Recordatorios */}
        <Text style={styles.sectionTitle}>Recordatorio</Text>
        {reminders.map((reminder) => (
          <Card key={reminder.id} style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Text size={50} label="M" style={{ backgroundColor: '#D0D0D0' }} />
              <View style={styles.textContainer}>
                <Text variant="titleMedium">{reminder.name}</Text>
                <Text variant="bodySmall">{reminder.time}</Text>
              </View>
            </Card.Content>
            <Divider />
            <Card.Actions style={styles.buttonContainer}>
              <Button
                mode="contained-tonal"
                onPress={() => console.log("Ver Más")}
                style={[styles.actionButton, styles.viewButton]}
                icon={() => <MaterialCommunityIcons name="eye" size={16} color="white" />}
              >
                Ver Más
              </Button>
              <Button
                mode="contained-tonal"
                onPress={() => console.log("Editar")}
                style={[styles.actionButton, styles.editButton]}
                icon={() => <MaterialCommunityIcons name="pencil" size={16} color="black" />}
              >
                Editar
              </Button>
              <Button
                mode="contained-tonal"
                onPress={() => console.log("Eliminar")}
                style={[styles.actionButton, styles.deleteButton]}
                icon={() => <MaterialCommunityIcons name="delete" size={16} color="white" />}
              >
                Borrar
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  appbar: {
    backgroundColor: "white",
    elevation: 0,
  },
  scrollContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "black",
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  buttonContainer: {
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  viewButton: {
    backgroundColor: "#007AFF",
  },
  editButton: {
    backgroundColor: "#FFCC00",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
  },
});

