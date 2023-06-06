import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import FinancialCard from "../../components/financialCard";

const SCREEN_WIDTH = Dimensions.get("window").width;

const FinancialStatementScreen = ({ year }) => {
  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    fetch(`https://threma-app.onrender.com/api/financial-statements/?year=${year}`)
      .then(response => response.json())
      .then(data => {
        setFinancialData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [year]);

  return (
    <View style={styles.container}>
      {financialData.map(item => (
        <View key={item.id} style={styles.cardContainer}>
          <FinancialCard screenWidth={SCREEN_WIDTH * 0.95} images={{
                uri: `https://res.cloudinary.com/dwfhplpuj/${item.image}`,
              }} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    paddingTop: 10,
  },
  cardContainer: {
    paddingBottom: 20,
  },
});

export default FinancialStatementScreen;
