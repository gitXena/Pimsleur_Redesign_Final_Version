import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  back: {
    fontSize: 32,
    color: "#000",
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 20,
    marginBottom: 15,
  },

  category: {
    color: "#8E8E8E",
    fontSize: 12,
    marginBottom: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 25,
  },

  audioControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },

  playButton: {
    fontSize: 52,
    color: "#000",
  },

  progressBarContainer: {
  width: "100%",
  height: 8,
  backgroundColor: "#E0E0E0",
  borderRadius: 4,
  overflow: "hidden",
  marginTop: 20,
},

progressBarFill: {
  height: "100%",
  backgroundColor: "#4CAF50",
  borderRadius: 4,
},

progressText: {
  marginTop: 8,
  alignSelf: "center",
  fontSize: 14,
  color: "#666",
},
});