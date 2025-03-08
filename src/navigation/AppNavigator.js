import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import AlarmDetail from "../screens/AlarmDetailScreen";
import AlarmEdit from "../screens/AlarmEditScreen";
import HomeScreen from "../screens/HomeScreen";
import BottomTabs from "./BottomTabs";
import AlarmDeleteScreen from "../screens/AlarmDeleteScreen";
import ReminderDetailScreen from "../screens/ReminderDetailScreen";
import ReminderEditScreen from "../screens/ReminderEditScreen";
import ReminderDeleteScreen from "../screens/ReminderDeleteScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}/>
                <Stack.Screen name="AlarmDetail" component={AlarmDetail}/>
                <Stack.Screen name="AlarmEdit" component={AlarmEdit}/>
                <Stack.Screen name="AlarmDelete" component={AlarmDeleteScreen}/>
                <Stack.Screen name="ReminderDetail" component={ReminderDetailScreen}/>
                <Stack.Screen name="ReminderEdit" component={ReminderEditScreen}/>
                <Stack.Screen name="ReminderDelete" component={ReminderDeleteScreen}/>
                <Stack.Screen name="MainTabs" component={BottomTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
