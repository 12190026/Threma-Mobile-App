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
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

import { colors } from "../Global/styles";
import AboutHeader from "../components/AboutHeader";
import TwentyOneScreen from "./financialTabs/twentyoneScreen";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = SCREEN_WIDTH;

export default function FinanceScreen({ navigation }) {
  const [routes] = useState([
    { key: "first", title: "2023" },
    { key: "secound", title: "2024" },
    { key: "third", title: "2025" },
    { key: "fourth", title: "2026" },
    { key: "fifth", title: "2027" },
    { key: "sixth", title: "2028" },
    { key: "seventh", title: "2029" },
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
            <Text style={styles.text1}>ANNUAL FINANCIAL STATEMENT</Text>
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

        {index === 0 && <TwentyOneScreen />}
        {index === 1 && <TwentyOneScreen />}
        {index === 2 && <TwentyOneScreen />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  tabLabel: {
    fontWeight: "bold",
    color: colors.cardbackground,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 5,
    maxHeight: 50,
  },
});
