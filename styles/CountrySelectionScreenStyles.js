import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    paddingTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#7A7A7A",
    marginTop: 8,
    marginBottom: 20,
  },

  listContainer: {
    flex: 1,
    width: "90%",
    marginTop: 10,
  },

  countryRow: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9", // gray divider line
    justifyContent: "center",
  },

  selectedCountryRow: {
    backgroundColor: "#E8EEFF",
  },

  countryText: {
    fontSize: 16,
    color: "#333",
  },

  selectedCountryText: {
    color: "#2448F5",
    fontWeight: "600",
  },

  nextButton: {
    width: "82%",
    height: 54,
    borderRadius: 27,
    backgroundColor: "#2448F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  disabledButton: {
    backgroundColor: "#BFC6D8",
  },

  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },

  disabledButtonText: {
    color: "#E8E8E8",
  },
});