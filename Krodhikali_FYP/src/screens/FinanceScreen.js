import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { colors } from "../Global/styles";
import AboutHeader from "../components/AboutHeader";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function FinanceScreen({ navigation }) {
  const [financialData, setFinancialData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    fetch("https://threma-app.onrender.com/api/financial-statements")
      .then((response) => response.json())
      .then((data) => {
        setFinancialData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

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
          <ScrollView
            horizontal
            contentContainerStyle={styles.yearScrollView}
            showsHorizontalScrollIndicator={false}
          >
            {financialData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.yearButton,
                  selectedYear === item.year && styles.selectedYearButton,
                ]}
                onPress={() => setSelectedYear(item.year)}
              >
                <Text
                  style={[
                    styles.yearButtonText,
                    selectedYear === item.year && styles.selectedYearButtonText,
                  ]}
                >
                  {item.year}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.imageContainer}>
            {selectedYear && (
              <Image
                source={{
                  uri: `https://res.cloudinary.com/dwfhplpuj/${
                    financialData.find((item) => item.year === selectedYear)
                      .image
                  }`,
                }}
                style={styles.image}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pagebackground,
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
  view10: {
    elevation: 10,
    backgroundColor: colors.pagebackground,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  yearScrollView: {
    paddingHorizontal: 10,
  },
  yearButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.buttons,
    marginRight: 10,
  },
  selectedYearButton: {
    backgroundColor: colors.cardbackground,
  },
  yearButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  selectedYearButtonText: {
    color: colors.text,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  image: {
    width: SCREEN_WIDTH - 40,
    borderRadius: 10,
    aspectRatio: 1,
  },
});
