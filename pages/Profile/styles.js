import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    height: "100%",
  },
  profileWrap: {
    marginTop: "2%",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  logo: {
    width: 38,
    height: 38,
    marginLeft: "auto",
    marginRight: 8,
    marginTop: 13,
  },
  back: {
    marginTop: 13,
    marginLeft: 8,
  },
  formInput: {
    width: 300,
    height: 70,
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 45,
    marginTop: "2%",
    backgroundColor: "#15AB69",
    marginLeft: "auto",
    borderRadius: 10,
  },
  buttonLogin: {
    fontSize: 20,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    color: "#FFFFFF",
  },
  signQ: {
    marginTop: 40,
    fontSize: 18,
  },
  signUp: {
    fontSize: 20,
    color: "#15AB69",
    textDecorationLine: "underline",
  },
  buttonText: {
    fontSize: 20,
  },
  logout: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  logoutWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  logIcon: {
    marginLeft: 8,
  },
  logText: {
    fontSize: 22,
  },
  delete: {
    marginBottom: 12,
  },
  del: {
    flexDirection: "column",
    alignItems: "center",
  },
  delText: {
    fontSize: 20,
    color: "#E41919",
  },
  content: {
    marginTop: "auto",
    marginBottom: "auto",
    transform: [{ translateY: -50 }],
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 26,
    marginBottom: 5,
  },
  titleTwo: {
    fontSize: 26,
    marginBottom: 25,
  },
  text: {
    fontSize: 20,
    marginTop: 16,
  },
  formItem: {
    width: Dimensions.get("window").width,
    flexDirection: "row",
    height: 45,
    marginBottom: 15,
  },
  formText: {
    marginLeft: "auto",
    fontSize: 18,
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  formInput: {
    width: "90%",
    marginRight: "auto",
    borderWidth: 2,
    borderColor: "#15AB69",
    height: "100%",
    borderRadius: 10,
    paddingLeft: 10,
  },
  formItem1: {
    width: "30%",
  },
  formItem2: {
    width: "70%",
  },
  formItem3: {
    width: "70%",
    marginLeft: "auto",
  },
  buttonHelper: {
    width: "90%",
    marginRight: "auto",
  },
  userInput1: {
    width: "90%",
    marginRight: "47%",
    borderWidth: 2,
    borderColor: "#15AB69",
    height: "100%",
    borderRadius: 10,
    paddingLeft: "auto",
    paddingRight: "auto",
  },
  userInput2: {
    width: "90%",
    marginRight: "40%",
    borderWidth: 2,
    borderColor: "#15AB69",
    height: "100%",
    borderRadius: 10,
    paddingLeft: "auto",
    paddingRight: "auto",
  },
  buttonText1: {
    fontSize: 20,
    alignSelf: "center",
    color: "#FFFFFF",
    marginTop: "auto",
    marginBottom: "auto",
  },
  buttonSign: {
    marginTop: 10,
    marginLeft: "auto",
    borderRadius: 10,
    backgroundColor: "#15AB69",
    width: 130,
    height: 50,
  },
  formText1: {
    marginLeft: "1%",
    fontSize: 18,
    marginRight: "1%",
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: 23,
    paddingRight: 37,
  },
  formText2: {
    marginLeft: "auto",
    fontSize: 18,
    marginTop: "0.4%",
    marginBottom: "auto",
    paddingLeft: 175,
  },
  formText3: {
    marginLeft: "auto",
    fontSize: 18,
    marginTop: "auto",
    marginBottom: "0.4%",
    paddingLeft: 69,
    paddingRight: 21,
  },
});

export default styles;
