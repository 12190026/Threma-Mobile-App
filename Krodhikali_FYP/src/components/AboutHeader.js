import { Text, StyleSheet, View, ImageBackground } from "react-native";
import React from "react";

import { colors } from "../Global/styles";

import { Icon } from "react-native-elements";

export default function AboutHeader({ navigation, id }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../images/activity.jpg")}
      >
        <View style={styles.View1}>
          <View style={styles.view2}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={colors.black}
              size={25}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 0,
            marginLeft: 50,
            marginRight: 50,

            backgroundColor: "rgba(52, 52, 52, 0.8)",
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.imageText}>ALWAYS OPEN YOUR</Text>
          <Text style={styles.imageText}>MIND FIRST</Text>
          <Text style={styles.imageText}>THAN OPEN YOUR MOUTH</Text>
          <Text style={{ color: colors.grey4, marginTop: 5 }}>
            - Dungsay Garab Rinpochoe
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
  },
  View1: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  view2: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  view3: {
    marginTop: 0,
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  view4: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  imageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey5,
  },
});
