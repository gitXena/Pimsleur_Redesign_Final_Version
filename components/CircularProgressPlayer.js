import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Svg, {
  Circle,
} from "react-native-svg";

import styles from "../styles/CircularProgressPlayerStyles";

function CircularProgressPlayer({
  progress = 0,
  currentTime = "00:00",
  onPlayPress,
}) {
  const radius = 120;
  const strokeWidth = 8;

  const circumference =
    2 * Math.PI * radius;

  const strokeDashoffset =
    circumference -
    (circumference * progress) / 100;

  return (
    <View style={styles.container}>
      <Svg
        width={280}
        height={280}
        style={styles.svg}
      >
        <Circle
          cx="140"
          cy="140"
          r={radius}
          stroke="#D9D9D9"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <Circle
          cx="140"
          cy="140"
          r={radius}
          stroke="#FFFFFF"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin="140,140"
        />
      </Svg>

      <View style={styles.content}>
        <Text style={styles.timer}>
          {currentTime}
        </Text>

        <TouchableOpacity
          style={styles.playButton}
          onPress={onPlayPress}
        >
          <Text style={styles.playText}>
            ▶
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CircularProgressPlayer;