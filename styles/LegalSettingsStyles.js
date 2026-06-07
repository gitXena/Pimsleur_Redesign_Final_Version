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
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  arrow: {
    fontSize: 24,
    color: "#888",
  },
});