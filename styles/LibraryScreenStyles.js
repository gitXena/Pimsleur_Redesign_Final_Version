
//LibraryScreenStyle.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 40,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },

  languageContainer: {
    flex: 1,
  },

  languageRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#CFCFCF",
    paddingVertical: 18,
  },

  selectedLanguageRow: {
    backgroundColor: "#E8EEFF",
  },

  languageText: {
    fontSize: 18,
    color: "#333",
  },

  selectedLanguageText: {
    color: "#2448F5",
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#2448F5",
    height: 55,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  disabledButton: {
    backgroundColor: "#B8B8B8",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  lockedLanguageRow: {
    opacity: 0.4,
  },

  lockedLanguageText: {
    color: "#333",
  },
});