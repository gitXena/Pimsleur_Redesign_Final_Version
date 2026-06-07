
//LessonSelectorScreen.js
import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LessonNumber from "../components/LessonNumber";

import styles from "../styles/LessonSelectorStyles";

function LessonSelectorScreen({
  route,
  navigation,
}) {
  const [selectedLesson, setSelectedLesson] =
    useState(null);

  const practiceMethod =
    route.params?.practiceMethod || "skills";

  const lessons = Array.from(
    { length: 30 },
    (_, i) => i + 1
  );

  const startPractice = () => {
    if (!selectedLesson) return;

    navigation.navigate("PracticeScreen", {
      lesson: selectedLesson,
      practiceMethod: practiceMethod,
    });
  };

  return (
            <ImageBackground
              source={require("../assets/images/background.png")}
              style={styles.background}
              blurRadius={50}
            >
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
                <Ionicons
            name="chevron-back"
            size={34}
            color="#FFF"
          />
      </TouchableOpacity>

      <Text style={styles.title}>
        Lesson Selector
      </Text>

      <Text style={styles.subtitle}>
        Select a lesson for{" "}
        {practiceMethod}
      </Text>

      <View style={styles.grid}>
        {lessons.map((item) => (
          <LessonNumber
            key={item}
            number={item}
            selected={
              selectedLesson === item
            }
            onPress={() =>
              setSelectedLesson(item)
            }
          />
        ))}
      </View>

      <TouchableOpacity
        disabled={!selectedLesson}
        onPress={startPractice}
        style={[
          styles.startButton,
          !selectedLesson &&
            styles.disabled,
        ]}
      >
        <Text style={styles.startText}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

export default LessonSelectorScreen;