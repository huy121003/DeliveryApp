import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors, images, general, fonts } from "../constants";
import { display } from "../utils";
export default function WelcomeCard({ title, content, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
      source={images[image]}
      resizeMode='contain' />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_WHITE,
    width:display.setWidth(100)
  },
  image: {
    height: display.setHeight(35),
    width: display.setWidth(70),
  },
  titleText: {
    fontSize: 22,
    fontFamily: fonts.Bitter_SemiBold,
  },
  contentText: {
    fontSize: 18,
    fontFamily: fonts.Bitter_Light,
    marginHorizontal: 20,
  },
});
