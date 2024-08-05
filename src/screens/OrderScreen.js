import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  FlatList,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors, countrylist, fonts, general, images } from "../constants";
import {
  CartItemCard,
  CountryCard,
  OrderItemCard,
  Separator,
} from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { display } from "../utils";
import { StaticImageService } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../redux/action";

const OrderScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  //const [total, setTotal] = useState(0);
  const isSelectedCart = cart.filter((item) => item.isSelected === true);
  const [deliverlyFee,setDeliverlyFee]=useState(0)
  const totalItem = isSelectedCart.reduce(
    (total, item) => total + item.price * item.countfood,
    0
  );
  const handleaddToOrder = () => {
    if (isSelectedCart.length > 0) {
     
      dispatch(addToOrder(isSelectedCart, deliverlyFee)); // Sử dụng phí giao hàng là 0
      navigation.navigate("Home");
     
    } else {
      console.warn("Không có sản phẩm nào được chọn.");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {Platform.OS === "ios" ? (
        <Separator height={display.setHeight(5)} />
      ) : null}
      <View style={styles.headerContaner}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Order</Text>
      </View>
      <Separator height={display.setHeight(1)} />
      <TouchableOpacity style={styles.addressButton}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}> Address</Text>
          <View style={styles.infoUser}>
            <Text style={styles.infoText}>Quang Huy</Text>
            <Text style={styles.infoText}> | </Text>
            <Text style={styles.infoText}>0398601186</Text>
          </View>
          <View style={styles.infoUser}>
            <Text style={styles.infoText}>Quan Hoa,Cau Giay,Ha Noi</Text>
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={30}
          color={colors.DEFAULT_GREEN}
        />
      </TouchableOpacity>
      <Separator height={display.setHeight(1)} />
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <FlatList
          data={isSelectedCart}
          renderItem={({ item }) => <OrderItemCard item={item} />}
        />
      </View>
      <View style={styles.buyContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total Item: </Text>
          <Text style={styles.totalText}>{totalItem}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>DeliverlyFee: </Text>
          <Text style={styles.totalText}>{deliverlyFee}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total: </Text>
          <Text style={styles.totalText}>{totalItem+deliverlyFee}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton} onPress={handleaddToOrder}>
          <Text style={styles.buyText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  headerContaner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Medium,
    width: display.setWidth(75),
    textAlign: "center",
  },
  buyContainer: {
    width: display.setWidth(100),
    height: display.setHeight(20),
    //flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_GREY,
    marginVertical: 5,
  },
  totalText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
    marginLeft: 20,
  },
  buyButton: {
    width: display.setWidth(70),
    height: 50,
    backgroundColor: colors.DEFAULT_GREEN,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderRadius: 20,
  },
  buyText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
    color: colors.DEFAULT_WHITE,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    margin: 5,
    paddingHorizontal: 10,
  },
  addressButton: {
    backgroundColor: colors.DEFAULT_GREY,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addressTitle: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
    color: colors.DEFAULT_GREEN,
  },
  infoUser: {
    flexDirection: "row",
  },
  infoText: {
    fontFamily: fonts.Bitter_Medium,
    fontSize: 16,
  },
  addressContainer: {
    flex: 1,
  },
});
