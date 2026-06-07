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
    paddingHorizontal: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },

  rowText: {
    fontSize: 15,
    color: "#333",
  },

  arrow: {
    fontSize: 24,
    color: "#888",
  },
});