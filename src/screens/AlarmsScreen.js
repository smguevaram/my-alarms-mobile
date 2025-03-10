import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Appbar, Avatar, Button, Card, Text} from "react-native-paper";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function AlarmsScreen({ navigation }) {
  const [alarms, setAlarms] = useState([
    {id: "1", name: "Acetaminofén 500 mg", time: "12:00 PM", frequency: "Cada 8 horas", type: "Alarma"},
  ]);
  const reminders = [
    { id: "2", name: "Medicina General", time: "Cita Médico 10/02/2025", type: "Recordatorio" },
  ];

  return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="My Alarms"/>
        </Appbar.Header>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Sección de Alarmas */}
          <Text style={styles.sectionTitle}>Alarma</Text>
          {alarms.map((alarm) => (
              <Card key={alarm.id} style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <Avatar.Text size={50} label="A" style={{backgroundColor: "#D0D0D0"}}/>
                  <View style={styles.textContainer}>
                    <Text variant="titleMedium">{alarm.name}</Text>
                    <Text variant="bodySmall">Medicamento {alarm.time}</Text>
                  </View>
                </Card.Content>
                <Card.Actions style={styles.buttonContainer}>
                  <Button
                      mode="contained-tonal"
                      onPress={() => navigation.navigate("AlarmDetail", {alarm})}
                      style={[styles.actionButton, styles.viewButton]}
                      icon={() => <MaterialCommunityIcons name="magnify" size={16} color="white"/>}
                      labelStyle={{color: "white"}}
                  >
                    Ver Más
                  </Button>
                  <Button
                      mode="contained-tonal"
                      onPress={() => navigation.navigate("AlarmEdit", {alarm})}
                      style={[styles.actionButton, styles.editButton]}
                      icon={() => <MaterialCommunityIcons name="pencil" size={16} color="black"/>}
                  >
                    Editar
                  </Button>
                  <Button
                      mode="contained-tonal"
                      onPress={() => navigation.navigate("AlarmDelete", {alarm})}
                      style={[styles.actionButton, styles.deleteButton]}
                      icon={() => <MaterialCommunityIcons name="trash-can-outline" size={16} color="white"/>}
                      labelStyle={{color: "white"}}
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
                  <Avatar.Text size={50} label="M" style={{backgroundColor: "#D0D0D0"}}/>
                  <View style={styles.textContainer}>
                    <Text variant="titleMedium">{reminder.name}</Text>
                    <Text variant="bodySmall">{reminder.time}</Text>
                  </View>
                </Card.Content>
                <Card.Actions style={styles.buttonContainer}>
                  <Button
                      mode="contained-tonal"
                      onPress={() => navigation.navigate("ReminderDetail", {reminder})}
                      style={[styles.actionButton, styles.viewButton]}
                      icon={() => <MaterialCommunityIcons name="magnify" size={16} color="white"/>}
                      labelStyle={{color: "white"}}
                  >
                    Ver Más
                  </Button>
                  <Button
                      mode="contained-tonal"
                      onPress={() => navigation.navigate("ReminderEdit", {reminder})}
                      style={[styles.actionButton, styles.editButton]}
                      icon={() => <MaterialCommunityIcons name="pencil" size={16} color="black"/>}
                  >
                    Editar
                  </Button>
                  <Button
                      mode="contained-tonal"
                      onPress={() => navigation.navigate("ReminderDelete", {reminder})}
                      style={[styles.actionButton, styles.deleteButton]}
                      icon={() => <MaterialCommunityIcons name="trash-can-outline" size={16} color="white"/>}
                      labelStyle={{color: "white"}}
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
