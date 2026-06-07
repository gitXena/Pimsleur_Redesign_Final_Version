import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "../styles/LegalSettingsStyles";

export default function LegalSettingsScreen({
  navigation,
}) {
  const items = [
    "Terms of Use",
    "Privacy Policy",
    "Your Privacy Choices",
    "California Notice",
    "Cookie Preferences",
    "Subscription Terms",
    "Delete Account",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Legal</Text>

        <View style={{ width: 30 }} />
      </View>

      <View style={styles.card}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
          >
            <Text>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}