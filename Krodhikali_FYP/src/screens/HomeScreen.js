import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../Global/styles";
import { FlatList } from "react-native-gesture-handler";
import { activitiesData } from "../Global/Data";
import Activitycard from "../components/activityCard";
import { Button } from "react-native-elements";
import { Cloudinary } from "cloudinary-react-native";
import { CloudinaryImage } from "cloudinary-react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const MAX_CARDS_TO_SHOW = 3;

export default function HomeScreen({ navigation }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://threma-app.onrender.com/api/activities/")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const completedActivities = activities.filter(
    (activity) => activity.status === "COMPLETED"
  );

  const pendingActivities = activities.filter(
    (activity) => activity.status === "PENDING"
  );

  const [delivery, setdelivery] = useState(true);

  const [numCards, setNumCards] = useState(MAX_CARDS_TO_SHOW);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setNumCards(completedActivities.length);
    setShowMore(true);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (showMore) {
      setNumCards(MAX_CARDS_TO_SHOW);
    } else {
      setNumCards(completedActivities.length);
    }
  };

  const cardsToShow = showMore
    ? completedActivities
    : completedActivities.slice(0, numCards);

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
            source={require("../images/aaa.jpg")}
          >
            <View style={styles.imageOverlay}>
              <Text style={styles.imageText}>ALWAYS OPEN YOUR</Text>
              <Text style={styles.imageText}>MIND FIRST</Text>
              <Text style={styles.imageText}>THAN OPEN YOUR MOUTH</Text>
              <Text style={styles.imageAuthorText}>
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
            data={pendingActivities.slice(0, numCards)}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 0 }}>
                <Activitycard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={{
                    uri: `https://res.cloudinary.com/dwfhplpuj/${item.image}`,
                  }}
                  ActivitiesName={item.name}
                  Description={item.description}
                  date={item.date}
                  time={item.time}
                />
              </View>
            )}
          />

          {numCards < completedActivities.length ? (
            <>
              <TouchableOpacity onPress={handleShowMore} style={styles.button}>
                <Text style={styles.showMore}>Show More</Text>
              </TouchableOpacity>
              {showMore && (
                <TouchableOpacity
                  onPress={toggleShowMore}
                  style={styles.button}
                >
                  <Text style={styles.showMore}>Show Less</Text>
                </TouchableOpacity>
              )}
            </>
          ) : (
            <TouchableOpacity onPress={toggleShowMore} style={styles.button}>
              <Text style={styles.showMore}>
                {showMore ? "Show Less" : "Show More"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Completed Events</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {cardsToShow.map((item) => (
            <View key={item.activity_id} style={{ paddingBottom: 20 }}>
              <Activitycard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={{
                  uri: `https://res.cloudinary.com/dwfhplpuj/${item.image}`,
                }}
                ActivitiesName={item.name}
                Description={item.description}
                date={item.date}
                time={item.time}
              />
            </View>
          ))}
          {completedActivities.length > MAX_CARDS_TO_SHOW && (
            <TouchableOpacity style={styles.button} onPress={toggleShowMore}>
              <Text style={styles.showMore}>
                {showMore ? "Show Less" : "Show More"}
              </Text>
            </TouchableOpacity>
          )}
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
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  imageOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    padding: 10,
  },
  imageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.cardbackground,
    marginBottom: 5,
  },
  imageAuthorText: {
    color: colors.grey4,
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

  showMore: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    alignContent: "center",
  },
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
