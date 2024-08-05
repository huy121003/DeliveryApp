import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { colors, fonts, images } from "../constants";
import { display } from "../utils";

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", { detailRes: item });
      }}
      style={styles.cardContainer}
    >
      <Image source={images[item.image]} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color={colors.DEFAULT_YELLOW} />
          <Text style={styles.rating}>{item.star}</Text>
          <Text style={styles.evaluate}>({item.evaluate})</Text>
        </View>
        <View style={styles.delivery}>
          <Ionicons name="time" size={20} color={colors.DEFAULT_GREEN} />
          <Text style={styles.deliveryTime}>{item.deliveryTime} min</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.loveButton}>
        <Ionicons
          name={item.isLove ? "heart" : "heart-outline"}
          size={24}
          color={item.isLove ? "red" : colors.DEFAULT_GREY}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    padding: 10,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    width: display.setWidth(90),
    marginVertical:5
  },
  image: {
    width: 170,
    height: 130,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: fonts.Bitter_Bold,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: colors.DEFAULT_GREY,
    fontFamily: fonts.Bitter_Medium,
  },
  evaluate: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.DEFAULT_GREY,
    fontFamily: fonts.Bitter_Medium,
  },
  delivery: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryTime: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.DEFAULT_GREY,
    fontFamily: fonts.Bitter_Medium,
  },
  loveButton: {
    padding: 10,
  },
});
