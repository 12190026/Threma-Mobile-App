import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import SearchResultCard from "../components/searchResultCard";
import { colors } from "../Global/styles";

const SearchResultScreen = ({ route }) => {
  const { filteredData } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransferData(); // Fetch transfer status data
  }, []);

  const fetchTransferData = () => {
    fetch("https://threma-app.onrender.com/api/transfers/")
      .then((response) => response.json())
      .then((transferData) => {
        mergeData(filteredData, transferData); // Merge filtered data with transfer status data
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const mergeData = (practitionerData, transferData) => {
    const updatedData = practitionerData.map((practitioner) => {
      const transferStatusData = transferData.find(
        (status) => status.practitioner === practitioner.cid
      );
      return {
        ...practitioner,
        transfer_status: transferStatusData
          ? transferStatusData.status
          : "None",
      };
    });
    setData(updatedData);
    setLoading(false);
  };

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
            profile_pic={item.profile_pic} // Add this line
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
