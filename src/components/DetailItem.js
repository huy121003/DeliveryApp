import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { display } from "../utils";
import { colors, fonts } from "../constants";
import Separator from "./Separator";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action";

const DetailItem = ({ visible, onClose, translateY, item }) => {
  const [countItem, setCountItem] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // useEffect để theo dõi thay đổi của cart
  useEffect(() => {
    if (cart.length > 0) {
      console.log(JSON.stringify(cart, null, 2));
    }
  }, [cart]);

  const handleAddToCart = () => {
    dispatch(addToCart(item, countItem));
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.modalOverlay}>
        <TouchableOpacity style={styles.modalBackground} onPress={onClose} />
        <Animated.View
          style={[styles.modalContainer, { transform: [{ translateY }] }]}
        >
          <View style={styles.infoFoodContainer}>
            <Image source={{ uri: item.image }} style={styles.foodItemImage} />
            <Text style={styles.foodItemText}>{item.name}</Text>
          </View>
          <Separator height={display.setHeight(3)} />

          <View style={styles.quantityContainer}>
           {/* <Text style={styles.quantityText}>Quantity</Text> */}
            <View style={styles.countItem}>
              <TouchableOpacity
                onPress={() => {
                  if (countItem > 1) {
                    setCountItem(countItem - 1);
                  }
                }}
                style={styles.subtractButton}
              >
                <Text style={styles.countNumber}>-</Text>
              </TouchableOpacity>
              <Text style={styles.countNumberText}>{countItem}</Text>
              <TouchableOpacity
                onPress={() => {
                  setCountItem(countItem + 1);
                }}
                style={styles.addButton}
              >
                <Text style={styles.countNumber}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
            <Text style={styles.modalTitle}>{item.price * countItem}đ</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBackground: {
    flex: 1,
  },
  modalContainer: {
    height: display.setHeight(40),
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: fonts.Bitter_Bold,
    color: colors.DEFAULT_WHITE,
  },
  countItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  subtractButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 15,
  },
  addButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 15,
    marginLeft: 10,
  },
  countNumber: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Bold,
    color: colors.DEFAULT_WHITE,
  },
  countNumberText: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Bold,
    marginHorizontal: 10,
  },
  addToCartButton: {
    marginTop: 20,
    width: display.setWidth(80),
    height: 50,
    backgroundColor: colors.DEFAULT_GREEN,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  addToCartText: {
    fontSize: 18,
    fontFamily: fonts.Bitter_Bold,
    color: colors.DEFAULT_WHITE,
  },
  foodItemImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 15,
  },
  infoFoodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodItemText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
    paddingLeft: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    flex:1
  },
  quantityText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 18,
  },
});

export default DetailItem;
