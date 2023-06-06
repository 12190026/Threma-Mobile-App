import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../Global/styles";
import { Icon } from "react-native-elements";

export default function SearchComponent() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput = useRef(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://threma-app.onrender.com/api/practitioners/");
      const result = await response.json();
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const contains = (item, query) => {
    const { cid } = item;
    return cid.toLowerCase().includes(query.toLowerCase());
  };

  const handleSearch = (query) => {
    const filteredResults = data.filter((item) => contains(item, query));
    setFilteredData(filteredResults);
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.searchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{ marginLeft: 20 }}
            size={32}
          />
          <Text style={{ fontSize: 15 }}>Looking for your profile?</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.textInput}>
              <Animatable.View
                animation={textInputFocused ? "fadeInRight" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name={textInputFocused ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFocused) setModalVisible(false);
                    setTextInputFocused(true);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>

              <TextInput
                style={{ width: "90%" }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFocused(true);
                }}
                onBlur={() => {
                  setTextInputFocused(false);
                }}
                onChangeText={handleSearch}
              />

              <Animatable.View
                animation={textInputFocused ? "fadeInLeft" : ""}
                duration={400}
              >
                <Icon
                  name={textInputFocused ? "cancel" : null}
                  style={{ marginRight: 10 }}
                  type="material"
                  iconStyle={{ color: colors.grey3 }}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch();
                  }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.navigate("SearchResultScreen", {
                    filteredData: filteredData,
                  });
                  setModalVisible(false);
                  setTextInputFocused(true);
                }}
              >
                <View style={styles.view2}>
                  <Text style={{ color: colors.grey2, fontSize: 15 }}>
                    {item.cid}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.cid.toString()}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 40,
    marginHorizontal: 0,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  searchArea: {
    marginTop: 10,
    width: "100%",
    height: 70,
    backgroundColor: colors.grey5,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  view1: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignContent: "center",
  },
  view2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
  },
});
