import React, { useState } from "react";

import { colors } from "../Global/styles";

import { View, Text, StyleSheet, Dimensions } from "react-native";
import AboutHeader from "../components/AboutHeader";
import { ScrollView } from "react-native-gesture-handler";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import DudjomScreen from "./AboutTabs/DudjomScreen";
import GalikharScreen from "./AboutTabs/GalikharScreen";
import GalleryScreen from "./AboutTabs/GalleryScreen";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = SCREEN_WIDTH;

export default function AboutScreen({ navigation }) {
  const [routes] = useState([
    { key: "first", title: "Dudjom lineage" },
    { key: "secound", title: "Galikhar" },
    { key: "third", title: "Gallery" },
  ]);

  const [index, setIndex] = useState(0);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.cardbackground }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const UpdateRoute1 = () => {
    return (
      <View>
        <Text>next page</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={true}>
        <View>
          <AboutHeader navigation={navigation} />
          <View style={styles.view1}>
            <Text style={styles.text1}>DUDJOM KRODHIKALI ASSOCIATION</Text>
          </View>
        </View>
        <View style={styles.view10}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={UpdateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        {index === 0 && <DudjomScreen />}
        {index === 1 && <GalikharScreen />}
        {index === 2 && <GalleryScreen />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: colors.grey1,
    fontSize: 16,
    fontWeight: "bold",
  },
  view2: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.grey1,
  },
  view10: {
    elevation: 10,
    backgroundColor: colors.pagebackground,
  },
  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontWeight: "bold",
    color: colors.cardbackground,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 3,
    maxHeight: 45,
  },
});
