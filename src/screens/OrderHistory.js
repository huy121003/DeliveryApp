import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, fonts } from "../constants";
import { OrderStateCard, Separator } from "../components";
import { display } from "../utils";
import { useSelector } from "react-redux";

const OrderHistory = ({ navigation }) => {
  const [orderState, setOrderState] = useState("Preparing");
  const [orderStateList, setOrderStateList] = useState([]);
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    const filteredOrders = orders.filter(
      (order) => order.orderState === orderState
    );
    setOrderStateList(filteredOrders);
  }, [orderState, orders]);

  const renderOrderState = (state) => (
    <TouchableOpacity
      key={state}
      onPress={() => {
        setOrderState(state);
        console.log(orderStateList);
      }}
    >
      <Text
        style={[
          styles.stateText,
          {
            color:
              orderState === state ? colors.DEFAULT_GREEN : colors.DEFAULT_GREY,
          },
        ]}
      >
        {state}
      </Text>
      {orderState === state && <View style={styles.line} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {Platform.OS === "ios" && <Separator height={display.setHeight(5)} />}
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Order History</Text>
      </View>
      <View style={styles.orderContainer}>
        <View style={styles.orderState}>
          {["Preparing", "In Transit", "Delivered", "Cancelled"].map(
            renderOrderState
          )}
        </View>

      <View style={{marginHorizontal:10,flex:1}}> 
         <FlatList
          data={orderStateList}
          keyExtractor={(item) => item.orderId}
          renderItem={({ item }) => (
            <OrderStateCard item={item} orderState={orderState} />
          )}
        /></View>
      </View>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Medium,
    width: display.setWidth(80),
    textAlign: "center",
  },
  orderContainer: {
    flex: 1,
  },
  orderState: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: colors.DEFAULT_WHITE,
    paddingBottom: 10,
  },
  stateText: {
    fontFamily: fonts.Bitter_Medium,
    fontSize: 16,
  },
  line: {
    borderBottomWidth: 5,
    marginTop: 5,
    borderColor: colors.DEFAULT_GREEN,
  },
});
