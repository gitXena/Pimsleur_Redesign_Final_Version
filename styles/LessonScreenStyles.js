
//LessonScreenStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor:
      "rgba(0,0,0,0.35)",
  },

  topPage: {
    width: 400,
    height: 350,
    alignItems: "center",
    justifyContent: "center",
  },

  lessonCard: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    paddingTop: 20,
    minHeight: 600,
  },
});