
// VoiceCoachScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { BlurView } from "expo-blur";

import styles from "../styles/VoiceCoachScreenStyles";
import BottomNavBar from "../components/BottomNavBar";

export default function VoiceCoachScreen({ navigation }) {
  const openLessonSelector = (practiceMethod) => {
    navigation.navigate("LessonSelector", {
      practiceMethod,
    });
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
      blurRadius={50}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Voice Coach</Text>
            <Text style={styles.subtitle}>Choose your path</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.menu}>☰</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.pathButton}
            onPress={() => openLessonSelector("pronunciation")}
          >
            <Text style={styles.pathTitle}>Pronunciation Practice</Text>
          </TouchableOpacity>

          <Text style={styles.description}>
            Model the native speaker to perfect your pronunciation.
          </Text>

          <TouchableOpacity
            style={styles.pathButton}
            onPress={() => openLessonSelector("challenge")}
          >
            <Text style={styles.pathTitle}>Challenge</Text>
          </TouchableOpacity>

          <Text style={styles.description}>
            Test your memory and conversation skills. Master each lesson to earn
            a language certificate.
          </Text>
        </View>

        <TouchableOpacity style={styles.reportContainer}>
          <Text style={styles.reportText}>⚠ Report a Problem</Text>
        </TouchableOpacity>

        <BottomNavBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
}