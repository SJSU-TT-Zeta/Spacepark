import { CurrentRenderContext } from "@react-navigation/native";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  title: {
    alignItems: "center",
    fontSize: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerItem: {
    marginLeft: "auto",
    marginRight: 15,
    width: 30,
    height: 30,
  },
  logo: {
    width: 10,
    height: 10,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
  contentItemWrap: {
    flexDirection: "row",
  },
  contentItemWrapWrap: {
    flexDirection: "column",
  },
  button: {
    width: Dimensions.get("window").width * 0.85,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    alignItems: "flex-start",
    marginLeft: "5%",
  },
  reviewButton: {
    width: Dimensions.get("window").width * 0.85,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#15AB69",
    height: 50,
    marginTop: "5%",
  },
  submitButton: {
    width: Dimensions.get("window").width * 0.65,
    height: 35,
    backgroundColor: "#15AB69",
    marginTop: "2.5%",
<<<<<<< HEAD
    borderRadius: 5,
=======
>>>>>>> page for user reviews
  },
  submitTitle: {
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  starBox: {
    width: Dimensions.get("window").width * 0.65,
    height: 45,
    marginTop: "5%",
  },
  review: {
    width: Dimensions.get("window").width * 0.9,
    borderColor: "#15AB69",
    borderWidth: 1.5,
    borderRadius: 10,
    minHeight: 60,
    padding: 8,
    marginTop: "5%",
    textAlign: "center",
  },
  starDisplay: {
    //width: Dimensions.get("window").width * 0.35,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  reviewName: {
    fontSize: 17,
  },
});

export default styles;
