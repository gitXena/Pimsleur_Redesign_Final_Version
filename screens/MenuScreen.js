
//MenuScreen.js
import React from "react";
import {useState} from "react";
// import useAndroidRippleForView from "react-native/types_generated/Libraries/Components/Pressable/useAndroidRippleForView";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";

import styles from "../styles/MenuScreenStyles";
import { Ionicons } from "@expo/vector-icons";



export default function MenuScreen({ navigation }) {
    const [showSignOut, setShowSignOut] =
  useState(false);

  return (
        <ImageBackground
          source={require("../assets/images/background.png")}
          style={styles.background}
          blurRadius={50}
        >
      <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back"
            size={34}
            color="#FFF"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Menu</Text>

<TouchableOpacity
  style={styles.restoreButton}
  onPress={() =>
    Alert.alert(
      "Payment Unavailable",
      "Payment Unavailable in Demo"
    )
  }
>
  <Ionicons
    name="refresh-outline"
    size={24}
    color="#FFF"
  />
  <Text style={styles.restoreText}>
    Restore
  </Text>
</TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
<TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate("Library")}
>
  <View style={styles.cardLeft}>
    <Ionicons
      name="compass-outline"
      size={34}
      color="#2450F5"
    />

    <Text style={styles.cardText}>
      Library
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={28}
    color="#BDBDBD"
  />
</TouchableOpacity>

<TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate("HelpSupport")}
>
  <View style={styles.cardLeft}>
    <Ionicons
      name="heart-outline"
      size={34}
      color="#2450F5"
    />

    <Text style={styles.cardText}>
      Help
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={28}
    color="#BDBDBD"
  />
</TouchableOpacity>

<TouchableOpacity
  style={styles.card}
  onPress={() => {}}
>
  <View style={styles.cardLeft}>
    <Ionicons
      name="warning-outline"
      size={34}
      color="#2450F5"
    />

    <Text style={styles.cardText}>
      Report a Problem
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={28}
    color="#BDBDBD"
  />
</TouchableOpacity>

<TouchableOpacity
  style={styles.card}
  onPress={() => navigation.navigate("AboutApp")}
>
  <View style={styles.cardLeft}>
    <Ionicons
      name="information-circle-outline"
      size={34}
      color="#2450F5"
    />

    <Text style={styles.cardText}>
      About This App
    </Text>
  </View>

  <Ionicons
    name="chevron-forward"
    size={28}
    color="#BDBDBD"
  />
</TouchableOpacity>

        <View style={styles.settingsCard}>
        <View style={styles.settingsHeader}>
          <Ionicons
            name="options-outline"
            size={34}
            color="#2450F5"
          />

          <Text style={styles.settingsTitle}>
            Settings
          </Text>
        </View>

          <TouchableOpacity

            style={styles.settingRow}
            onPress={() => navigation.navigate("GeneralSettings")}
          >
            <Text style={styles.settingText}>General</Text>
            <Text style={styles.arrow}>
          <Ionicons
        name="chevron-forward"
        size={24}
        color="#BDBDBD"
      />
</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            onPress={() => navigation.navigate("UserSettings")}
          >
            <Text style={styles.settingText}>Users</Text>
            <Text style={styles.arrow}><Ionicons
  name="chevron-forward"
  size={24}
  color="#BDBDBD"
/>
</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingRow}
            onPress={() => navigation.navigate("LegalSettings")}
          >
            <Text style={styles.settingText}>Legal</Text>
            <Text style={styles.arrow}><Ionicons
  name="chevron-forward"
  size={24}
  color="#BDBDBD"
/>
</Text>
          </TouchableOpacity>

        <TouchableOpacity
        style={styles.settingRow}
        onPress={() => setShowSignOut(true)}
        >
        <Text style={styles.settingText}>
            Sign Out
        </Text>
        <Text style={styles.arrow}><Ionicons
  name="chevron-forward"
  size={24}
  color="#BDBDBD"
/>
</Text>
        </TouchableOpacity>


          <Modal
            visible={showSignOut}
            transparent
            animationType="fade"
            >
            <View style={styles.overlay}>
                <View style={styles.popup}>
                <Text style={styles.popupMessage}>
                    Confirm sign out.
                    {"\n"}
                    Course progress will be saved.
                    {"\n"}
                    (save will not apply in demo)                    
                </Text>

                <TouchableOpacity
                    onPress={() => {
                    setShowSignOut(false);

                    navigation.reset({
                        index: 0,
                        routes: [
                        {
                            name: "Startup",
                        },
                        ],
                    });
                    }}
                >
                    <Text style={styles.confirm}>
                    Sign Out
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                    setShowSignOut(false)
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
      </ScrollView>
    </View>
    </ImageBackground>
  );
}