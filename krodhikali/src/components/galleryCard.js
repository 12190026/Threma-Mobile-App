import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  screenWidth,
} from "react-native";
import React from "react";
import { colors, parameters } from "../Global/styles";
import { Icon } from "react-native-elements";

export default function GalleryCard({ images }) {
  return (
    <View style={{ ...styles.cardView, width: screenWidth }}>
      <Image
        style={{ ...styles.image, width: screenWidth }}
        source={{ uri: images }}
      />
    </View>
  );
}

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
    height: 200,
  },
});
