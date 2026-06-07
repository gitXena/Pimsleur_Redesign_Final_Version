// import React from "react";
// import {
//   TouchableOpacity,
//   View,
//   Text
// } from "react-native";

// import styles from "../styles/SkillCardStyles";

// function SkillCard({
//   title,
//   progress,
//   onPress
// }) {
//   return (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={onPress}
//       activeOpacity={0.8}
//     >
//       <View style={styles.circle}>
//         {/* Icon Here */}
//       </View>

//       <View style={styles.textContainer}>
//         <Text style={styles.title}>
//           {title}
//         </Text>

//         <Text style={styles.progress}>
//           {progress}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// export default SkillCard;

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SkillCard({ title, progress, iconName, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.iconCircle}>
        <Ionicons name={iconName} size={28} color="#9E9E9E" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.progress}>{progress}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#F0F0F0",
    borderWidth: 2,
    borderColor: "#D8D8D8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 3,
  },
  progress: {
    fontSize: 14,
    color: "#666",
  },
});

export default SkillCard;