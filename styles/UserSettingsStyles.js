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
    padding: 16,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },

  userName: {
    fontSize: 16,
    color: "#2450F5",
    fontWeight: "500",
  },

  addUser: {
    color: "#2450F5",
    marginTop: 16,
    fontSize: 15,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  popup: {
    width: "85%",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
  },

  popupTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "#222",
  },

  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  confirm: {
    fontSize: 16,
    color: "#2450F5",
    marginBottom: 16,
  },

  cancel: {
    fontSize: 16,
    color: "#FF3B30",
  },
});