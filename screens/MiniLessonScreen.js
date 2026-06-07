
//MiniLessonScreen.js
import React, {
  useState,useContext
} from "react";

import { LanguageContext } from "../contexts/LanguageContext";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/MiniLessonStyles";

export default function MiniLessonScreen({
  route, 
  navigation
}) {
  const lesson = route.params?.lesson;

  if (!lesson) {
    return null;
  }

  const [progress,
    setProgress] =
    useState(0);

  const playAudio = () => {
    console.log(
      "Play audio"
    );
  };

  const skipForward = () => {
    console.log(
      "Forward"
    );
  };

  const skipBackward = () => {
    console.log(
      "Backward"
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >
          <Ionicons
            name="chevron-back"
            size={34}
            color="#6e6f77"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>
            ↓
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={lesson.image}
        style={styles.image}
      />

      <Text style={styles.category}>
        {lesson.category}
      </Text>

      <Text style={styles.title}>
        {lesson.title}
      </Text>

      <Text style={styles.description}>
        {lesson.description}
      </Text>

<View style={styles.progressBarContainer}>
  <View
    style={[
      styles.progressBarFill,
      { width: `${progress}%` },
    ]}
  />
</View>

<Text style={styles.progressText}>
  {Math.round(progress)}%
</Text>

      <View
        style={
          styles.audioControls
        }
      >
        <TouchableOpacity
          onPress={
            skipBackward
          }
        >
          <Text>⟲10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={playAudio}
        >
          <Text
            style={
              styles.playButton
            }
          >
            ▶
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
            skipForward
          }
        >
          <Text>10⟳</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}