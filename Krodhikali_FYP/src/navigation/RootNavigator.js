import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import ClientStack from "./clientStack";
import RootClientTabs from "./clientTabs";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootClientTabs />
    </NavigationContainer>
  );
}
