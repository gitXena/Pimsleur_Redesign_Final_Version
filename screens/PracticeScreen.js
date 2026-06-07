
//PracticeScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";

import PracticeCard from "../components/PracticeCard";
import styles from "../styles/PracticeScreenStyles";
import BottomNavBar from "../components/BottomNavBar";

function PracticeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
      blurRadius={50}
    >

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Practice</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Text style={styles.menu}>☰</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
          Practice content for completed Lessons
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <PracticeCard
            title="Flash Cards"
            subtitle="Master essential vocabulary"
            onPress={() => navigation.navigate("LessonSelector", { practiceMethod: "Flash Cards" })}
            icon="albums-outline"
          />
          <PracticeCard
            title="Skills"
            subtitle="Earn new language Skills"
            onPress={() => navigation.navigate("Skills")}
            icon="ribbon-outline"
          />
          <PracticeCard
            title="Quick Match"
            subtitle="Challenge yourself"
            onPress={() => navigation.navigate("LessonSelector", { practiceMethod: "Quick Match" })}
            icon="flash-outline"
          />
          <PracticeCard
            title="Speak Easy"
            subtitle="Review conversations"
            onPress={() => navigation.navigate("LessonSelector", { practiceMethod: "Speak Easy" })}
            icon="chatbubble-outline"
          />
          <PracticeCard
            title="Speed Round"
            subtitle="Fast challenge mode"
            onPress={() => navigation.navigate("LessonSelector", { practiceMethod: "Speed Round" })}
            icon="timer-outline"
          />
          <PracticeCard
            title="Bonus Packs"
            subtitle="Complete 5 lessons"
            onPress={() => navigation.navigate("LessonSelector", { practiceMethod: "Bonus Packs" })}
            icon="gift-outline"
          />
        </ScrollView>

        <BottomNavBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
}

export default PracticeScreen;