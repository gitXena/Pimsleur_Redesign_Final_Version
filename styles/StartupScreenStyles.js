import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 60,
    paddingHorizontal: 30,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },

  brandName: {
    fontSize: 42,
    fontWeight: "600",
    color: "#132B7D",
  },

  tagline: {
    marginTop: 10,
    fontSize: 24,
    color: "#000",
    textAlign: "center",
  },

  bottomContainer: {
    width: "100%",
    alignItems: "center",
  },

  signInButton: {
    width: "100%",
    height: 58,
    backgroundColor: "#2F54FF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  signInText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  createAccountText: {
    color: "#fff",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});

export default styles;