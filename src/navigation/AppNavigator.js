import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import AlarmDetail from "../screens/AlarmDetailScreen";
import AlarmEdit from "../screens/AlarmEditScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="AlarmDetail" component={AlarmDetail} />
        <Stack.Screen name="AlarmEdit" component={AlarmEdit} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
