import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";
import SearchResultScreen from "../screens/searchResultScreen";
import SearchScreen from "../screens/SearchScreen";

const ClientAbout = createStackNavigator();

export default function ClientStack() {
  return (
    <ClientAbout.Navigator>
      <ClientAbout.Screen
        name="Search Screen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientAbout.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientAbout.Navigator>
  );
}
