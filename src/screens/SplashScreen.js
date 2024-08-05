import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import { colors, fonts, images } from "../constants";
import { display } from "../utils";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.DEFAULT_GREEN}
        translucent
      />
      <Image
        source={images.goFoodLogo}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_GREEN,
  },
  logo: {
    height: display.setHeight(60),
    width: display.setWidth(60),
  },
});
