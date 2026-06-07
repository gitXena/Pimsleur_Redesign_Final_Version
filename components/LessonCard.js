
// LessonCard.js
import React from "react";
import { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import lessons from "../data/lessons.js";
import { LessonContext } from "../contexts/LessonContext";

const ACTION_ICONS = [
  { name: "chatbubble-outline", color: "#B0B8C1" },
  { name: "medkit-outline", color: "#B0B8C1" },
  { name: "mic-outline", color: "#B0B8C1" },
  { name: "pencil-outline", color: "#B0B8C1" },
];

const FALLBACK_IMAGE = require("../assets/images/background.png");


export default function LessonCard({ lessonNumber, lesson, navigation, isActive, selectedLanguage }) {
  const isFirst = lessonNumber === 1;
  const scale = isActive ? 1 : 0.88;

  const languageLessons = (selectedLanguage && lessons[selectedLanguage]) ? lessons[selectedLanguage] : [];
  const lessonData = languageLessons.find((l) => l.id === lessonNumber);
  const imageSource = lessonData?.image ?? FALLBACK_IMAGE;

  const { setSelectedLesson } = useContext(LessonContext);

  return (
    <TouchableOpacity
      onPress={() => {
        if (isFirst || isActive) {
          setSelectedLesson({ id: lessonNumber });   // ← add this
          navigation.navigate("LessonScreen");
        }
      }}
      activeOpacity={isFirst || isActive ? 0.85 : 1}
      style={{ width: 400, transform: [{ scale }] }}
    >
      <View style={{
        backgroundColor: "white",
        borderRadius: 24,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 10,
        height: "100%",
      }}>
        
        <Image
          source={imageSource}
          style={{ width: "100%", height: "70%" }}
          resizeMode="cover"
        />

        {/* Reading icon top-right overlay */}
        <View style={{
          position: "absolute", top: 12, right: 12,
          backgroundColor: "rgba(30, 60, 180, 0.85)",
          borderRadius: 14, paddingHorizontal: 10, paddingVertical: 6,
          flexDirection: "row", alignItems: "center", gap: 4,
        }}>
          <Ionicons name="book-outline" size={18} color="#fff" />
          <Ionicons name="chevron-forward-outline" size={14} color="#fff" />
        </View>

        
        {!isFirst && !isActive && (
          <View style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(180, 185, 195, 0.55)",
            justifyContent: "center", alignItems: "center",
          }}>
            <View style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 50, padding: 14,
            }}>
              <Ionicons name="lock-closed" size={32} color="#6B7280" />
            </View>
          </View>
        )}

        {/* Bottom section */}
        <View style={{ paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 }}>
          <Text style={{ fontWeight: "800", fontSize: 26, color: "#111", marginBottom: 16 }}>
            Lesson {lessonNumber}
          </Text>
          <View style={{ height: 1, backgroundColor: "#E5E9EF", marginBottom: 16 }} />
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {ACTION_ICONS.map((icon, idx) => (
              <View key={idx} style={{
                width: 52, height: 52, borderRadius: 26,
                backgroundColor: "#F0F2F5",
                justifyContent: "center", alignItems: "center",
              }}>
                <Ionicons name={icon.name} size={24} color={icon.color} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}