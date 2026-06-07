
//CertificateStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1D7A",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 5,
    marginBottom: 25,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },

  activeToggle: {
    backgroundColor: "#35C2FF",
  },

  toggleText: {
    color: "#2E6BFF",
    fontWeight: "600",
    fontSize: 15,
  },

  activeToggleText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  content: {
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 24,
    marginBottom: 18,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  bigIcon: {
    fontSize: 60,
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },

  locked: {
    fontSize: 18,
    fontWeight: "700",
    color: "#999",
  },
});