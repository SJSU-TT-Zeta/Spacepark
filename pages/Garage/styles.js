import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    height: "100%",
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
    width: Dimensions.get("window").width,
  },
  contentItem: {
    backgroundColor: "white",
    borderRadius: 15,
    width: "90%",
    marginTop: 15,
    elevation: 1,
  },
  circle: {
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  contentItemWrap: {
    flexDirection: "row",
    width: "100%",
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
    width: 90,
    height: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    alignSelf: "center",
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
});

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(21, 171, 105, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

export { styles, chartConfig };
