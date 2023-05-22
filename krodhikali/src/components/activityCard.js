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

export default function Activitycard({
  onPressActivitycard,
  ActivitiesName,
  Description,
  images,
  date,
  time,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.image, width: screenWidth }}
          source={{ uri: images }}
        />

        <View>
          <View>
            <Text style={styles.activityName}>{ActivitiesName}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.description}>
              <Text style={styles.descriptiontext}>{Description}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
              <Icon
                name="event"
                type="material"
                size={24}
                color={colors.grey3}
              />
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 5, marginLeft: 10 }}>
              <Icon
                name="schedule"
                type="material"
                size={24}
                color={colors.grey3}
              />
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.date}>{time}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  activityName: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.grey1,
    marginTop: 10,
    marginLeft: 10,
  },
  description: {
    flex: 1,
    flexDirection: "row",
    borderRightColor: colors.grey4,

    paddingHorizontal: 5,
    marginLeft: 5,
  },
  descriptiontext: {
    fontSize: 12,
    color: colors.grey2,
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.grey3,
    marginTop: 10,
    marginLeft: 10,
  },
});
