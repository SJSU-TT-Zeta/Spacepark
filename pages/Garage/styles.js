import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    height: "100%",
  },
  header: {
    minHeight: 50,
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
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginBottom: 10,
  },
  contentItem: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "90%",
    marginTop: 10,
    elevation: 1,
    padding: 10,
  },
  circle: {
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  contentItemWrap: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  contentItemWrap2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.9 - 120,
    marginTop: 10,
    marginBottom: 10,
  },
  emptyCircleWrap: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 15,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  deactive: {
    borderColor: "grey",
    color: "grey",
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
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "transparent",
    borderColor: "#B7B7B7",
    borderWidth: 10,
    justifyContent: "center",
  },
  contentItemWrapWrap: {
    width: Dimensions.get("window").width * 0.9 - 140,
    alignSelf: "center",
  },
  textForeignFix: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  textNorm: {
    fontSize: 18,
    margin: 5,
  },
  textSmall: {
    margin: 5,
  },
});

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(21, 171, 105, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  decimalPlaces: 0,
};

export { styles, chartConfig };
