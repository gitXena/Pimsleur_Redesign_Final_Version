import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/AboutAppScreenStyles";

export default function AboutAppScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>About This App</Text>

        <View style={{ width: 30 }} />
      </View>

      <View style={styles.card}>
        <Text style={styles.description}>
          This is a UI redesign application concept
          for the Pimselur Language Learning app.
        </Text>
      </View>
    </View>
  );
}