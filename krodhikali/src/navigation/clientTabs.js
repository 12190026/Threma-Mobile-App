import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../Global/styles";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ClientStack from "./clientStack";

const clientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <clientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons,
      }}
    >
      <clientTabs.Screen
        name=" home screen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <clientTabs.Screen
        name="About Screen"
        component={ClientStack}
        options={{
          headerShown: false,
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <Icon name="info" type="material" color={color} size={size} />
          ),
        }}
      />
    </clientTabs.Navigator>
  );
}
