// AudioOnly.js

import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { LessonContext } from "../contexts/LessonContext";
import { LanguageContext } from "../contexts/LanguageContext";

import lessons from "../data/lessons";

import styles from "../styles/AudioOnlyStyles";

function AudioOnly({ navigation }) {
  const { selectedLesson } =
    useContext(LessonContext);

  const { selectedLanguage } =
    useContext(LanguageContext);

  const lessonData =
    lessons[selectedLanguage]?.find(
      (lesson) => lesson.id === selectedLesson?.id
    );

  const backgroundImage =
    require("../assets/images/background.png");

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
      blurRadius={50}
    >
      <View style={styles.overlay}>
        <Text style={styles.lessonTitle}>
          LESSON {lessonData?.id || 1}
        </Text>

        <View style={styles.centerContent}>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons
              name="play"
              size={60}
              color="#000"
            />
          </TouchableOpacity>

          <Text style={styles.timer}>
            00:01
          </Text>
        </View>

        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons
              name="play-back"
              size={60}
              color="#FFF"
            />
            <Text style={styles.controlText}>
              10
            </Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.controlButton}>
            <Ionicons
              name="play-forward"
              size={60}
              color="#FFF"
            />
            <Text style={styles.controlText}>
              10
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default AudioOnly;