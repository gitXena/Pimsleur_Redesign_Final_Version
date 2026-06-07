import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "../styles/GeneralSettingsStyles";

export default function GeneralSettingsScreen({
  navigation,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>General</Text>

        <View style={{ width: 30 }} />
      </View>

      <ScrollView style={styles.card}>
        <View style={styles.setting}>
          <Text style={styles.settingTitle}>
            Shaking gesture allowed
          </Text>
          <Text style={styles.settingDescription}>
            Report a problem by shaking your phone
          </Text>
        </View>

        <View style={styles.setting}>
          <Text style={styles.settingTitle}>
            Sound effect allowed
          </Text>
          <Text style={styles.settingDescription}>
            Play sound notifications while practicing
          </Text>
        </View>

        <View style={styles.setting}>
          <Text style={styles.settingTitle}>
            AI Settings
          </Text>
        </View>

        <View style={styles.setting}>
          <Text style={styles.settingTitle}>
            AutoSave
          </Text>
          <Text style={styles.settingDescription}>
            Save practice sessions automatically.
          </Text>
        </View>

        <View style={styles.setting}>
          <Text style={styles.settingTitle}>
            Challenge notifications
          </Text>
          <Text style={styles.settingDescription}>
            Display notifications for completed
            challenges.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}