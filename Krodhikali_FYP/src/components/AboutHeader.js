import React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { colors } from "../Global/styles";
import { Icon } from "react-native-elements";

export default function AboutHeader({ navigation, id }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../images/dd.jpg")}
      >
        <View style={styles.overlay}>
          <View style={styles.headerContainer}>
            <View style={styles.backButton}>
              <Icon
                name="arrow-left"
                type="material-community"
                color={colors.black}
                size={30}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.imageText}>ALWAYS OPEN YOUR</Text>
            <Text style={styles.imageText}>MIND FIRST</Text>
            <Text style={styles.imageText}>THEN OPEN YOUR MOUTH</Text>
            <Text style={styles.authorText}>- Dungsay Garab Rinpoche</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  backButton: {
    backgroundColor: colors.cardbackground,
    borderRadius: 30,
    padding: 8,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  imageText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.grey5,
    marginBottom: 8,
    textAlign: "center",
  },
  authorText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.grey4,
    marginTop: 8,
  },
});
