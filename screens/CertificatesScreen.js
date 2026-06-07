
//CertificateScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "../styles/CertificatesStyles";

export default function CertificatesScreen({
  navigation,
  route,
}) {
  const initialTab =
    route?.params?.initialTab || "badges";

  const [activeTab, setActiveTab] =
    useState(initialTab);

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >
          <Text style={styles.backText}>
            ←
          </Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Achievements
        </Text>

        <View />
      </View>

      {/* TOGGLE */}

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab ===
              "badges" &&
              styles.activeToggle,
          ]}
          onPress={() =>
            setActiveTab("badges")
          }
        >
          <Text
            style={[
              styles.toggleText,
              activeTab ===
                "badges" &&
                styles.activeToggleText,
            ]}
          >
            Badges
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab ===
              "certificates" &&
              styles.activeToggle,
          ]}
          onPress={() =>
            setActiveTab(
              "certificates"
            )
          }
        >
          <Text
            style={[
              styles.toggleText,
              activeTab ===
                "certificates" &&
                styles.activeToggleText,
            ]}
          >
            Certificates
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={
          false
        }
      >
        {activeTab === "badges" ? (
          <>
            <View style={styles.card}>
              <Text
                style={styles.bigIcon}
              >
                🏅
              </Text>

              <Text
                style={styles.title}
              >
                Badges Awarded
              </Text>

              <Text
                style={
                  styles.description
                }
              >
                Master all 30 lessons
                in Challenge Mode
                to earn a badge.
              </Text>
            </View>

            <View style={styles.card}>
              <Text
                style={styles.locked}
              >
                🔒 Locked
              </Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.card}>
              <Text
                style={styles.bigIcon}
              >
                📜
              </Text>

              <Text
                style={styles.title}
              >
                Language
                Certification
              </Text>

              <Text
                style={
                  styles.description
                }
              >
                Complete all 30
                lessons and master
                Challenge Mode to
                unlock your language
                certificate.
              </Text>
            </View>

            <View style={styles.card}>
              <Text
                style={styles.locked}
              >
                🔒 Locked
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}