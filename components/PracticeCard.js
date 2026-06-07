
// PracticeCard.js
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/PracticeCardStyles";

function PracticeCard({
  title,
  subtitle,
  image,
  icon,        // ← add this
  locked = false,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.card, locked && styles.lockedCard]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {image && (
        <Image
          source={image}
          style={[styles.image, locked && styles.lockedImage]}
          resizeMode="cover"
        />
      )}

      {/* ↓ add this block */}
      {icon && !image && (
        <Ionicons
          name={icon}
          size={28}
          color={locked ? "#B0B0B0" : "#FFFFFF"}
          style={styles.icon}
        />
      )}

      <View style={styles.textContainer}>
        <Text style={[styles.title, locked && styles.lockedText]}>{title}</Text>
        <Text style={[styles.subtitle, locked && styles.lockedText]}>{subtitle}</Text>
      </View>

      {locked && <Ionicons name="lock-closed" size={28} color="#B0B0B0" />}
    </TouchableOpacity>
  );
}

export default PracticeCard;