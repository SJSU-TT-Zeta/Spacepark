import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    width: "100%",
  },
  title: {
    fontSize: 30,
  },
  button: {
    //width: 70,
    //height: 20,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#15AB69",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 20,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 8,
    marginBottom: 8,
    alignSelf: "center",
  },
  contentItem: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#15AB69",
    width: "85%",
    marginTop: 10,
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
  contentText: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 18,
  },
  contentText2: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default styles;
