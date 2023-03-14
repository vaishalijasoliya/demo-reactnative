import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

export const Loaders = (props) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="black" />
      <Text style={styles.loaderTextStyle}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    backgroundColor: "#0000003b",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  loaderTextStyle: {
    color: "black",
    marginTop: 10,
    fontWeight: "600",
  },
});

// export default Loader;
