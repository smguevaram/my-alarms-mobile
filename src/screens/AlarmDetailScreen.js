import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Avatar, Appbar, BottomNavigation } from "react-native-paper";

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
          <Avatar.Text size={50} label={alarm.name.charAt(0)} style={{ backgroundColor: '#D0D0D0' }}/>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{alarm.name}</Text>
            <Text style={styles.subtitle}>Medicamento</Text>
          </View>
        </View>

        <Text style={styles.infoText}>Hora: <Text style={styles.boldText}>{alarm.time}</Text></Text>
        <Text style={styles.infoText}>Periodicidad: <Text style={styles.boldText}>{alarm.frequency}</Text></Text>

        <View style={styles.buttonContainer}>
          <Button mode="outlined" onPress={() => navigation.goBack()} style={styles.backButton} labelStyle={{ color: "black" }} >
            Volver
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
    alignItems: "left",
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
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  backButton: {
    borderColor: "black",
    borderWidth: 1,
    width: '30%',
  },
});
