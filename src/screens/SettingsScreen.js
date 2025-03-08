import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {Appbar, Button, RadioButton, Text} from "react-native-paper";

export default function SettingsScreen({navigation}) {
    const [fontSize, setFontSize] = useState("Grande");
    const [sound, setSound] = useState("Default");

    const handleSave = () => {
        console.log("Guardar configuración:", {fontSize, sound});
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="My Alarms"/>
            </Appbar.Header>
            <View style={styles.content}>
                <Text style={styles.title}>Tamaño de fuente</Text>
                <RadioButton.Group onValueChange={(newValue) => setFontSize(newValue)} value={fontSize}>
                    <View style={styles.row}>
                        <RadioButton value="Grande"/>
                        <Text>Grande</Text>
                    </View>
                    <View style={styles.row}>
                        <RadioButton value="Extragrande"/>
                        <Text>Extragrande</Text>
                    </View>
                </RadioButton.Group>
                <Text style={[styles.title, {marginTop: 30}]}>Tonos</Text>
                <RadioButton.Group onValueChange={(newValue) => setSound(newValue)} value={sound}>
                    <View style={styles.row}>
                        <RadioButton value="Default"/>
                        <Text>Default</Text>
                    </View>
                    <View style={styles.row}>
                        <RadioButton value="Jazz"/>
                        <Text>Jazz</Text>
                    </View>
                    <View style={styles.row}>
                        <RadioButton value="Energía"/>
                        <Text>Energía</Text>
                    </View>
                </RadioButton.Group>
                <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
                    Guardar
                </Button>
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
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    saveButton: {
        marginTop: 30,
        backgroundColor: "#007BFF",
    },
});
