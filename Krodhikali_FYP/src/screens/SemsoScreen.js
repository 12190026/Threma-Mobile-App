import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";


import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../Global/styles";
import { FlatList } from "react-native-gesture-handler";
import { semsoData } from "../Global/Data";
import Activitycard from "../components/activityCard";
import { Button } from "react-native-elements";

import AboutHeader from "../components/AboutHeader";
import SemsoCard from "../components/semsocard";


const SCREEN_WIDTH = Dimensions.get("window").width;


const MAX_CARDS_TO_SHOW = 3;

export default function SemsoScreen({ navigation }) {
  const [delivery, setdelivery] = useState(true);
  const [semsoData, setSemsoData] = useState([]);

  useEffect(() => {
    fetch("https://threma-app.onrender.com/api/semsos/")
      .then((response) => response.json())
      .then((data) => setSemsoData(data))
      .catch((error) => console.error(error));
  }, []);
  

  const [numCards, setNumCards] = useState(2);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setNumCards(numCards + 2);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleShowLess = () => {
    setNumCards(numCards - 2);
  };

  const cardsToShow = showMore
  ? semsoData
  : semsoData.slice(0, MAX_CARDS_TO_SHOW);

  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[1, 3]}
        showsVerticalScrollIndicator={true}
      >
        <AboutHeader navigation={navigation} />
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>SEMSO</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
            {cardsToShow.map((item) => (
              <View
                key={item.semso_id}
                style={{
                  paddingBottom: 15,
                  alignItems: "center",
                }}
              >
                <SemsoCard
                  screenWidth={SCREEN_WIDTH * 0.75}
                  donated_by={item.contributor}
                  amount={item.amount}
                  event={item.event}
                  date={item.date}
                />
              </View>
            ))}

          {semsoData.length > MAX_CARDS_TO_SHOW && (
            <TouchableOpacity style={styles.button} onPress={toggleShowMore}>
              <Text>{showMore ? "Show less" : "Show more"}</Text>
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
    alignItems: "center",
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
    padding: 15,
  },
});
