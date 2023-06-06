import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { colors } from "../Global/styles";
import { Icon } from "react-native-elements";
import React from "react";

const SearchResultCard = ({
  name,
  transfer_status,
  gmail,
  phonenumber,
  cid,
}) => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#811331",
            height: 170,
          }}
        ></View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../images/user.png")}
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -70,
            }}
          ></Image>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
            {name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            paddingBottom: 25,
            paddingTop: 25,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: colors.grey2,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Transfer Status : </Text>
            {transfer_status}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            paddingBottom: 25,
            paddingTop: 25,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Icon
            name="align-vertical-bottom"
            type="material"
            size={30}
            color={colors.grey2}
          />
          <Text
            style={{
              fontSize: 15,
              color: colors.grey2,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Stages : </Text>
            {gmail}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            paddingBottom: 25,
            paddingTop: 25,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Icon name="phone" type="material" size={30} color={colors.grey2} />
          <Text
            style={{
              fontSize: 15,
              color: colors.grey2,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Phone Number : </Text>
            {phonenumber}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            paddingBottom: 25,
            paddingTop: 25,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          <Icon
            name="card-account-details"
            type="material-community"
            size={30}
            color={colors.grey2}
          />
          <Text
            style={{
              fontSize: 15,
              color: colors.grey2,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>CID : </Text>
            {cid}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({});
