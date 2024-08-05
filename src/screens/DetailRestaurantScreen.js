import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { colors, fonts, general, images } from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { display } from "../utils";
import { FoodCard, Separator } from "../components";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailRestaurantScreen = ({ route }) => {
  const navigation = useNavigation();

  const { detailRes } = route.params;
  const detailList = general.FOOD.filter(
    (item) => item.restaurantId === detailRes.id
  );
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState({});
  const updateTotal = (price, countChange, id) => {
    setTotal(total + price * countChange);
    setCounts({
      ...counts,
      [id]: (counts[id] || 0) + countChange,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.DEFAULT_GREEN}
        translucent
      />

      <Image source={images[detailRes.image]} style={styles.restaurantImage} />

      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={40}
          color={colors.DEFAULT_BLACK}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.restaurantInfoContainer}>
        <View style={styles.detailResContainer}>
          <Text style={styles.detailResName}>{detailRes.name}</Text>
          <Ionicons
            name={detailRes.isLove == true ? "heart" : "heart-outline"}
            size={30}
            color={colors.DEFAULT_RED}
          />
        </View>
        <Separator height={display.setHeight(5)} />
        <View style={styles.infoContainer}>
          <View style={styles.starContainer}>
            <Ionicons name="star" size={20} color={colors.DEFAULT_YELLOW} />
            <Text style={styles.starText}>{detailRes.star}</Text>
            <Text style={styles.evaluateText}>({detailRes.evaluate})</Text>
          </View>
          <View style={styles.deliverTime}>
            <Ionicons name="time" size={20} color={colors.DEFAULT_WHITE} />
            <Text style={styles.timeText}>{detailRes.deliveryTime} min</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailFood}>
        <FlatList
          data={detailList}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          renderItem={({ item }) => (
            <FoodCard
              key={item.id}
              item={item}
              count={counts[item.id] || 0}
              updateTotal={updateTotal}
            />
          )}
        />
      </View>
      <Separator height={display.setHeight(5)} />
    </View>
  );
};

export default DetailRestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_GREEN,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: 20,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Medium,
    width: display.setWidth(80),
    textAlign: "center",
  },
  restaurantImage: {
    width: display.setWidth(100),
    height: 250,
    // resizeMode: "contain",
  },
  restaurantInfoContainer: {
    // flexDirection: "row",
    padding: 20,
    backgroundColor: colors.DEFAULT_GREEN,
  },
  detailResContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: display.setWidth(100),
    paddingHorizontal: 20,
  },
  detailResName: {
    fontSize: 35,
    fontFamily: fonts.Bitter_Bold,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  deliverTime: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detailFood: {
    flex: 1,
  },
  addToCard: {
    height: display.setHeight(7),
    width: display.setWidth(90),
    backgroundColor: "red",
    position: "absolute",
    bottom: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
