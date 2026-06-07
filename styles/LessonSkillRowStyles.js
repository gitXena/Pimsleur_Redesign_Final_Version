import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  header: {
    color: "#777",
    fontSize: 12,
    marginBottom: 15,
  },

  skillsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  skill: {
    alignItems: "center",
    width: 70,
  },

  circle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: "#9A9A9A",
    backgroundColor: "#A9A9A9",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 8,
    color: "#666",
  },
});