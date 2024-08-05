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
import { CartItemCard, CountryCard, Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { display } from "../utils";
import { StaticImageService } from "../services";
import { useSelector } from "react-redux";
const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const isSelectedCart = cart.filter((item) => item.isSelected === true);


  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {Platform.OS === "ios" ? (
        <Separator height={display.setHeight(5)} style={{backgroundColor:colors.DEFAULT_WHITE}}/>
      ) : null}
      <View style={styles.headerContaner}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Cart</Text>
      </View>
      <Separator height={display.setHeight(1)} />
      {cart.length < 1 ? (
        <View style={styles.emptyContainer}>
          <Image  source={images.empty}
          style={styles.emptyImage}/>
          <Text style={styles.emptyText}>CART IS EMPTY</Text>
        </View>
      ) : (
        <View style={{flex:1}}>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <FlatList
              data={cart}
              renderItem={({ item }) => <CartItemCard item={item} />}
            />
          </View>
          <View style={styles.buyContainer}>
            <Text style={styles.totalText}>Total: {total}</Text>

            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => {
                if (isSelectedCart.length < 1) alert("chosse");
                else navigation.navigate("Order");
              }}
            >
              <Text style={styles.buyText}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

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
    height: 50,
    flexDirection: "row",
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
    width: 70,
    height: "100%",
    backgroundColor: colors.DEFAULT_GREEN,
    justifyContent: "center",
    alignItems: "center",
  },
  buyText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
    color: colors.DEFAULT_WHITE,
  },
  emptyContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  emptyText:{
    fontFamily:fonts.Bitter_ErxtraBold,
    fontSize:40,
    color:colors.DEFAULT_GREEN
  },
  emptyImage:{
    width:150,
    height:150,
    
  }
});
