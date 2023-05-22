import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { colors } from "../../Global/styles";

export default function DudjomScreen() {
  return (
    <View>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>The Dudjom lineage</Text>
      </View>
      <View>
        <Image
          style={{
            width: 400,
            height: 200,
            resizeMode: "contain",
            marginLeft: 5,
          }}
          source={require("../../images/lineage.png")}
        />
      </View>
      <View style={{ marginLeft: 5, marginRight: 10 }}>
        <Text style={{ color: colors.grey1 }}>
          The origins of the Dudjom New Treasure Lineage can be traced back to
          Dharmakaya Samantabhadra Buddha. Samantabhadra Buddha transmitted it
          to Vajrasattva who then transmitted to Garab Dorje, then to
          Manjusrimitra, Sri Singha and Padmasambhava. Padmasambhava then
          transmitted the teachings to His consort Yeshe Tsogyal who transmitted
          to Dudjom Lingpa (The 1st Dudjom). Jigdral Yeshe Dorje (The 2nd
          Dudjom) then received the transmission from Dudjom Lingpa’s heart son
          Jigme Nedun Wangpo. The 2nd Dudjom Rinpoche transmitted the terma of
          Dudjom Lingpa together with that of his own discovery to Dungse Garab
          Dorje Rinpoche. Thus Dungse Garab Dorje Rinpoche presently holds the
          blood lineage as well as the Dharma lineage of the Dudjom Rinpoche.
        </Text>
      </View>

      <View style={{ marginLeft: 5, marginRight: 10 }}>
        <Text style={{ color: colors.grey1 }}>
          The Dudjom New Treasure is one of many termas transmitted by Guru
          Padmasambhava during the ninth century and to be propagated at this
          time of degeneration. This is the most profound and appropriate
          teaching for this period of time to purify the negative emotions of
          sentient and to obtain liberation. Amongst the termas of Guru
          Padmasambhava, the termas obtained by Dudjom Lingpa and the 2nd Dudjom
          Rinpoche are the latest and nearest to this period of time. Thus is
          called the Dudjom New Treasure.
        </Text>
      </View>
      <View style={{ marginLeft: 5, marginRight: 10 }}>
        <Text style={{ color: colors.grey1 }}>
          The Dudjom New Treasure is one of many termas transmitted by Guru
          Padmasambhava during the ninth century and to be propagated at this
          time of degeneration. This is the most profound and appropriate
          teaching for this period of time to purify the negative emotions of
          sentient and to obtain liberation. Amongst the termas of Guru
          Padmasambhava, the termas obtained by Dudjom Lingpa and the 2nd Dudjom
          Rinpoche are the latest and nearest to this period of time. Thus is
          called the Dudjom New Treasure.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
  },
  headerTextView: {
    marginTop: 10,
    backgroundColor: colors.grey5,
    paddingVertical: 6,
    alignItems: "center",
    alignContent: "center",
  },
});
