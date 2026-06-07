import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/HelpSupportScreenStyles";

export default function HelpSupportScreen({ navigation }) {
  const options = [
    "Welcome Message",
    "Audio User Guide",
    "Tutorials",
    "Online Support Resources",
    "Subscription Help",
    "App Support",
    "Feature Request",
    "Contact Customer Service",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Help & Support</Text>

        <View style={{ width: 30 }} />
      </View>

      <View style={styles.card}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
            onPress={() => {}}
          >
            <Text style={styles.rowText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}