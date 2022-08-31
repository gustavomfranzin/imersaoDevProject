import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

import CarouselCard from "./news/carouselCardNews";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ flex: 1, backgroundColor: "red" }} />

        <View style={{ flex: 1, backgroundColor: "blue" }} />
        <View style={{ flex: 2 }}>
          <CarouselCard />
        </View>
        <View style={{ flex: 1, backgroundColor: "green" }}></View>
        <View style={{ flex: 1, backgroundColor: "darkorange" }} />
      </View>

      <StatusBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
