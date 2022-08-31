import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import { Card } from "react-native-paper";
import styles from "./styles";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const CarouselCard = (props) => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  };

  const pageNews = () => {
    startLoading();
    setTimeout(() => {
      navigation.navigate("PageNews");
    }, 0);
  };
  const pageNewsOverview = () => {
    startLoading();
    setTimeout(() => {
      navigation.navigate("PageNewsOverview");
    }, 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View>
          <Text style={styles.news}>Notícias apae</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <TouchableOpacity
              onPress={pageNewsOverview}
              title="PageNewsOverview"
            >
              <Text style={styles.show}>Ver Mais</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={require("../../../../images/news/botaoTopo.png")}
              style={{
                width: 5,
                height: 9,
                marginLeft: 8,
              }}
            ></Image>
          </View>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        styles={{ flex: 1 }}
      >
        <View style={styles.cardContainer}>
          <View style={styles.cardDiv}>
            <Card style={styles.card}>
              <Image
                source={require("../../../../images/news/feijoada.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.title}>III Feijoada Solidária</Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={pageNews}
                title="PageNews"
              >
                <View style={styles.button}>
                  <Image
                    source={require("../../../../images/news/botaoCard.png")}
                    style={{ width: 5, height: 9 }}
                  ></Image>
                </View>
              </TouchableOpacity>
            </Card>
          </View>
          <View style={styles.cardDiv}>
            <Card style={styles.card}>
              <Image
                source={require("../../../../images/news/feijoada.png")}
                style={styles.image}
              ></Image>
              <Text style={styles.title}>III Feijoada Solidária</Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={pageNews}
                title="PageNews"
              >
                <View style={styles.button}>
                  <Image
                    source={require("../../../../images/news/botaoCard.png")}
                    style={{ width: 5, height: 9 }}
                  ></Image>
                </View>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarouselCard;
