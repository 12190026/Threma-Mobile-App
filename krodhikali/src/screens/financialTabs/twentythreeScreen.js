import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

import FinancialCard from "../../components/financialCard";
import { financialData } from "../../Global/Data";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function TwentyThreeScreen() {
  return (
    <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
      {financialData.map((item) => (
        <View key={item.id} style={{ paddingBottom: 20 }}>
          <FinancialCard
            screenWidth={SCREEN_WIDTH * 0.95}
            images={item.images}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
