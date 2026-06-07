
// ProfileScreen.js

import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { LessonContext } from "../contexts/LessonContext";
import styles from "../styles/ProfileStyles";
import { ProfileContext } from "../contexts/ProfileContext";
import BottomNavBar from "../components/BottomNavBar";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function ProfileScreen({ navigation }) {
  const { selectedLesson } = useContext(LessonContext);
  const currentLesson = selectedLesson || 1;

  const {
    email,
    username,
    setUsername,
    avatar,
    setAvatar,
    streak,
  } = useContext(ProfileContext);

  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [usernameModalVisible, setUsernameModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState(username);

  const avatars = [
    require("../assets/avatars/avatar1.png"),
    require("../assets/avatars/avatar2.png"),
    require("../assets/avatars/avatar3.png"),
    require("../assets/avatars/avatar4.png"),
    require("../assets/avatars/avatar5.png"),
    require("../assets/avatars/avatar6.png"),
  ];

  const confirmUsername = () => {
    if (newUsername.trim()) setUsername(newUsername);
    setUsernameModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      blurRadius={50}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* MENU BUTTON */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>

        {/* PROFILE HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setAvatarModalVisible(true)}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.editAvatarBadge}>
              <Text style={styles.badgeText}>✎</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.userInfo}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.loginInfo}>Login Method</Text>
            <Text style={styles.loginInfo}>{email}</Text>
            <Text style={styles.loginInfo}>Feb 2025 Joined</Text>
          </View>
        </View>

        {/* EDIT USERNAME */}
        <TouchableOpacity
          style={styles.usernameEditButton}
          onPress={() => setUsernameModalVisible(true)}
        >
          <Text style={styles.editText}>Edit Username</Text>
        </TouchableOpacity>

        {/* LESSON + PROGRESS ROW */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.lessonCard}
            onPress={() => navigation.navigate("LessonScreen")}
          >
            <Text style={styles.cardLabel}>Currently</Text>
            <View style={styles.lessonThumb}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
            <Text style={styles.cardTitle}>Lesson {currentLesson}</Text>
          </TouchableOpacity>

          <View style={styles.progressCard}>
            <Text style={styles.cardTitle}>Learning Progress</Text>
            <View style={styles.progressCircleRow}>
              <View style={styles.progressCircle}>
                <Text style={styles.progressPercent}>0%</Text>
              </View>
              <View style={styles.progressMeta}>
                <Text style={styles.progressCount}>0/30</Text>
                <Text style={styles.progressSub}>Lessons{"\n"}Completed</Text>
              </View>
            </View>
          </View>
        </View>

        {/* CHALLENGES */}
        <TouchableOpacity
          style={styles.challengesCard}
          onPress={() =>
            Alert.alert(
              "Payment Unavailable",
              "Payment Unavailable in Demo"
            )
          }
        >
          <Text style={styles.challengeIcon}>🏆</Text>
          <Text style={styles.cardTitleDark}>Challenges</Text>
        </TouchableOpacity>

        {/* STREAK CARD */}
        <View style={styles.streakCard}>
          <View style={styles.streakRow}>
            <View style={styles.streakBlock}>
              <Text style={styles.streakLabel}>Current Streak</Text>
              <Text style={styles.streakNum}>0<Text style={styles.streakDay}> day</Text></Text>
            </View>
            <View style={styles.streakBlock}>
              <Text style={styles.streakLabel}>Best Streak</Text>
              <Text style={styles.streakNum}>0<Text style={styles.streakDay}> day</Text></Text>
            </View>
            <View style={styles.streakBlock}>
              <Text style={styles.streakLabel}>Total Learning</Text>
              <Text style={styles.streakNum}>0<Text style={styles.streakDay}> day</Text></Text>
            </View>
          </View>
          <View style={styles.daysRow}>
            {DAYS.map((d) => (
              <View key={d} style={styles.dayCol}>
                <Text style={styles.dayLabel}>{d}</Text>
                <View style={styles.dayDot} />
              </View>
            ))}
          </View>
        </View>

        {/* SET REMINDERS */}
        <TouchableOpacity
          style={styles.reminderButton}
          onPress={() => navigation.navigate("Reminder")}
        >
          <Text style={styles.reminderIcon}>
                  <Ionicons
                  name="time"
                  size={24}
                  color="#ffffff"
                /></Text>
          <Text style={styles.reminderText}>Set Reminders</Text>
          <Text style={styles.reminderArrow}>
                      <Ionicons
                    name="chevron-forward"
                    size={24}
                    color="#ffffff"
                  />
          </Text>
        </TouchableOpacity>

        {/* CERTIFICATES & VOICE COACH ROW */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.halfCard}
            onPress={() => navigation.navigate("Certificates", { initialTab: "badges" })}
          >
            <Text style={styles.cardTitle}>Certificates & Badges</Text>
            <View style={styles.badgePreview}>
              <Text style={styles.badgePreviewIcon}>🎖️</Text>
            </View>
            <Text style={styles.cardArrow}>
                        <Ionicons
                      name="chevron-forward"
                      size={24}
                      color="#BDBDBD"
                    />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.halfCard}
            onPress={() => navigation.navigate("VoiceCoach")}
          >
            <Text style={styles.cardTitle}>Voice Coach Challenge</Text>
            <Text style={styles.voiceScore}>0</Text>
            <View style={styles.starsRow}>
              {[1, 2, 3].map((s) => (
                <Text key={s} style={styles.starIcon}>
                            <Ionicons
                          name="star-outline"
                          size={24}
                          color="#BDBDBD"
                        />
                </Text>
              ))}
            </View>
            <Text style={styles.voiceSubLabel}>Current Level Score</Text>
            <Text style={styles.cardArrow}>
                        <Ionicons
                      name="chevron-forward"
                      size={24}
                      color="#BDBDBD"
                    />
            </Text>
          </TouchableOpacity>
        </View>

        {/* VOCABULARY & BONUS TRACKS ROW */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.halfCard, styles.lockedCard]}
          onPress={() =>
            Alert.alert(
              "Payment Unavailable",
              "Payment Unavailable in Demo"
            )
          }
          >
            <View style={styles.lockedIconWrap}>
              <Text style={styles.lockedBookIcon}>     
                       <Ionicons
                      name="book"
                      size={40}
                      color="#FFA500"
                    /></Text>
              <View style={styles.lockBadge}>
                <Text style={styles.lockIcon}> 
                  <Ionicons
                      name="lock-closed"
                      size={25}
                      color="#c2c2c8"
                    /></Text>
              </View>
            </View>
            <Text style={styles.cardTitle}>Vocabulary</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.halfCard, styles.lockedCard]}
          onPress={() =>
            Alert.alert(
              "Payment Unavailable",
              "Payment Unavailable in Demo"
            )
          } 
          >
            <View style={styles.lockedIconWrap}>
              <Text style={styles.lockedBookIcon}>              
                <Ionicons
                      name="star"
                      size={50}
                      color="#FFA500"
                    />
                    </Text>
              <View style={styles.lockBadge}>
                <Text style={styles.lockIcon}>
                      <Ionicons
                      name="lock-closed"
                      size={25}
                      color="#c2c2c8"
                    />
                </Text>
              </View>
            </View>
            <Text style={styles.cardTitle}>Bonus Tracks</Text>
          </TouchableOpacity>
        </View>

        {/* VOICE COACH PRACTICE */}
        <TouchableOpacity
          style={styles.voicePracticeCard}
          onPress={() => navigation.navigate("VoiceCoach")}
        >
          <Text style={styles.cardTitle}>Voice Coach</Text>
          <View style={styles.voicePracticeRow}>
            <Text style={styles.micIcon}>          
              <Ionicons
                      name="mic"
                      size={24}
                      color="#fff"
                    />
                    </Text>
            <Text style={styles.voicePracticeNum}>0</Text>
          </View>
          <Text style={styles.voicePracticeLabel}>Practice Set</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavBar navigation={navigation} />

      {/* AVATAR MODAL */}
      <Modal visible={avatarModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Choose an Avatar</Text>
            <View style={styles.avatarGrid}>
              {avatars.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setAvatar(item);
                    setAvatarModalVisible(false);
                  }}
                >
                  <Image source={item} style={styles.modalAvatar} />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => setAvatarModalVisible(false)}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* USERNAME MODAL */}
      <Modal visible={usernameModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Edit Username</Text>
            <TextInput
              style={styles.input}
              value={newUsername}
              onChangeText={setNewUsername}
              placeholder="Username"
            />
            <TouchableOpacity style={styles.confirmButton} onPress={confirmUsername}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setUsernameModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
