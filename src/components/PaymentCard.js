import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { display } from "../utils";
import { colors } from "../constants";

const PaymentCard = ({ paymentItems }) => {
  return (
    <View style={styles.paymentItemContainer}>
      <View style={styles.paymentImageView}>
        <Image source={paymentItems.image} style={styles.paymentImage} />
      </View>
      <View style={styles.paymentInfo}>
        <Text style={styles.paymentNameText}>{paymentItems.name}</Text>
        <Text style={styles.paymentDesText}>{paymentItems.description}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  paymentItemContainer: {
    width: display.setWidth(100),
    height: 60,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.DEFAULT_GREY,
    borderRadius:20,
    marginVertical:10
  },
});
