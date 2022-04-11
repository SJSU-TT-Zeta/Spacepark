import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8FA",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    height: "10%",
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
  arrow: {
    alignItems: "flex-start",
    marginLeft: "5%",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    width: "90%",
    marginTop: "2%",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
  },
  item: {
    width: "85%",
    height: 60,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#15AB69",
    backgroundColor: "#fff",
  },
  freqItem: {
    marginTop: "5%",
  },
  dayItem: {
    marginTop: "2%",
  },
  garageWrap: {
    flexGrow: 1,
    marginTop: "20%",
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
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  dayLabel: {
    fontSize: 27,
    marginLeft: 15,
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: "auto",
  },
  garageLabel: {
    fontSize: 24,
    fontWeight: "normal",
    marginLeft: "auto",
    marginRight: "auto",
    alignSelf: "center",
  },
  otherLabel: {
    fontSize: 20,
    fontWeight: "normal",
    alignSelf: "stretch",
    textAlign: "center",
  },
  downArrow: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;
