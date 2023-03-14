import axios from "axios";
import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../src/Theme/Styles/cuisineStyles";
import { useFonts } from "expo-font";
import { CuisineHead, Header } from "../src/Components/header";
import { Loaders } from "../src/Components/Loaders";

const Cuisine = ({ navigation, route }) => {
  const isName = route.params.name;
  const [recipe, setRecipe] = React.useState([]);
  const [isLoaded, setIsloaded] = React.useState(false);
  const [defaultData, setDefaultData] = React.useState([]);
  const fontsLoaded = useFonts({
    "Poppins-600": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-500": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-400": require("../assets/fonts/Poppins-Light.ttf"),
  });
  const getData = (e) => {
    setIsloaded(true);
    const options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: isName },
      headers: {
        "X-RapidAPI-Key": "ac05c9e959msh036e955fc6722dbp15f46djsnb668c5bbb283",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setRecipe(response.data.hits);
        setIsloaded(false);
        setDefaultData(response.data.hits);
      })
      .catch(function (error) {
        setIsloaded(false);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <View style={{ height: "100%", width: "100%" }}>
        {isLoaded ? <Loaders /> : null}
        <Header navigation={navigation} name={"Cuisine"} />
        <View style={Styles.Mainview}>
          {isLoaded ? null : defaultData.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <CuisineHead
                Styles={Styles}
                fontsLoaded={fontsLoaded}
                isName={isName}
              />
              <View style={Styles.contentView}>
                <FlatList
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  data={recipe}
                  numColumns={2}
                  renderItem={({ item, index }) => {
                    const recipe_item = item.recipe;
                    return (
                      <View style={Styles.List_view_item_Main}>
                        <View style={Styles.List_view_item}>
                          <Image
                            resizeMode="cover"
                            resizeMethod="resize"
                            source={{ uri: recipe_item.image }}
                            style={Styles.List_item_image}
                          />
                          <View style={Styles.List_view_item_view}>
                            <Text
                              style={[
                                Styles.List_view_item_view_txt,
                                { fontFamily: "Poppins-500" },
                              ]}
                            >
                              {recipe_item.label}
                            </Text>
                            <Text
                              style={[
                                Styles.List_view_item_view_bottom_txt,
                                { fontFamily: "Poppins-400" },
                              ]}
                            >
                              {isName}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </ScrollView>
          ) : (
            <>
              <CuisineHead
                Styles={Styles}
                fontsLoaded={fontsLoaded}
                isName={isName}
              />
              <View
                style={[
                  Styles.contentView,
                  { height: "100%", justifyContent: "space-between" },
                ]}
              >
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  There is no item for this category.
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default Cuisine;
