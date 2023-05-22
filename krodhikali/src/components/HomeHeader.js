import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Icon, withBadge, TouchableOpacity } from "react-native-elements";
import { colors, parameters } from "../Global/styles";

export default function HomeHeader({ navigation }) {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={24}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          GADHIKHAR THROEMA
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 15,
        }}
      >
        <BadgeIcon
          type="material-community"
          name="bell"
          size={24}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#811331",
    height: parameters.headerHeight,
    justifyContent: "space-between",
  },
});
