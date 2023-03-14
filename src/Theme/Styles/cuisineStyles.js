import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  Mainview: {
    width: "100%",
    backgroundColor: "#ebebeb",
    flex: 1,
  },
  Top_heading: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  Top_heading_txt: {
    fontSize: 25,
    textTransform: "capitalize",
  },
  contentView: {
    width: "100%",
    justifyContent: "center",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 10,
    backgroundColor: "white",
  },
  List_view_item: {
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    flex: 3,
    margin: 15,
    borderColor: "#0000001c",
    maxHeight:240
    // padding:10
  },
  List_item_image: {
    // flex: 3,
    width: "100%",
    borderRadius: 10,
    height: "65%",
  },
  List_view_item_view: {
    // flex: 3,
    justifyContent: "space-evenly",
    flexDirection: "column",
    // paddingHorizontal: 10,
    height: "35%",
  },
  List_view_item_Main: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
  },
  List_view_item_view_txt: {
    textAlign: "center",
    fontSize: 12,
    textTransform: "capitalize",
  },
  List_view_item_view_bottom_txt: {
    fontSize: 10,
    textAlign: "center",
  },
});
