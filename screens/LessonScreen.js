
//LessonScreen.js
import React, { useContext } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
} from "react-native";

import { LessonContext } from "../contexts/LessonContext";
import { LanguageContext } from "../contexts/LanguageContext";

import lessons from "../data/lessons";

import AudioPlayerHeader from "../components/AudioPlayerHeader";
import LessonSkillsRow from "../components/LessonSkillsRow";
import CircularProgressPlayer from "../components/CircularProgressPlayer";
import VoiceCoachCard from "../components/VoiceCoachCard";

import styles from "../styles/LessonScreenStyles";

function LessonScreen({ navigation }) {
  const { selectedLesson } =
    useContext(LessonContext);

  const { selectedLanguage } =
    useContext(LanguageContext);

const lessonData = lessons[selectedLanguage]?.find(
  (lesson) => lesson.id === selectedLesson?.id
);

const FALLBACK_IMAGE = require("../assets/images/background.png");

const backgroundImage = lessonData?.image ?? FALLBACK_IMAGE;

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      {/* dark overlay */}
      <View style={styles.overlay}>
        <AudioPlayerHeader
          navigation={navigation}
        />
 
        <ScrollView>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {/* Audio Page */}
            <View style={styles.topPage}>
              <CircularProgressPlayer />
            </View>

            {/* Culture Page */}
            <View style={styles.topPage}>
              {/* Culture Content */}
            </View>
          </ScrollView>

          <View style={styles.lessonCard}>
            <LessonSkillsRow />

            <VoiceCoachCard />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default LessonScreen;