import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  screenWidth,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { colors, parameters } from "../Global/styles";
import { Icon } from "react-native-elements";

const MAX_LINES = 3;

export default function SemsoCard({
  screenWidth,
  donated_by,
  amount,
  date,
  event,
}) {
  return (
    <View
      style={{
        ...styles.cardView,
        width: screenWidth,
        backgroundColor: "#000",
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        elevation: 10,
      }}
    >
      <View>
        <Text style={styles.activityName}>
          Donated By: <Text style={{ fontSize: 12 }}>{donated_by}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.activityName}>
          Amount: Nu. <Text style={{ fontSize: 12 }}>{amount}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.activityName}>
          Date: <Text style={{ fontSize: 12 }}>{date}</Text>
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.activityName}>
          Event: <Text style={{ fontSize: 12 }}>{event}</Text>
        </Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 130,

    resizeMode: "cover",
  },
  activityName: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.cardbackground,
    marginTop: 10,
    marginLeft: 20,
  },
  description: {
    flex: 1,
    borderRightColor: colors.grey4,

    paddingHorizontal: 5,
    marginLeft: 5,
  },
  descriptiontext: {
    fontSize: 12,
    color: colors.grey4,
    padding: 3,
    lineHeight: 20,
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.grey3,
    marginTop: 10,
    marginLeft: 10,
  },
});
