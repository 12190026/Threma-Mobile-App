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
import Header from "../../components/Header";

export default function SignInScreen({ navigation }) {
  const [textinput2foccused, settextinput2foccused] = useState(false);

  const textinput1 = useRef(1);
  const textinput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" navigation={navigation} />
      <View style={{ marginTop: 80 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={require("../../images/kodhikali_logo.png")}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={styles.text1}>Welcome To</Text>
          <Text style={styles.text1}>Galikhar Throema Tshogchung</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <TextInput
              style={styles.textinput1}
              placeholder="Email"
              ref={textinput1}
            />
          </View>
          <View style={styles.textinput2}>
            <Animatable.View
              animation={textinput2foccused ? "" : "fadeInLeft"}
              duration={600}
            >
              <Icon
                name="lock"
                iconStyle={{ color: colors.grey3 }}
                type="material"
                style={{}}
              />
            </Animatable.View>

            <TextInput
              style={{ width: "80%" }}
              placeholder="password"
              ref={textinput2}
              onFocus={() => {
                settextinput2foccused(false);
              }}
              onBlur={() => {
                settextinput2foccused(true);
              }}
            />

            <Animatable.View
              animation={textinput2foccused ? "" : "fadeInLeft"}
              duration={400}
            >
              <Icon
                name="visibility-off"
                iconStyle={{ color: colors.grey3 }}
                type="material"
                style={{ marginRight: 10 }}
              />
            </Animatable.View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate("DrawerNavigator")}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
            create a new account?
          </Text>
          <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
            Forgot password
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  textinput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    padding: 10,
  },

  textinput2: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    padding: 10,
  },
});
