import { StyleSheet, Dimensions } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F7F8FA",
    height: "100%",
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
    marginTop: 15,
  },
  backArrow: {
    marginTop: 15,
    marginLeft: 20,
    alignSelf: "center",
  },
});

export default globalStyles;
