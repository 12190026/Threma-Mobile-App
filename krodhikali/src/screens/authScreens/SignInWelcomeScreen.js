import React, { useState, useRef } from "react";

import { colors, parameters } from "../../Global/styles";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";

import { Icon, Button } from "react-native-elements";
import SignInScreen from "./SignInScreen";

export default function SignInWelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 90,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: "bold",
          }}
        >
          WELCOME
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: "bold",
          }}
        >
          TO
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.buttons,
            fontWeight: "bold",
          }}
        >
          KRODHIKALI ASSOCIATION
        </Text>
      </View>

      <View style={{ flex: 3, alignItems: "center" }}>
        <Image
          style={styles.logo}
          source={require("../../images/kodhikali_logo.png")}
        />
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ justifyContent: "flex-end", marginBottom: 20 }}>
          <View style={{ marginHorizontal: 20, marginTop: 30 }}>
            <Button
              title="SIGN IN"
              buttonStyle={parameters.styledButton}
              titleStyle={parameters.buttonTitle}
              onPress={() => navigation.navigate("SignInScreen")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
