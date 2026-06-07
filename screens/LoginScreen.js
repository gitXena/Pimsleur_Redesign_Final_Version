
//LoginScreen.js
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

export default function LoginScreen({ navigation }) {
const [email, setEmail] =
  useState("user@example.com");

const [password, setPassword] =
  useState("user123");

const handleLogin = () => {
  const validEmail = "user@example.com";
  const validPassword = "user123";

  if (
    email.trim().toLowerCase() !== validEmail ||
    password !== validPassword
  ) {
    setError("Invalid email or password");
    return;
  }

  setError("");

  const usernameFromEmail =
    validEmail.split("@")[0];

  setProfileEmail(validEmail);
  setUsername(usernameFromEmail);

  navigation.navigate("Library");
};

  const {
  setEmail:setProfileEmail,
  setUsername,
} = useContext(ProfileContext);

const [error, setError] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign in</Text>

        <Text style={styles.subtitle}>
          Sign in with the same method you originally used to order your course
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

        {error ? (
        <Text
          style={{
            color: "red",
            marginTop: 8,
            textAlign: "center",
          }}
        >
          {error}
        </Text>
      ) : null}

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>
            Sign in with email
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
            <Text
            style={{
              marginTop: 20,
              textAlign: "center",
              fontSize: 12,
              color: "#666",
              lineHeight: 18,
            }}
          >
            Demo Account{"\n"}
            Email: user@example.com{"\n"}
            Password: user123
          </Text>
      </View>
    </SafeAreaView>
  );
}