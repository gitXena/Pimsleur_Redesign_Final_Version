
// VoiceCoachScreenStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },

  subtitle: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },

  menu: {
    color: "#fff",
    fontSize: 28,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  pathButton: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 25,
  },

  pathTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },

  description: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 70,
    paddingHorizontal: 10,
  },

  reportContainer: {
    alignItems: "center",
    marginBottom: 25,
  },

  reportText: {
    color: "#fff",
    fontSize: 13,
  },
});