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
import { colors, fonts, general, images } from "../constants";
import { CategoryCard, RestaurantCard, Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";

import { display } from "../utils";


const HomeScreen = () => {
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
      <View style={styles.headerContainer}>
        <Separator height={display.setHeight(2)} />
        <View style={styles.headerIntroContrainer}>
          <Image source={images.avatar} style={styles.avatarimage} />
          <View style={styles.headerText}>
            <Text style={styles.delivernowText}>Deliver Now!</Text>
            <Text style={styles.userText}>quanghuy</Text>
          </View>

        
        </View>
        <Separator height={display.setHeight(2)} />
        <View style={styles.headerFilterContainer}>
          <Ionicons name="search" size={30} />
          <TextInput style={styles.searchInputText} />
        </View>
      </View>
      <Separator height={display.setHeight(5)} />
      <View>
        <FlatList
          horizontal
          data={general.CATEGORY}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          renderItem={({ item }) => <CategoryCard {...item} />}
        />
      </View>
      <Separator height={display.setHeight(5)} />
      <View style={styles.favoriteContainer}>
        <View style={styles.headerFavoriteText}>
          <Text style={styles.favoriteText}>Restaurant</Text>
          <TouchableOpacity style={styles.buttonSeeAll}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <Separator height={display.setHeight(2)} />
        <View style={styles.retaurantContainer}>
          <FlatList 
          data={general.Restaurant}
           showsHorizontalScrollIndicator={false}
           pagingEnabled
           overScrollMode="never"
           renderItem={({ item }) => <RestaurantCard key={item.id} item={item}  />}/>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.DEFAULT_GREEN,
    justifyContent: "center",
    alignItems: "center",
    width: display.setWidth(100),
  },
  avatarimage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 50,
    marginRight: 10,
  },
  headerText: {
    width: display.setWidth(70),
  },
  headerIntroContrainer: {
    flexDirection: "row",
  },
  delivernowText: {
    fontFamily: fonts.Bitter_Medium,
    fontSize: 16,
  },
  buttonUser: {
    justifyContent: "center",
    alignItems: "center",
  },
  userText: {
    fontFamily: fonts.Bitter_Bold,
    fontSize: 20,
    color: colors.DEFAULT_BLACK,
  },
  headerFilterContainer: {
    width: display.setWidth(90),
    height: 50,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.DEFAULT_WHITE,
    backgroundColor: colors.DEFAULT_GREY,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
  },
  searchInputText: {
    flex: 1,
    fontSize: 18,
    fontFamily: fonts.Bitter_Medium,
    paddingLeft: 10,
  },
  favoriteContainer:{
    marginLeft:10,
  marginVertical:20,
  // height:display.setHeight(70)
  flex:1
  },
  headerFavoriteText:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20
  },
  favoriteText:{
    fontFamily:fonts.Bitter_Bold,
    fontSize:18,
    color:colors.DEFAULT_BLACK
  },
  seeAllText:{
    color:colors.DEFAULT_YELLOW,
    fontFamily:fonts.Bitter_Medium,
    fontSize:14
  },
  retaurantContainer:{
    marginLeft:10,
    flex:1

  }
});
