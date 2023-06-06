import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

import FinancialCard from "../../components/financialCard";
import { financialData } from "../../Global/Data";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function TwentyTwoScreen() {
  const card = financialData.find((item) => item.id === 0);

  return (
    <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
      <View key={card.id} style={{ paddingBottom: 20 }}>
        <FinancialCard screenWidth={SCREEN_WIDTH * 0.95} images={card.images} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
