
//LibraryScreen.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import styles from "../styles/LibraryScreenStyles";
import { LanguageContext } from "../contexts/LanguageContext.js";

export default function LibraryScreen({ navigation }) {
  const [selectedLanguageLocal, setSelectedLanguageLocal] = useState(null);
  const { setSelectedLanguage } = useContext(LanguageContext);

  const languages = [
    "Igbo",
    "Yoruba",
    "Hausa",
    "French",
    "Spanish",
    "German",
    "Italian",
    "Portuguese",
    "Japanese",
    "Chinese",
    "Korean",
    "Arabic",
    "Russian",
    "Dutch",
  ];

  const freeLanguages = ["Igbo", "Yoruba", "Hausa"];

  const handleLanguagePress = (language) => {
    if (!freeLanguages.includes(language)) {
      Alert.alert("Language Unavailable for this Demo");
      return;
    }
    setSelectedLanguageLocal(language);
  };

  const handleContinue = () => {
    setSelectedLanguage(selectedLanguageLocal);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <Text style={styles.subtitle}>Free lessons for English speakers</Text>

      <ScrollView style={styles.languageContainer} showsVerticalScrollIndicator={false}>
        {languages.map((language) => {
          const isLocked = !freeLanguages.includes(language);
          const isSelected = selectedLanguageLocal === language;

          return (
            <TouchableOpacity
              key={language}
              style={[
                styles.languageRow,
                isSelected && styles.selectedLanguageRow,
                isLocked && styles.lockedLanguageRow,
              ]}
              onPress={() => handleLanguagePress(language)}
            >
              <Text
                style={[
                  styles.languageText,
                  isSelected && styles.selectedLanguageText,
                  isLocked && styles.lockedLanguageText,
                ]}
              >
                {language}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, !selectedLanguageLocal && styles.disabledButton]}
        disabled={!selectedLanguageLocal}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Start learning</Text>
      </TouchableOpacity>
    </View>
  );
}