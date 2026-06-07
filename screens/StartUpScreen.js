import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import styles from "../styles/StartupScreenStyles";

export default function StartUpScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/istockphoto-603856360-612x612.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark Overlay */}
      <View style={styles.overlay}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.brandName}>Pimsleur</Text>

          <Text style={styles.tagline}>
            Outstanding Understanding
          </Text>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("CountrySelection")}
          >
            <Text style={styles.createAccountText}>
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}