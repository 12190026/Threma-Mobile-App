import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { colors } from "../Global/styles";

const FinancialCard = ({ screenWidth, images }) => {
  return (
    <View style={[styles.cardView, { width: screenWidth }]}>
      <Image style={[styles.image, { width: screenWidth }]} source={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 500,
    resizeMode: "contain",
  },
});

export default FinancialCard;
