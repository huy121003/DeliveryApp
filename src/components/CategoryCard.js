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
    Platform
  } from "react-native";
  import React, { useState } from "react";
import { fonts, images } from "../constants";
import { display } from "../utils";

const CategoryCard = ({url,name,id}) => {
  return (
    <TouchableOpacity style={styles.container}>
   <Image style={styles.image}
   source={images[url]}/>
   <Text style={styles.categoryText}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
container:{
    width:display.setWidth(15),
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center'

},
image:{
width:30,
height:30,
resizeMode:'contain',
marginRight:5
},
categoryText:{
    fontFamily:fonts.Bitter_SemiBold,
    fontSize:12
}
})