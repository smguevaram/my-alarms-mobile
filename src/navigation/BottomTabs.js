import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AlarmsScreen from "../screens/AlarmsScreen";
import NewAlarmScreen from "../screens/NewAlarmScreen";
import NewReminderScreen from "../screens/NewReminderScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="MisAlarmas"
                component={AlarmsScreen}
                options={{
                    tabBarLabel: "Alarmas",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="NuevaAlarma"
                component={NewAlarmScreen}
                options={{
                    tabBarLabel: "Nueva alarma",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="pencil" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="NuevoRecordatorio"
                component={NewReminderScreen}
                options={{
                    tabBarLabel: "Nuevo recordatorio",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Ajustes"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Ajustes",
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="cog" color={color} size={size}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
