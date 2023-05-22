import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

import GalleryCard from "../../components/galleryCard";
import { galleryData } from "../../Global/Data";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function GalleryScreen() {
  return (
    <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
      {galleryData.map((item) => (
        <View key={item.id} style={{ paddingBottom: 20 }}>
          <GalleryCard screenWidth={SCREEN_WIDTH * 0.95} images={item.images} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
