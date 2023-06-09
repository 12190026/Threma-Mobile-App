import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { colors, parameters } from "../Global/styles";

export default function HomeHeader({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Avatar
          rounded
          size={40}
          source={require("../images/logo_k.png")}
          containerStyle={styles.avatarContainer}
        />
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>GADHIKHAR THROEMA</Text>
      </View>
      <View style={styles.rightContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#811331",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leftContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: colors.pagebackground,
  },
  title: {
    color: colors.cardbackground,
    fontSize: 20,
    fontWeight: "bold",
  },
});
