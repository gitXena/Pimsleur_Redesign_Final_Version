
//CreateAccountScreen.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import styles from "../styles/LoginScreenStyles";
import {
  ProfileContext,
} from "../contexts/ProfileContext";

export default function CreateAccountScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleCreateAccount = () => {
  const finalEmail =
    email.trim() || "user@example.com";

  const usernameFromEmail =
    finalEmail.split("@")[0];

  setProfileEmail(finalEmail);
  setUsername(usernameFromEmail);

  navigation.navigate("Library");
};

const {
  setEmail: setProfileEmail,
  setUsername,
} = useContext(ProfileContext);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Create an account for your free lesson
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address*</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password*</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleCreateAccount}
        >
          <Text style={styles.loginButtonText}>
            Sign up with email
          </Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>

        <Text style={styles.signupText}>Sign up with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/0/747.png",
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}