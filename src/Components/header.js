import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Image } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";

export const Header = ({ navigation, name }) => {
  const removeData = async () => {
    navigation.goBack();
    await AsyncStorage.removeItem("route_name");
  };

  return (
    <View
      style={{
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        // columnGap: 20,
      }}
    >
      {name == "Home" ? null : (
        <TouchableOpacity
          style={{ position: "absolute", left: 10, width: 35 }}
          onPress={() => {
            removeData();
          }}
        >
          <Image
            source={require("../../assets/Images/backicon.png")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      <Text>{name}</Text>
    </View>
  );
};

export const CuisineHead = ({ Styles, isName ,fontsLoaded }) => {
  return (
    <View style={Styles.Top_heading}>
      <Text
        style={[
          Styles.Top_heading_txt,
          { fontFamily: fontsLoaded ? "Poppins-600" : "" },
        ]}
      >
        {isName}
      </Text>
    </View>
  );
};
