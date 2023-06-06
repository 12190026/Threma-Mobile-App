import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from "react-native";
import SearchResultCard from "../components/searchResultCard";
import { colors } from "../Global/styles";

const SearchResultScreen = ({ route }) => {
  const { filteredData } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch practitioner data from the API
    fetch("https://threma-app.onrender.com/api/practitioners/")
      .then((response) => response.json())
      .then((practitionerData) => {
        // Fetch transfer status data from the API
        fetch("https://threma-app.onrender.com/api/transfers/")
          .then((response) => response.json())
          .then((transferData) => {
            // Merge practitioner data and transfer status data
            const updatedData = practitionerData.map((practitioner) => {
              const transferStatusData = transferData.find(
                (status) => status.practitioner === practitioner.cid
              );
              return {
                ...practitioner,
                transfer_status: transferStatusData ? transferStatusData.status : "None",
              };
            });
            setData(updatedData);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No results found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ backgroundColor: colors.cardbackground }}
        data={data}
        keyExtractor={(item) => item.cid.toString()}
        renderItem={({ item }) => (
          <SearchResultCard
            name={item.name}
            transfer_status={item.transfer_status}
            gmail={item.stage_of_threma}
            phonenumber={item.contact_no}
            cid={item.cid}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
