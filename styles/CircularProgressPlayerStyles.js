import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 280,
    height: 280,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  svg: {
    position: "absolute",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
  },

  timer: {
    color: "white",
    fontSize: 48,
    fontWeight: "300",
    marginBottom: 20,
  },

  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  playText: {
    fontSize: 40,
    marginLeft: 5,
  },
});