import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, fonts, general } from "../constants";
import { display } from "../utils";
import { useDispatch } from "react-redux";
import { updateCount, updateSelected } from "../redux/action";
import Ionicon from 'react-native-vector-icons/Ionicons'
const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.countfood);
 const [selected,setSelected]=useState(item.isSelected)
  const handleCountChange = (newCount) => {
    if (newCount >= 1) {
      setCount(newCount);
      dispatch(updateCount(item, newCount)); // Đảm bảo rằng hàm updateCount chấp nhận id và count mới
    }
  };
  const handleIsSelect=(newSelected)=>{
    setSelected(newSelected)
    dispatch(updateSelected(item,newSelected))
  }
  return (
    <View style={styles.container}>
      <View style={styles.restaurantContainer}>
        <Text style={styles.restaurantText}>
          {general.Restaurant[general.FOOD[item.id - 1].restaurantId].name}
        </Text>
      </View>
      <View style={styles.infoFoodContainer}>
        <TouchableOpacity
        onPress={()=>handleIsSelect(!selected)}>
        <Ionicon name={item.isSelected==false?"square-outline":'checkbox'} size={30} color={colors.DEFAULT_GREEN}/>
        </TouchableOpacity>
        <Image
          source={{ uri: general.FOOD[item.id - 1].image }}
          style={styles.imageFood}
        />
        <View style={styles.infoFood}>
          <Text style={styles.foodNameText}>
            {general.FOOD[item.id - 1].name}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>đ {item.price * count}</Text>
            <View style={styles.countContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleCountChange(count - 1)}
              >
                <Text style={styles.icontext}>-</Text>
              </TouchableOpacity>
              <View style={styles.countFood}>
                <Text style={styles.countFoodText}>{count}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleCountChange(count + 1)}
              >
                <Text style={styles.icontext}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
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
    backgroundColor:colors.DEFAULT_GREY
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
});
