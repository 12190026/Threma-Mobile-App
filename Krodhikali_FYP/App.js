import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";

import { colors } from "./src/Global/styles";
import RootNavigator from "./src/navigation/RootNavigator";
import { Image } from "cloudinary-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
