import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import styles from "../styles/UserSettingsStyles";

export default function UserSettingsScreen({
  navigation,
}) {
  const [showPopup, setShowPopup] =
    useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Users</Text>

        <View style={{ width: 30 }} />
      </View>

      <View style={styles.card}>
        <View style={styles.userRow}>
<View
  style={{
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#2450F5",
    marginRight: 12,
  }}
/>

<Text style={styles.userName}>
  User
</Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowPopup(true)}
        >
          <Text style={styles.addUser}>
            + Add a new user
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showPopup}
        transparent
        animationType="fade"
      >
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <Text style={styles.popupTitle}>
              Create new user
            </Text>

            <TextInput
              placeholder="Input a new user name here"
              style={styles.input}
            />

            <TouchableOpacity
              onPress={() =>
                setShowPopup(false)
              }
            >
              <Text style={styles.confirm}>
                Confirm
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setShowPopup(false)
              }
            >
              <Text style={styles.cancel}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}