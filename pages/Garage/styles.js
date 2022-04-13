import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerItem: {
    marginLeft: 10,
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  refresh: {},
  title: {
    fontSize: 30,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
  contentItem: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "85%",
    marginTop: 20,
  },
  circle: {
    width: 120,
  },
  contentItemWrap: {
    flexDirection: "row",
  },
  contentItemWrapWrap: {
    flexDirection: "column",
  },
  button: {
    width: 70,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    color: "#252629",
  },
  progressTitle: {
    color: "#252629",
  },
});

export default styles;
