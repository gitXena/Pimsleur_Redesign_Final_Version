import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    marginBottom: 12,
    minHeight: 82,
  },

  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#9C9C9C",
    backgroundColor: "#BDBDBD",
    marginRight: 16,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginBottom: 4,
  },

  progress: {
    fontSize: 12,
    color: "#7A7A7A",
  },
});