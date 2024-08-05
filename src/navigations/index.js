import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

import {
  AddressUser,
  DetailRestaurantScreen,
  ForgotPasswordScreen,
  HomeScreen,
  InformationScreen,
  OrderHistory,
  PaymentScreen,
  RegisterPhoneScreen,
  SigninScreen,
  SignupScreen,
  SplashScreen,
  UserSetting,
  VerificationScreen,
  WelcomeScreen,
} from "../screens";
import CartScreen from "../screens/CartScreen";
const Stack = createNativeStackNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants";
import OrderScreen from "../screens/OrderScreen";
function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null, // Ẩn tên tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "bag-handle" : "bag-handle-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          }

          // Bạn có thể thay đổi Icon bằng thư viện icon khác
          return (
            <Ionicons name={iconName} size={30} color={colors.DEFAULT_GREEN} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrderHistory} />
      <Tab.Screen name="User" component={UserSetting} />
    </Tab.Navigator>
  );
}
const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Detail" component={DetailRestaurantScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="Address" component={AddressUser} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigators;
