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
        <View style={{ marginTop: -5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: colors.buttons,
              paddingLeft: 20,
              paddingVertical: 15,
            }}
          >
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={80}
              source={require("../images/kodhikali_logo.png")}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.cardbackground,
                  fontSize: 18,
                }}
              >
                KRODHIKALI
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.cardbackground,
                  fontSize: 18,
                }}
              >
                ASSOCIATION
              </Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Icon
                  type="material"
                  name="place"
                  size={20}
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: colors.grey3, fontSize: 10 }}>
                  gadhikhar
                </Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderColor: colors.pagebackground,
  },
});
