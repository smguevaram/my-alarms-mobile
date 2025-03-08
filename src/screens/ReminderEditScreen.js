import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Appbar, Avatar, Button, Text, TextInput} from "react-native-paper";

export default function ReminderEditScreen({ route, navigation }) {
    const { reminder } = route.params || {};
    const [name, setName] = useState(reminder?.name || "Medicina General");
    const [time, setTime] = useState(reminder?.time || "Cita Médico 10/02/2025");

    const handleUpdate = () => {
        console.log("Actualizar recordatorio:", {name, time});
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="My Alarms" />
            </Appbar.Header>
            <View style={styles.content}>
                <View style={styles.avatarContainer}>
                    <Avatar.Text size={50} label="M" style={{ backgroundColor: "#D0D0D0" }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>Recordatorio</Text>
                    </View>
                </View>
                <TextInput
                    label="Nombre"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    label="Información"
                    value={time}
                    onChangeText={setTime}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        mode="outlined"
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                        labelStyle={{ color: "black" }}
                    >
                        Volver
                    </Button>
                    <Button
                        mode="contained"
                        onPress={handleUpdate}
                        style={styles.updateButton}
                    >
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
        marginTop: 20,
    },
    backButton: {
        borderColor: "black",
        borderWidth: 1,
        width: "40%",
        marginRight: 10,
    },
    updateButton: {
        backgroundColor: "#007BFF",
        width: "40%",
    },
});
