import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../Global/styles";

export default function DudjomScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>GALIKHAR TSHOGCHUNG</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../../images/galikhar.png")}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.text}>
              Rangjung Woesel Choeling Monastery is located in Eastern Bhutan
              under Trashigang district at Rangjung. The monastery was founded
              by His Eminence Dungsey Garab Dorje Rinpoche in the year 1989 with
              few monks and nuns. The objective of the monastery is to provide a
              conducive haven for the study of Buddha dharma as expounded in the
              Dudjom New Treasure Lineage and carry out dharma activities for
              the benefit of the Buddhist community in and abroad the country.
              It has a flourishing community with branch monasteries and retreat
              centers.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "100%", // Set the card width to 100%
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 6,
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.grey1,
  },
  content: {
    flexDirection: "row",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 2,
  },
  text: {
    color: colors.grey1,
    fontSize: 14,
  },
});
