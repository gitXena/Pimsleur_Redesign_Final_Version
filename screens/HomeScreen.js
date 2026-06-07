
//HomeScreen.js 
import React, { useContext} from "react";
import {
  View, Text, TouchableOpacity, ScrollView, ImageBackground, Alert,
} from "react-native";

import LessonCard from "../components/LessonCard";
import BottomNavBar from "../components/BottomNavBar";
import { LanguageContext } from "../contexts/LanguageContext.js";
import styles from "../styles/HomeScreenStyles";
import { useState } from "react";

function HomeScreen({ navigation }) {
  const { selectedLanguage } = useContext(LanguageContext);

  const totalLessons = 30;
  const completedLessons = 1; // however many are done
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      blurRadius={50}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>Pimsleur</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Text style={styles.menuicon}>☰</Text>
          </TouchableOpacity>
        </View>
           <View style={styles.progressBarContainer}>
          {Array.from({ length: totalLessons }).map((_, i) => (
            <View
              key={i}
              style={
                i === activeIndex
                  ? styles.progressDotActive
                  : i < completedLessons
                  ? styles.progressDotDone
                  : styles.progressDot
              }
            />
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Library")} style={styles.levelRow}>
       
        <Text style={styles.levelText}>
          {selectedLanguage ? `${selectedLanguage} Level 1` : "Select a language"}
        </Text> 
        <Text style={styles.levelArrow}>⇄</Text>
        </TouchableOpacity>



        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }} // vertically centers card
        >
          {[...Array(10)].map((_, index) => (
            <LessonCard
              key={index}
              lessonNumber={index + 1}
              navigation={navigation}
              selectedLanguage={selectedLanguage}
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.unlockButton}
          onPress={() =>
            Alert.alert(
              "Payment Unavailable",
              "Payment Unavailable in Demo"
            )
          }
        >
          <Text style={styles.unlockText}>UNLOCK ALL LESSONS</Text>
        </TouchableOpacity>

        <BottomNavBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;