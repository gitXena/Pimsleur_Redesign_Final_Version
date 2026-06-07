
// EnrichScreenStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 25,
    marginBottom: 25,
  },

  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
  },

  menu: {
    color: "#FFF",
    fontSize: 30,
  },

  filterButton: {
    position: "absolute",
    right: 25,
    top: 140,
    zIndex: 10,
    backgroundColor: "#FFF",
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 25,
    marginBottom: 15,
    borderRadius: 20,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flexDirection: "row",
    overflow: "hidden",
    minHeight: 78,
    elevation: 2,
    height: 100,
  },

  category: {
    color: "#8A8A8A",
    fontSize: 12,
    marginBottom: 5,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  duration: {
    marginTop: 8,
    color: "#2447F3",
    fontSize: 12,
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  modal: {
    backgroundColor: "#FFF",
    width: "75%",
    borderRadius: 20,
    paddingVertical: 15,
  },

  filterOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
});