import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  back: {
    fontSize: 32,
    color: "#444",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 20,
    minHeight: 180,
  },

  description: {
    fontSize: 15,
    color: "#444",
    lineHeight: 24,
  },
});