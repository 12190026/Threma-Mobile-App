import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import GalleryCard from "../../components/galleryCard";
import { galleryData } from "../../Global/Data";
import { colors } from "../../Global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

const MAX_CARDS_TO_SHOW = 1;

export default function GalleryScreen() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const cardsToShow = showMore
    ? galleryData
    : galleryData.slice(0, MAX_CARDS_TO_SHOW);

  return (
    <View style={styles.container}>
      {cardsToShow.map((item) => (
        <View key={item.id} style={styles.cardContainer}>
          <GalleryCard screenWidth={SCREEN_WIDTH * 0.95} images={item.images} />
        </View>
      ))}
      {galleryData.length > MAX_CARDS_TO_SHOW && (
        <TouchableOpacity
          style={styles.button}
          onPress={toggleShowMore}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {showMore ? "Show less" : "Show more"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  cardContainer: {
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    marginHorizontal: 100,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 12,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
