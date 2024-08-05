import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  Platform,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { colors, fonts, images } from "../constants";
import { PaymentCard, Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { display } from "../utils";
const PaymentScreen = () => {
  const payment = [
    {
      name: "PayPal",
      description: "faster and saler way to send money",
      image: "paypal",
    },
    {
      name: "Credit Card",
      description: "Pay with Master card,visa or visa",
      image: "creditCard",
    },
    {
      name: "Bitcoin Wallet",
      description: "Send the amount in out Bitcoin Wallet",
      image: "bitcoin",
    },
  ];
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
        <Text style={styles.headerTitle}>Payment</Text>
      </View>
      <Separator height={display.setHeight(5)} />
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTittle}>Choose payment method to add</Text>
        <View style={styles.paymentList}>
          {/* <FlatList
            data={payment}
            renderItem={({ item }) => (<PaymentCard paymentItems={item}/>)}
          /> */}
          {payment.map((item) => (
            <PaymentCard paymentItems={item}/>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;

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
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Medium,
    width: display.setWidth(80),
    textAlign: "center",
  },
});
