
// EnrichScreen.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  ImageBackground,
  StyleSheet,
  Alert
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/EnrichScreenStyles";
import { enrichContent } from "../data/enrichContent";
import BottomNavBar from "../components/BottomNavBar";import { LanguageContext } from "../contexts/LanguageContext";

export default function EnrichScreen({ route, navigation }) {
const { selectedLanguage } = useContext(LanguageContext);
const language = selectedLanguage || "Igbo";

  const lessons = enrichContent[language] || [];

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const filters = ["All", "Culture", "Conversation Skills", "Grammar"];

  const filteredLessons =
    selectedFilter === "All"
      ? lessons
      : lessons.filter((item) => item.category === selectedFilter);

      
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
      blurRadius={50}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Minis</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
            <Text style={styles.menu}>☰</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilter(true)}
        >
            <Ionicons
            name="funnel-outline"
            size={20}
            color="#3661f1"
          />
        </TouchableOpacity>

<FlatList
  data={filteredLessons}
  keyExtractor={(item) => item.id.toString()}
  contentContainerStyle={{ paddingBottom: 100 }}
  renderItem={({ item, index }) => {
    const locked = index > 1;

    return (
      <TouchableOpacity
        style={[
          styles.card,
          locked && {
            opacity: 0.55,
          },
        ]}
        onPress={() => {
          if (locked) {
            Alert.alert(
              "Payment Unavailable in Demo"
            );
            return;
          }

          navigation.navigate("MiniLesson", {
            lesson: item,
            language,
          });
        }}
      >
        <ImageBackground
          source={
            item.image ||
            require("../assets/images/background.png")
          }
          style={{
            width: 110,
            height: "100%",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            overflow: "hidden",
            marginRight: 14,
          }}
          resizeMode="cover"
        />

        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={[
              styles.category,
              locked && { color: "#A0A0A0" },
            ]}
          >
            {item.category}
          </Text>

          <Text
            style={[
              styles.cardTitle,
              locked && { color: "#A0A0A0" },
            ]}
          >
            {item.title}
          </Text>

          <Text
            style={[
              styles.duration,
              locked && { color: "#A0A0A0" },
            ]}
          >
            {item.duration}
          </Text>
        </View>

        {locked && (
          <Ionicons
            name="lock-closed"
            size={30}
            color="#B0B0B0"
            style={{
              marginRight: 10,
            }}
          />
        )}
      </TouchableOpacity>
    );
  }}
/>

        <Modal visible={showFilter} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modal}>
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={styles.filterOption}
                  onPress={() => {
                    setSelectedFilter(filter);
                    setShowFilter(false);
                  }}
                >
                  <Text>{filter}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>

        <BottomNavBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
}