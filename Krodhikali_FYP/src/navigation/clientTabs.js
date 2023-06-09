import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../Global/styles";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ClientStack from "./clientStack";
import SearchScreen from "../screens/SearchScreen";
import FinanceScreen from "../screens/FinanceScreen";
import SemsoScreen from "../screens/SemsoScreen";

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
        name="finance Screen"
        component={FinanceScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Finance",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="finance"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <clientTabs.Screen
        name="search Screen"
        component={ClientStack}
        options={{
          headerShown: false,
          tabBarLabel: "Search Stages",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <clientTabs.Screen
        name="Semso Screen"
        component={SemsoScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Semso",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="hand-coin"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <clientTabs.Screen
        name="About Screen"
        component={AboutScreen}
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
