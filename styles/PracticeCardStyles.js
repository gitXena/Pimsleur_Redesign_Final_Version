import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 15,
    minHeight: 78,
    height: 100,
  },

  iconContainer: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "#111",
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    lineHeight: 16,
  },

  image: {
  width: 90,
  height: 90,
  borderRadius: 12,
  marginRight: 14,
},

lockedCard: {
  opacity: 0.55,
},

lockedImage: {
  opacity: 0.5,
},

lockedText: {
  color: "#A9A9A9",
},

icon: {
  marginRight: 12,
  color: "#1745FA",
},
});