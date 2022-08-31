import { StyleSheet } from "react-native";
import { normalize } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FCFAFF",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  news: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "500",
    fontSize: normalize(11),
    lineHeight: 14,
    color: "#302A4B",
    textTransform: "uppercase",
  },
  show: {
    fontFamily: "Montserrat_400Regular",
    display: "flex",
    textDecorationLine: "underline",
    alignItems: "center",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: normalize(10),
    lineHeight: 12,

    color: "#776ABC",
  },

  cardContainer: {
    flexDirection: "row",
  },
  cardDiv: {
    width: 183,
    height: 190,
    marginRight: 20,
  },
  card: {
    borderRadius: 20,
  },
  image: {
    width: 163,
    height: 105,
    borderRadius: 20,
    marginTop: 6,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    display: "flex",
    fontSize: normalize(10),
    lineHeight: 12,
    color: "#686579",
    fontWeight: "600",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  paragraph: {
    fontFamily: "Montserrat_400Regular",
    fontSize: normalize(9),
    lineHeight: 11,
    color: "#686579",
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    width: 28,
    height: 28,
    backgroundColor: "#776ABC",
    borderRadius: 24,
    marginTop: 10,
    marginBottom: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
  },
});
export default styles;
