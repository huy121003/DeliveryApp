import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Modal,
} from "react-native";
import { colors, fonts } from "../constants";
import { display } from "../utils";
import DetailItem from "./DetailItem";

const FoodCard = ({ item, count, updateTotal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [translateY] = useState(new Animated.Value(display.setHeight(100))); // Tạo giá trị animation

  const showModal = () => {
    setModalVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(translateY, {
      toValue: display.setHeight(100),
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => {                                                                                                                       
      setModalVisible(false);
    });
  };

  return (
    <View style={styles.foodItemContainer}>
      <Image source={{ uri: item.image }} style={styles.foodItemImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.foodItemText}>{item.name}</Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={styles.priceText}>{item.price} đ</Text>
        </View>

        <View style={styles.soldContainer}>
          <Text style={styles.soldText}>Sold : {item.sold}</Text>
          <TouchableOpacity style={styles.addButton} onPress={showModal}>
            <Text style={styles.addText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>

      {modalVisible && (
        <DetailItem
          visible={modalVisible}
          onClose={hideModal}
          translateY={translateY}
          item={item}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  foodItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    backgroundColor: colors.LIGHT_GREY,
    padding: 20,
    borderRadius: 20,
    width: display.setWidth(90),
  },
  foodItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
    resizeMode: "cover",
  },
  foodItemText: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Bold,
  },
  priceText: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Bold,
    color: colors.DEFAULT_YELLOW,
  },
  soldContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  soldText: {
    fontSize: 14,
    fontFamily: fonts.Bitter_Regular,
    marginTop: 5,
    color: colors.DEFAULT_RED,
  },
  addButton: {
    width: 50,
    height: 30,
    backgroundColor: colors.DEFAULT_GREEN,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  addText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 16,
    color: colors.DEFAULT_WHITE,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBackground: {
    flex: 1,
  },
  modalContainer: {
    height: display.setHeight(33),
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: fonts.Bitter_Bold,
  },
  countItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});

export default FoodCard;
