import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import GalleryCard from "../../components/galleryCard";
import { galleryData } from "../../Global/Data";
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
    <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
      {cardsToShow.map((item) => (
        <View key={item.id} style={{ paddingBottom: 20 }}>
          <GalleryCard screenWidth={SCREEN_WIDTH * 0.95} images={item.images} />
        </View>
      ))}
      {galleryData.length > MAX_CARDS_TO_SHOW && (
        <TouchableOpacity style={styles.button} onPress={toggleShowMore}>
          <Text>{showMore ? "Show less" : "Show more"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginRight: 100,
    marginLeft: 100,
    marginBottom: 10,
    borderRadius: 10,
    padding: 30,
  },
});
