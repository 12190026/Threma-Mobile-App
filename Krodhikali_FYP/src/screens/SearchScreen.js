import { StyleSheet, Text, View } from "react-native";
import React from "react";

import SearchComponent from "../components/SearchComponent";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 50,
          fontWeight: "bold",
          paddingVertical: 20,
          letterSpacing: 8,
          marginTop: 0,
        }}
      >
        PROFILE
      </Text>

      <SearchComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
