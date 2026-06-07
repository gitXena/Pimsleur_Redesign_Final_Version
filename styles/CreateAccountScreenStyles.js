import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    flex: 1,
    backgroundColor: "#E5E5E5",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#000",
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 25,
    lineHeight: 22,
    width: "90%",
  },

  inputContainer: {
    width: "90%",
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },

  input: {
    height: 55,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: "#E5E5E5",
  },

  forgotContainer: {
    width: "90%",
    alignItems: "flex-end",
    marginBottom: 35,
  },

  forgotText: {
    color: "#2451FF",
    fontSize: 15,
    textDecorationLine: "underline",
  },

  loginButton: {
    width: "85%",
    height: 55,
    backgroundColor: "#2451FF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },

  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "500",
  },

  orText: {
    fontSize: 18,
    color: "#000",
    marginBottom: 10,
  },

  signupText: {
    fontSize: 20,
    color: "#333",
    marginBottom: 30,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },

  socialIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});