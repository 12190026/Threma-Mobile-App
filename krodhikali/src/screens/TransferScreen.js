import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import { colors } from "../Global/styles";
import AboutHeader from "../components/AboutHeader";
import { transferData } from "../Global/Data";
import TransferCard from "../components/transferCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = SCREEN_WIDTH;

export default function TransferScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={true}>
        <View>
          <AboutHeader navigation={navigation} />
          <View style={styles.view1}>
            <Text style={styles.text1}>TRANSFER</Text>
          </View>
          <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
            {transferData.map((item) => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <TransferCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={item.images}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: colors.grey1,
    fontSize: 16,
    fontWeight: "bold",
  },
  view10: {
    elevation: 10,
    backgroundColor: colors.pagebackground,
  },
  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabLabel: {
    fontWeight: "bold",
    color: colors.cardbackground,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 5,
    maxHeight: 50,
  },
});
