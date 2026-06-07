
//HomeScreenStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  blur: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  header: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(255,255,255,0.3)",
    paddingBottom: 15,
  },

  logo: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "600",
  },

  menuicon: {
    fontSize: 30,
    color: "#FFF",
  },

  // Level row: arrow + text + arrow, centred
  levelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    marginBottom: 14,
    gap: 8,
  },

  levelText: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "700",
    textDecorationLine: "none",
  },

  levelArrow: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "600",
  },

  // Progress dot bar
  progressBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 16,
    flexWrap: "wrap",
    gap: 4,
  },

  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.35)",
  },

  progressDotDone: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFF",
  },

  progressDotActive: {
    width: 22,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFC845",
  },

  // Carousel
  carousel: {
    flex: 1,
  },

  carouselContent: {
    alignItems: "center",
    paddingHorizontal: (width - 300) / 2,
  },

  unlockButton: {
    marginHorizontal: 30,
    marginBottom: 28,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: "#E8210A",
  },

  unlockText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 15,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
});