import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { colors } from "../../Global/styles";

export default function DudjomScreen() {
  return (
    <View>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>GALIKHAR TSHOGCHUNG</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={{
              width: 200,
              height: 350,
              resizeMode: "contain",
              marginLeft: 10,
            }}
            source={require("../../images/galikhar.png")}
          />
        </View>
        <View style={{ marginRight: 215, marginTop: 40, marginLeft: 10 }}>
          <Text style={styles.text}>
            Rangjung Woesel Choeling Monastery is located in Eastern Bhutan
            under Trashigang district at Rangjung. The monastery was founded by
            His Eminence Dungsey Garab Dorje Rinpoche in the year 1989 with few
            monks and nuns. The objective of monastery is to provide a conducive
            haven for the study of Buddha dharma as expounded in the Dudjom New
            Treasure Lineage and carry out dharma activities for the benefit of
            the Buddhist community in and abroad the country. It has a
            flourishing community with branches monasteries and retreat centers.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
  },
  headerTextView: {
    marginTop: 10,
    backgroundColor: colors.grey5,
    paddingVertical: 6,
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    color: colors.grey2,
  },
});
