import React from "react";
import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import Home_ from "./component/homePage";
import Cuisine from "./component/cuisine";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const Stack = createStackNavigator();

  const setData = async () => {
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
    await AsyncStorage.setItem("FoodtypeList", JSON.stringify(Recipe_type));
  };
  React.useEffect(() => {
    setData();
  }, []);
  LogBox.ignoreAllLogs();

  return (
    <SafeAreaProvider style={{ width: "100%", height: "100%" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false, gestureEnabled: false }}
            >
              <Stack.Screen name="Home_screen" component={Home_} />
              <Stack.Screen name="Cuisine" component={Cuisine} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
