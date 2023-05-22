import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AboutScreen from "../screens/AboutScreen";

const ClientAbout = createStackNavigator();

export default function ClientStack() {
  return (
    <ClientAbout.Navigator>
      <ClientAbout.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientAbout.Navigator>
  );
}
