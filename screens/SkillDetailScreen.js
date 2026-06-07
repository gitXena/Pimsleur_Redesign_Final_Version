import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/SkillDetailStyles";

function SkillDetailScreen({
  route,
  navigation
}) {
  return (
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={styles.container}
          resizeMode="cover"
          blurRadius={50}
        >
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.goBack()
        }
      >
        <Text style={styles.back}>
                 <Ionicons name="chevron-back" size={28} color="#FFF" />
      </Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        {route.params.skillName}
      </Text>

      <Text style={styles.progress}>
        0/0
      </Text>

      <TouchableOpacity
        style={styles.lessonCard}
      >
        <View
          style={styles.iconCircle}
        />

        <Text>
          Skill Content Unavailable in demo
        </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

export default SkillDetailScreen;