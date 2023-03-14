import React, { useCallback } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import axios from "axios";
import { Styles } from "../src/Theme/Styles/homeStyles";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "../src/Components/header";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Home_ = ({ navigation }) => {
  const [recipe, setRecipe] = React.useState([]);
  const [userSearch, setUserSearch] = React.useState([]);
  const [defaultData, setDefaultData] = React.useState([]);

  const getData = async () => {
    const get_data = await AsyncStorage.getItem("route_name");
    const Parse_data = JSON.parse(get_data);
    if (Parse_data) {
      navigation.navigate("Cuisine", {
        name: Parse_data,
      });
    } else {
      const Data = await AsyncStorage.getItem("FoodtypeList");
      const ParseValue = JSON.parse(Data);
      setRecipe(ParseValue);
      setUserSearch(ParseValue);
      setDefaultData(ParseValue);
    }
    const Data = await AsyncStorage.getItem("FoodtypeList");
    const ParseValue = JSON.parse(Data);
    setRecipe(ParseValue);
    setUserSearch(ParseValue);
    setDefaultData(ParseValue);
  };

  React.useEffect(() => {
    getData();
  }, []);

  const Recipe_type = [
    { name: "Pizza", id: 1 },
    { name: "chicken", id: 2 },
    { name: "cookies", id: 3 },
    { name: "italian", id: 4 },
    { name: "juice", id: 5 },
    { name: "burger", id: 6 },
    { name: "dryfruits", id: 7 },
    { name: "fish", id: 8 },
    { name: "indian", id: 9 },
    { name: "pasta", id: 10 },
    { name: "fruits", id: 11 },
  ];
  const [fontsLoaded] = useFonts({
    "Poppins-500": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const getCuisine = (item) => {

  // };

  const onSearch = (e) => {
    const value = e;
    if (typeof value !== "object") {
      if (!value || value == "" || value == null) {
        setRecipe(userSearch);
        setDefaultData(userSearch);
      } else if (!!value) {
        var filteredData = userSearch.filter((item) => {
          let searchValue = item.name.toLowerCase();
          return searchValue.includes(value.toString().toLowerCase());
        });
        // let name =
        const found = filteredData.some(
          (el) => el.name.toLowerCase() == value.toLowerCase()
        );
        const obj = {
          id: filteredData.length + 1,
          name: value,
        };
        if (found) {
          setRecipe(filteredData);
          setDefaultData(filteredData);
        } else {
          filteredData.push(obj);
          setRecipe(filteredData);
          setDefaultData(filteredData);
        }
      }
    }
  };

  const setItem = async (item) => {
    await AsyncStorage.setItem("route_name", JSON.stringify(item));
    navigation.navigate("Cuisine", {
      name: item,
    });
  };

  return (
    <>
      <SafeAreaProvider style={{ flex: 1, width: "100%", marginBottom: 50 }}>
        <Header navigation={navigation} name={"Home"} />
        <View style={Styles.MainView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#00000033",
                width: "100%",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "#d9d9d98a",
                marginTop: 10,
              }}
              placeholder="Search"
              onChangeText={(e) => {
                onSearch(e);
              }}
            />

            {defaultData.length > 0 ? (
              <FlatList
                data={recipe}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={Styles.Recipe_view_list}
                      onPress={() => {
                        setItem(item.name);
                      }}
                    >
                      <Text
                        style={[
                          Styles.Recipe_view_list_txt,
                          { fontFamily: "Poppins-500" },
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                scrollEnabled={false}
              />
            ) : (
              <Text style={{ fontSize: 20, margin: 10, textAlign: "center" }}>
                There is no data available.
              </Text>
            )}
          </ScrollView>
        </View>
      </SafeAreaProvider>
    </>
  );
};

export default Home_;
