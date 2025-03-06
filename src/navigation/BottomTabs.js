import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AlarmsScreen from "../screens/AlarmsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={AlarmsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Nueva alarma"
        component={AlarmsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="pencil" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Crear recordatorio"
        component={AlarmsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bell" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={AlarmsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cog" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
