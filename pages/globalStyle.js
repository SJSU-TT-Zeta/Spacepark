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
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 38,
    height: 38,
    marginLeft: "auto",
    marginRight: 8,
  },
  backArrow: {
    marginLeft: 8,
  },
});

export default globalStyles;
