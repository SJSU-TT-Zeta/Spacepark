import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8FA",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 38,
    height: 38,
    marginLeft: "auto",
    marginRight: 8,
    marginTop: 13,
  },
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  button: {
    //width: 70,
    //height: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  contentItem: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "85%",
    marginTop: "5%",
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  contentItemTitle: {
    fontSize: 25,
    alignSelf: "center",
  },
});

export default styles;
