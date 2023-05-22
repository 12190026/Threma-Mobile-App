import React, { useState, useContext, useEffect } from "react";
import { colors } from "../Global/styles";

import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  Image,
  StyleSheet,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Avatar, Button, Icon } from "react-native-elements";

export default function DrawerContents(props, { navigation }) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.buttons,
              paddingLeft: 20,
              paddingVertical: 10,
            }}
          >
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{ uri: "https://reactjs.org/logo-og.png" }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.cardbackground,
                  fontSize: 18,
                }}
              >
                Tshewang Dendup
              </Text>

              <Text style={{ color: colors.grey3, fontSize: 10 }}>
                111534526532
              </Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <DrawerItem
        label="sign Out"
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.pagebackground,
  },
});
