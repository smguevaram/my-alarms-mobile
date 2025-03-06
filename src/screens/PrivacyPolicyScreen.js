import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Dialog, Portal, IconButton } from "react-native-paper";

export default function PrivacyPolicyScreen({ navigation }) {
  const [visible, setVisible] = useState(true);

  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
          {/* Ícono en la parte superior */}
          <IconButton icon="file-document-outline" size={30} style={styles.icon} />
          
          <Dialog.Title style={styles.title}>Políticas de privacidad</Dialog.Title>

          <Dialog.Content>
            <Text style={styles.contentText}>
              Al hacer clic en <Text style={styles.boldText}>"Permitir"</Text>, confirmas que
              has leído y aceptas nuestra Política de Privacidad, donde protegemos tu
              información y usamos datos solo para mejorar tu experiencia en <Text style={styles.boldText}>My Alarms</Text>.
            </Text>
          </Dialog.Content>

          <Dialog.Actions style={styles.actions}>
            <Button textColor="#007AFF" onPress={() => { hideDialog(); navigation.navigate("MainTabs"); }}>
              Permitir
            </Button>
            <Button textColor="black" onPress={() => { hideDialog(); navigation.navigate("Home"); }}>
              No Permitir
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    borderRadius: 20, // Bordes redondeados del diálogo
    backgroundColor: 'white'
  },
  icon: {
    alignSelf: "center",
    marginTop: 10,
    color: "#666",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  contentText: {
    textAlign: "left",
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
  actions: {
    justifyContent: "right",
  },
});
