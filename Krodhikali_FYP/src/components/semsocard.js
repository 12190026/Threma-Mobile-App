import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../Global/styles";

const SemsoCard = ({ donated_by, amount, date, event }) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.row}>
        <Text style={styles.title}>Donated By:</Text>
        <Text style={styles.value}>{donated_by}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Amount:</Text>
        <Text style={styles.value}>Nu. {amount}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Date:</Text>
        <Text style={styles.value}>{date}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Event:</Text>
        <Text style={styles.value}>{event}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: "90%", // Adjust the width as needed
    alignSelf: "center", // Center the card horizontally
  },
  row: {
    flexDirection: "row",
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 6,
    color: colors.primary,
  },
  value: {
    fontSize: 14,
    color: colors.text,
  },
});

export default SemsoCard;
