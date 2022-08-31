import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/routes/home/index";
import PageNews from "./app/routes/home/news/pageNews";
import PageNewsOverview from "./app/routes/home/news/pageNewsOverview";


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen name="PageNews" component={PageNews} />
      <Stack.Screen name="PageNewsOverview" component={PageNewsOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
