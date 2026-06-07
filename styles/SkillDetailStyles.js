import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1F46FF",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  back: {
    color: "#FFF",
    fontSize: 28,
    marginBottom: 10,
  },

  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 4,
  },

  progress: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: 40,
    opacity: 0.8,
  },

  lessonCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    minHeight: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#1F46FF",
    marginRight: 16,
  },
});