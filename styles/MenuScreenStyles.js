
//MenuScreenStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    background: {
    flex: 1,
  },

  container: {
    flex: 1,
    // backgroundColor: "#F4F4F4",
  },

  header: {
    // backgroundColor: "#2450F5",
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  headerTitle: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "700",
  },

  content: {
    paddingHorizontal: 20,
    marginTop: -40,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

cardText: {
  fontSize: 18,
  fontWeight: "600",
  color: "#111",
  marginLeft: 16,
},

  arrow: {
    fontSize: 28,
    color: "#888",
  },

  settingsCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingVertical: 10,
    marginTop: 8,
    marginBottom: 40,
  },

  settingsTitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },

  settingText: {
    color: "#444",
    fontSize: 15,
  },

  overlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  justifyContent: "center",
  alignItems: "center",
},

popup: {
  width: "80%",
  backgroundColor: "#FFF",
  borderRadius: 18,
  padding: 24,
  alignItems: "center",
},

popupTitle: {
  fontSize: 18,
  fontWeight: "600",
  marginBottom: 20,
},

popupMessage: {
  textAlign: "center",
  fontSize: 15,
  marginBottom: 20,
},

input: {
  width: "100%",
  borderWidth: 1,
  borderColor: "#888",
  borderRadius: 20,
  paddingHorizontal: 15,
  height: 45,
  marginBottom: 20,
},

confirm: {
  color: "#2450F5",
  fontSize: 16,
  marginBottom: 15,
},

cancel: {
  color: "#FF3B30",
  fontSize: 16,
},

backButton: {
  position: "absolute",
  left: 20,
  top: 65,
},

restoreButton: {
  position: "absolute",
  right: 20,
  top: 68,
  flexDirection: "row",
  alignItems: "center",
},

restoreText: {
  color: "#FFF",
  fontSize: 16,
  fontWeight: "600",
  marginLeft: 4,
},

cardLeft: {
  flexDirection: "row",
  alignItems: "center",
},

settingsHeader: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 18,
  paddingVertical: 12,
},

settingsTitle: {
  fontSize: 18,
  fontWeight: "600",
  marginLeft: 12,
},
});