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
  comingSoon: {
    fontSize: 17,
    textAlign: "center",
  },
  logo: {
    width: 40,
    height: 40,
  },
  refresh: {},
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
  contentItem: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "85%",
    height: "27%", // change if needed
    marginTop: "5%",
  },
  circle: {
    width: 120,
  },
  contentItemWrap: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  contentItemWrapWrap: {
    flexDirection: "column",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 90,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    alignSelf: "center"
  },
  spotsAvail: {
    textAlign: "center",
  },
  progressText: {
    color: "#252629",
  },
  progressTitle: {
    color: "#252629",
  },
  emptyCircle: {
    width: 108,
    height: 108,
    borderRadius: 120 / 2,
    backgroundColor: 'transparent',
    borderColor: "#B7B7B7",
    borderWidth: 10,
    marginRight: 10,
    justifyContent: "center"
  }
  
});

export default styles;
