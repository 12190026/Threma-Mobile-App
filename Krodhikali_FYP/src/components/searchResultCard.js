import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { colors } from "../Global/styles";
import { Icon } from "react-native-elements";

const SearchResultCard = ({
  name,
  transfer_status,
  gmail,
  phonenumber,
  cid,
  profile_pic,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: `https://res.cloudinary.com/dwfhplpuj/${profile_pic}`,
          }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{name}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Icon
            name="card-account-details"
            type="material-community"
            size={30}
            color={colors.grey2}
          />
          <Text style={styles.label}>
            <Text style={styles.labelText}>CID:</Text>{" "}
            <Text style={styles.labelValue}>{cid}</Text>
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>
            <Text style={styles.labelText}>Transfer Status:</Text>{" "}
            <Text style={styles.labelValue}>{transfer_status}</Text>
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Icon
            name="align-vertical-bottom"
            type="material"
            size={30}
            color={colors.grey2}
          />
          <Text style={styles.label}>
            <Text style={styles.labelText}>Stages:</Text>{" "}
            <Text style={styles.labelValue}>{gmail}</Text>
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Icon name="phone" type="material" size={30} color={colors.grey2} />
          <Text style={styles.label}>
            <Text style={styles.labelText}>Phone Number:</Text>{" "}
            <Text style={styles.labelValue}>{phonenumber}</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    backgroundColor: "#811331",
    height: 170,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -70,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "90%",
    paddingBottom: 25,
    paddingTop: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  labelText: {
    fontSize: 20,
  },
});
