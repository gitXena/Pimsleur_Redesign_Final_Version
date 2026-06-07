import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#D9D9D9",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6D8BFF",
    marginRight: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#222",
  },

  description: {
    fontSize: 12,
    color: "#777",
    lineHeight: 18,
    marginBottom: 25,
    paddingLeft: 55,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },

  statContainer: {
    alignItems: "center",
  },

  statCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#6D8BFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  statText: {
    fontSize: 10,
    color: "#444",
    textAlign: "center",
  },
});