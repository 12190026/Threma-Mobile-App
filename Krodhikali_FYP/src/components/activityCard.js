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

export default function Activitycard({
  onPressActivitycard,
  ActivitiesName,
  Description,
  images,
  date,
  time,
  screenWidth,
}) {
  const [showText, setShowText] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState(undefined);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > MAX_LINES && !showText) {
        setShowMoreButton(true);
        setNumberOfLines(MAX_LINES);
      }
    },
    [showText]
  );

  useEffect(() => {
    if (showMoreButton) {
      setNumberOfLines(showText ? undefined : MAX_LINES);
    }
  }, [showText, showMoreButton]);

  return (
    <View
      style={{
        ...styles.cardView,
        width: screenWidth,
        backgroundColor: "#000",
        shadowColor: "#000",
      }}
    >
      <Image style={{ ...styles.image, width: screenWidth }} source={images} />

      <View>
        <Text style={styles.activityName}>{ActivitiesName}</Text>
      </View>

      <View style={styles.description}>
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={numberOfLines}
          style={styles.descriptiontext}
        >
          {Description}
        </Text>
        {showMoreButton && (
          <TouchableOpacity
            onPress={() => setShowText((showText) => !showText)}
            accessibilityRole="button"
          >
            <Text style={{ color: colors.grey3 }}>
              {showText ? "...Hide" : "Read More..."}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <View style={{ marginTop: 5, marginLeft: 10 }}>
          <Icon name="event" type="material" size={24} color={colors.grey3} />
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
    marginLeft: 10,
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
