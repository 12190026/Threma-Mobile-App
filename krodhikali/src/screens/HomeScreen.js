import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../Global/styles";
import { FlatList } from "react-native-gesture-handler";
import { activitiesData } from "../Global/Data";
import Activitycard from "../components/activityCard";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [delivery, setdelivery] = useState(true);

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />

      <ScrollView
        stickyHeaderIndices={[1, 3]}
        showsVerticalScrollIndicator={true}
      >
        <View>
          <ImageBackground
            style={styles.backgroundImage}
            source={require("../images/background.jpg")}
          >
            <View
              style={{
                marginTop: 50,
                marginLeft: 20,
                marginRight: 20,

                backgroundColor: "rgba(52, 52, 52, 0.7)",
                padding: 2,
                justifyContent: "center",
              }}
            >
              <Text style={styles.imageText}>ALWAYS OPEN YOUR</Text>
              <Text style={styles.imageText}>MIND FIRST</Text>
              <Text style={styles.imageText}>THAN OPEN YOUR MOUTH</Text>
              <Text style={{ color: colors.grey4, marginTop: 5 }}>
                - Dungsay Garab Rinpochoe
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            backgroundColor: colors.grey5,
            paddingVertical: 6,
            marginTop: 10,
          }}
        >
          <Text style={styles.headerText}>Upcoming Events</Text>
        </View>

        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={activitiesData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <Activitycard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  ActivitiesName={item.ActivitiesName}
                  Description={item.Description}
                  date={item.date}
                  time={item.time}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Completed Events</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {activitiesData.map((item) => (
            <View key={item.id} style={{ paddingBottom: 20 }}>
              <Activitycard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                ActivitiesName={item.ActivitiesName}
                Description={item.Description}
                date={item.date}
                time={item.time}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },

  backgroundImage: {
    width: 410,
    height: 200,
    resizeMode: "contain",
  },
  imageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey5,
  },

  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 6,
  },
});
