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
import {
  CartItemCard,
  CountryCard,
  OrderItemCard,
  Separator,
} from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { display } from "../utils";
import { StaticImageService } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../redux/action";

const InformationScreen = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Infomation</Text>
        <TouchableOpacity style={styles.saveButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.saveButtonText}>save</Text>
        </TouchableOpacity>
      </View>
      <Separator height={display.setHeight(5)} />
      <View style={styles.avatarContainer}>
        <Image source={images.avatar} style={styles.avartarImage} />
        <TouchableOpacity style={styles.chooseImageButton}>
          <Ionicons
            name="camera-outline"
            size={30}
            color={colors.DEFAULT_WHITE}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.settingContainer}>
      
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.leftOption}>
            <Ionicons
              name="person-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>quanghuy</Text>
          </View>
          <Ionicons
            name="pencil-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <View style={{borderWidth:1,width:'90%',opacity:0.5,
            borderColor:colors.DEFAULT_GREY
        }}/>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.leftOption}>
            <Ionicons
              name="lock-closed-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>Password</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <View style={{borderWidth:1,width:'90%',opacity:0.5,
            borderColor:colors.DEFAULT_GREY
        }}/>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.leftOption}>
            <Ionicons
              name="mail-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>quanghuy2003@gmail.com</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <View style={{borderWidth:1,width:'90%',opacity:0.5,
            borderColor:colors.DEFAULT_GREY
        }}/>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.leftOption}>
            <Ionicons
              name="call-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>0398601186</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <View style={{borderWidth:1,width:'90%',opacity:0.5,
            borderColor:colors.DEFAULT_GREY
        }}/>
        <TouchableOpacity style={styles.optionContainer}
        onPress={()=>navigation.navigate('Address')}>
          <View style={styles.leftOption}>
            <Ionicons
              name="location-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>Quan Hoa Cau Giay</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <View style={{borderWidth:1,width:'90%',opacity:0.5,
            borderColor:colors.DEFAULT_GREY
        }}/>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.leftOption}>
            <Ionicons
              name="male-female-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>Male</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <View style={{borderWidth:1,width:'90%',opacity:0.5,
            borderColor:colors.DEFAULT_GREY
        }}/>
       
      </View>
    </View>
  );
};

export default InformationScreen;

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
    flex: 1,
    textAlign: "center",
  },
  saveButton: {},
  saveButtonText: {
    fontFamily: fonts.Bitter_Medium,
    fontSize: 18,
    color: colors.DEFAULT_YELLOW,
  },
  avatarContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  avartarImage:{
    width:150,
    height:150,
    borderRadius:150
  },
  chooseImageButton:{
    backgroundColor:colors.DEFAULT_GREEN,
    padding:10,
    borderRadius:50,
    position:"absolute",
    bottom:-15
  },
  settingContainer: {
    margin: 10,
    borderRadius: 20,
    padding: 20,
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
    alignItems:'center'
  },
  titleText: {
    fontFamily: fonts.Bitter_ErxtraBold,
    fontSize: 18,
    marginTop: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width:'100%'
  },
  leftOption: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  nameOption: {
    fontFamily: fonts.Bitter_Medium,
    fontSize: 16,
    marginLeft: 10,
    color: colors.DEFAULT_GREY,
  },
});
