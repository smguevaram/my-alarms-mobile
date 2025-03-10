import React from "react";
import {StyleSheet, View} from "react-native";
import {MD3LightTheme as DefaultTheme, PaperProvider} from "react-native-paper";
import AppNavigator from "./navigation/AppNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#007AFF",
    secondary: "#007AFF",
    background: "#F2F2F7",
    surface: "#FFFFFF",
    onSurface: "#000000",
    onBackground: "#000000",
    onPrimary: "#FFFFFF",
    text: "#000000",
    error: "#FF3B30",
  },
};

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <AppNavigator/>
        </View>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
});
