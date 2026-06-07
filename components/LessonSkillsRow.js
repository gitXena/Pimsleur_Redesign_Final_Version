import React from "react";
import {
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/LessonSkillRowStyles.js";

const skills = [
  {
    title: "Meet + Greet",
    icon: "chatbubble-outline",
  },
  {
    title: "Survival Skills",
    icon: "medkit-outline",
  },
  {
    title: "Speak + Understand",
    icon: "mic-outline",
  },
  {
    title: "Polite Phrases",
    icon: "pencil-outline",
  },
];

function LessonSkillsRow() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Complete this lesson to learn these skills
      </Text>

      <View style={styles.skillsContainer}>
        {skills.map((skill) => (
          <View
            key={skill.title}
            style={styles.skill}
          >
            <View style={styles.circle}>
              <Ionicons name={skill.icon} size={24} color="#777" />
            </View>

            <Text style={styles.label}>
              {skill.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default LessonSkillsRow;