// AudioOnlyStyles.js

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  lessonTitle: {
    marginTop: 70,
    textAlign: "center",
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 1,
  },

  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  playButton: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  timer: {
    marginTop: 40,
    color: "#FFF",
    fontSize: 72,
    fontWeight: "700",
  },

  controlsContainer: {
    height: 180,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },

  controlButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  divider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  controlText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: -10,
  },

  backButton: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "400",
  },
});