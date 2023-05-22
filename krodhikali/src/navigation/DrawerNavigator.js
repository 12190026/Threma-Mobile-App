import React from "react";
import { Icon } from "react-native-elements";
import { colors } from "../Global/styles";

import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from "./clientTabs";
import FinanceScreen from "../screens/FinanceScreen";
import DrawerContents from "../components/DrawerContents";
import TransferScreen from "../screens/TransferScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: "Home",
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
              name="cash-multiple"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{
          headerShown: false,
          title: "Transfer",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="transit-transfer"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
