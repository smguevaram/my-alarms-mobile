import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Dialog, Portal, Text} from "react-native-paper";

export default function AlarmDeleteScreen({ route, navigation }) {
    const {alarm} = route.params || {};
    const [visible, setVisible] = React.useState(true);

    const hideDialog = () => {
        setVisible(false);
        navigation.goBack();
    };

    const handleDelete = () => {
        console.log("Eliminar alarma:", alarm?.id);
        hideDialog();
    };

    return (
        <View style={styles.container}>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Eliminar alarma</Dialog.Title>
                    <Dialog.Content>
                        <Text>¿Estás seguro de eliminar la alarma {alarm?.name}?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>No</Button>
                        <Button onPress={handleDelete}>Sí</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
