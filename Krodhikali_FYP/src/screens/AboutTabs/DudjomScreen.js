import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Card, Button, Icon } from "react-native-elements";

import { colors } from "../../Global/styles";

export default function DudjomScreen() {
  return (
    <Card>
      <Card.Title>Dudjom lineage</Card.Title>
      <Card.Divider />
      <Card.Image source={require("../../images/activity.jpg")} />
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({});
