import { StyleSheet } from "react-native";

export default StyleSheet.create({

      background: {
    flex: 1,
  },

  container: {
    flex: 1,
    // backgroundColor: "#1745FA",
    paddingTop: 55,
    paddingHorizontal: 24,
  },

  back: {
    color: "#FFF",
    fontSize: 28,
    marginBottom: 10,
  },

  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
  },

  subtitle: {
    color: "#FFF",
    fontSize: 13,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
    opacity: 0.9,
    paddingHorizontal: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },

  startButton: {
    backgroundColor: "#FFF",
    height: 52,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 40,
  },

  disabled: {
    opacity: 0.4,
  },
});