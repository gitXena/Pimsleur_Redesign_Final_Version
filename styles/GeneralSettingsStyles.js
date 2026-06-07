import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  back: {
    fontSize: 30,
    color: "#444",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  setting: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  settingTitle: {
    fontSize: 15,
    color: "#222",
    marginBottom: 6,
  },

  settingDescription: {
    fontSize: 12,
    color: "#888",
    lineHeight: 18,
  },
});