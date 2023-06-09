import React from "react";
import { Icon } from "react-native-elements";
import { colors } from "../Global/styles";

import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from "./clientTabs";
import FinanceScreen from "../screens/FinanceScreen";
import DrawerContents from "../components/DrawerContents";
import SemsoScreen from "../screens/SemsoScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: "Activity",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home-account"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="FinanceScreen"
        component={FinanceScreen}
        options={{
          headerShown: false,
          title: "Finance",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="finance"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="SemsoScreen"
        component={SemsoScreen}
        options={{
          headerShown: false,
          title: "Semso",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="hand-coin"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
