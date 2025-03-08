import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Appbar, Button, Text, TextInput} from "react-native-paper";

export default function NewAlarmScreen({ navigation }) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    const handleCreate = () => {
        console.log("Crear nueva alarma:", {name, time, date});
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="My Alarms" />
            </Appbar.Header>
            <View style={styles.content}>
                <Text style={styles.title}>Nueva Alarma</Text>
                <TextInput label="Nombre" value={name} onChangeText={setName} style={styles.input}/>
                <TextInput label="Hora" value={time} onChangeText={setTime} style={styles.input}/>
                <TextInput label="Fecha (opcional)" value={date} onChangeText={setDate} style={styles.input}/>
                <Button mode="contained" onPress={handleCreate}>
                    Crear
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: "bold",
    },
    input: {
        marginBottom: 15,
        backgroundColor: "#FFFFFF",
    },
});
