
//PracticeScreenStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "600",
  },

  menu: {
    color: "#FFF",
    fontSize: 28,
  },

  subtitle: {
    color: "#FFF",
    fontSize: 13,
    marginTop: 8,
    marginBottom: 25,
    opacity: 0.9,
  },
});