import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, fonts, general } from "../constants";
import { display } from "../utils";
import { useDispatch } from "react-redux";
import { updateCount, updateSelected } from "../redux/action";
import Icon from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment';
const OrderStateCard = ({ item }) => {
  const formattedDate = moment(item.orderDate).format('DD/MM/YYYY, HH:mm:ss');

  
  // Hàm lấy màu nền dựa trên trạng thái đơn hàng
  const getBackgroundColor = (orderState) => {
    switch (orderState) {
      case 'Preparing':
        return colors.LIGHT_GREY;
      case 'In Transit':
        return colors.LIGHT_YELLOW;
      case 'Delivered':
        return colors.LIGHT_GREEN;
      case 'Cancelled':
        return colors.LIGHT_RED;
      default:
        return colors.DEFAULT_WHITE;
    }
  };
  const totalitem= item.items.reduce((total,item)=>total+item.countfood,0)
  return (
    <TouchableOpacity activeOpacity={0.8}
    style={[styles.container, { backgroundColor: getBackgroundColor(item.orderState) }]}>
      <Text style={styles.orderTimeText}>Order time: {formattedDate}</Text>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {item.total}</Text>
        <Text style={styles.itemsText}>Items: {totalitem}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="truck" size={24} color={colors.DEFAULT_GREEN} />
        <Text style={styles.orderStateText}>{item.orderState}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderStateCard;

const styles = StyleSheet.create({
  container: {
  
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    
  },
  orderTimeText: {
    fontSize: 16,
    color: colors.DEFAULT_BLACK,
    marginBottom: 5,
    fontFamily:fonts.Bitter_Regular
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 18,
  fontFamily:fonts.Bitter_ErxtraBold

  },
  itemsText: {
    fontSize: 18,
   
    fontFamily:fonts.Bitter_Medium
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderStateText: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily:fonts.Bitter_Medium
  },
});