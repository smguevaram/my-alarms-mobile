import React from "react";
import {StyleSheet, View} from "react-native";
import {Appbar, Avatar, Button, Text} from "react-native-paper";

export default function ReminderDetailScreen({ route, navigation }) {
    const {reminder} = route.params || {};

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="My Alarms" />
            </Appbar.Header>
            <View style={styles.content}>
                <View style={styles.avatarContainer}>
                    <Avatar.Text
                        size={50}
                        label={reminder?.name?.charAt(0) || "R"}
                        style={{ backgroundColor: "#D0D0D0" }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{reminder?.name}</Text>
                        <Text style={styles.subtitle}>Recordatorio</Text>
                    </View>
                </View>
                <Text style={styles.infoText}>{reminder?.time}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        mode="outlined"
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                        labelStyle={{ color: "black" }}
                    >
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
    buttonContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    backButton: {
        borderColor: "black",
        borderWidth: 1,
        width: "30%",
    },
});
