import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, fonts, general } from "../constants";
import { display } from "../utils";
import { useDispatch } from "react-redux";
import { updateCount, updateSelected } from "../redux/action";
import Ionicon from "react-native-vector-icons/Ionicons";

const OrderItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.restaurantContainer}>
        <Text style={styles.restaurantText}>
          {general.Restaurant[general.FOOD[item.id - 1].restaurantId].name}
        </Text>
      </View>
      <View style={styles.infoFoodContainer}>
        <Image
          source={{ uri: general.FOOD[item.id - 1].image }}
          style={styles.imageFood}
        />
        <View style={styles.infoFood}>
          <Text style={styles.foodNameText}>
            {general.FOOD[item.id - 1].name}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              đ {item.price * item.countfood}
            </Text>
            <View style={styles.countContainer}>
              <View style={styles.countFood}>
                <Text style={styles.countFoodText}>x{item.countfood}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderItemCard;
const styles = StyleSheet.create({
  container: {
    height: display.setHeight(20),
    justifyContent: "center",
    backgroundColor: colors.DEFAULT_GREY,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  infoFoodContainer: {
    flexDirection: "row",
  },
  imageFood: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 20,
  },
  restaurantContainer: {
    padding: 5,
  },
  restaurantText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 18,
  },
  infoFood: {
    flex: 1,
  },
  foodNameText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  countContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    width: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontFamily: fonts.Bitter_Medium,
    fontSize: 18,
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 30,
  },
  icontext: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
    color: colors.DEFAULT_WHITE,
  },
  countFoodText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
  },
});
