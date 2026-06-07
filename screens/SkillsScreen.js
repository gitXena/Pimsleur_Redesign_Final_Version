
//SkillScreen.js
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SkillCard from "../components/SkillCard";

function SkillsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.container}
      resizeMode="cover"
      blurRadius={50}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="#FFF" />
      </TouchableOpacity>

      <Text style={styles.title}>Skills</Text>

      <Text style={styles.subtitle}>
        Earn new language skills with each completed lesson. Click on the badge to review.
      </Text>

      <View style={styles.cardList}>
        <SkillCard
          title="Meet + Greet"
          progress="0/4"
          iconName="chatbox-ellipses-outline"
          onPress={() => navigation.navigate("SkillDetail", { skillName: "Meet + Greet" })}
        />
        <SkillCard
          title="Survival Skills"
          progress="0/7"
          iconName="medkit-outline"
          onPress={() => navigation.navigate("SkillDetail", { skillName: "Survival Skills" })}
        />
        <SkillCard
          title="Speak + Understand"
          progress="0/4"
          iconName="mic-outline"
          onPress={() => navigation.navigate("SkillDetail", { skillName: "Speak + Understand" })}
        />
        <SkillCard
          title="Polite Phrases"
          progress="0/1"
          iconName="pencil-outline"
          onPress={() => navigation.navigate("SkillDetail", { skillName: "Polite Phrases" })}
        />
        <SkillCard
          title="General Phrases"
          progress="0/1"
          iconName="globe-outline"
          onPress={() => navigation.navigate("SkillDetail", { skillName: "General Phrases" })}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 4,
  },
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 13,
    marginBottom: 20,
    lineHeight: 19,
    paddingHorizontal: 10,
  },
  cardList: {
    flex: 1,
  },
});

export default SkillsScreen;