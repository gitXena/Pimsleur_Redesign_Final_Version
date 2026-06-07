import React from "react";
import {
  View,
  Text,
} from "react-native";

import styles from "../styles/VoiceCoachCardStyles.js";

function VoiceCoachCard() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.icon} />

        <Text style={styles.title}>
          Voice coach
        </Text>
      </View>

      <Text style={styles.description}>
        Perfect your pronunciation and test your
        accuracy with speech recognition
      </Text>

      <View style={styles.stats}>
        <View style={styles.statContainer}>
          <View style={styles.statCircle}>
            <Text>0/10</Text>
          </View>

          <Text style={styles.statText}>
            Phrases{"\n"}Mastered
          </Text>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.statCircle}>
            <Text>-</Text>
          </View>

          <Text style={styles.statText}>
            Challenge{"\n"}Score
          </Text>
        </View>
      </View>
    </View>
  );
}

export default VoiceCoachCard;