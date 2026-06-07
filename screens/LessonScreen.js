//LessonScreen.js
import React, { useContext } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

import { LessonContext } from "../contexts/LessonContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { Ionicons } from "@expo/vector-icons";

import lessons from "../data/lessons";

import AudioPlayerHeader from "../components/AudioPlayerHeader";
import LessonSkillsRow from "../components/LessonSkillsRow";
import CircularProgressPlayer from "../components/CircularProgressPlayer";

import styles from "../styles/LessonScreenStyles";

/** Voice coach card with phrase-mastered / challenge-score stats */
function VoiceCoachCard() {
  return (
    <View style={styles.voiceCoachCard}>
      {/* Header */}
      <View style={styles.voiceCoachHeader}>
        <View style={styles.voiceCoachIconCircle}>
          <Text style={{ fontSize: 20 }}>
            <Ionicons name="mic" size={24} color="#BDBDBD" />
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.voiceCoachTitle}>Voice coach</Text>
          <Text style={styles.voiceCoachSubtitle}>
            Perfect your pronunciation and test your accuracy with speech
            recognition
          </Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.voiceCoachStatsRow}>
        <View style={styles.statBadge}>
          <View style={styles.statCircle}>
            <Text style={styles.statCircleValue}>0/10</Text>
          </View>
          <Text style={styles.statLabel}>Phrases{"\n"}Mastered</Text>
        </View>

        <View style={styles.statBadge}>
          <View style={styles.statCircle}>
            <Text style={styles.statCircleValue}>—</Text>
          </View>
          <Text style={styles.statLabel}>Challenge{"\n"}Score</Text>
        </View>
      </View>
    </View>
  );
}

/** Culture content card shown on Page 2 of the horizontal pager */
function CultureCard({ content, language }) {
  return (
    <View style={styles.cultureCard}>
      <Text style={styles.cultureTitle}>
        {language ? `${language} Culture` : "Culture"}
      </Text>
      <Text style={styles.cultureContent}>
        {content ?? "No culture content available for this lesson."}
      </Text>
    </View>
  );
}

// Main Screen
function LessonScreen({ navigation }) {
  const { selectedLesson } = useContext(LessonContext);
  const { selectedLanguage } = useContext(LanguageContext);

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
      {/* Dark overlay over the background image */}
      <View style={styles.overlay}>
        {/* Back / Audio-only / Share header */}
        <AudioPlayerHeader navigation={navigation} />

        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          {/* ── Horizontal pager: Audio page | Culture page ── */}
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {/* Page 1 – circular timer + play controls */}
            <View style={styles.topPage}>
              <CircularProgressPlayer />
            </View>

            {/* Page 2 – culture content */}
            <View style={styles.topPage}>
              <CultureCard content={lessonData?.content} language={selectedLanguage} />
            </View>
          </ScrollView>

          {/* Page dots indicator */}
          <View style={styles.pageDotsRow}>
            <View style={styles.pageDotActive} />
            <View style={styles.pageDotInactive} />
          </View>

          {/* Swipe-up chevron sits right above the white card */}
          <View style={styles.swipeHintContainer}>
            <Text style={styles.swipeHintChevron}>
              <Ionicons name="chevron-up-outline" size={24} color="#7B8CDE" />
            </Text>
          </View>

          {/* ── White lesson card ── */}
          <View style={styles.lessonCard}>
            {/* "Lesson 1  [↓ Download]" row */}
            <View style={styles.lessonHeaderRow}>
              <Text style={styles.lessonTitle}>
                {lessonData?.title ?? "Lesson 1"}
              </Text>
              <TouchableOpacity
                style={styles.downloadButton}
                activeOpacity={0.75}
              >
                <Text style={{ fontSize: 13 }}>
                  <Ionicons
                    name="download-outline"
                    size={24}
                    color="#5B6BD5"
                  />
                </Text>
                <Text style={styles.downloadButtonText}>Download</Text>
              </TouchableOpacity>
            </View>

            {/* Skill icons */}
            <LessonSkillsRow />

            {/* Divider + practice label */}
            <View style={styles.practiceDivider} />
            <Text style={styles.practiceLabel}>
              Practice the contents of this lesson here
            </Text>

            {/* Voice coach */}
            <VoiceCoachCard />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default LessonScreen;