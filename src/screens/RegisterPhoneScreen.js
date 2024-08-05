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
import { colors, countrylist, fonts, images } from "../constants";
import { CountryCard, Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { display } from "../utils";
import { StaticImageService } from "../services";

const RegisterPhoneScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    countrylist.find((country) => country.name === "Vietnam")
  );
  const [showCountrylist, setShowCountryList] = useState(false);

  const [phoneNumber,setPhoneNumber]=useState('')
  return (
    <View style={styles.container} >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {Platform.OS === 'ios' ? <Separator height={display.setHeight(5)} /> : null}
      <View style={styles.headerContaner}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle} >Login Into Food House</Text>
      </View>
      <Separator height={display.setHeight(5)} />
      <Text style={styles.title}>
        Enter your registered phone number to log in
      </Text>
      <Separator height={display.setHeight(10)} />
      <View style={styles.inputContainer}>
       
        <TouchableOpacity
          onPress={() => setShowCountryList(!showCountrylist)}
          style={styles.countryListContainer}
        >
          <Image
            source={{
              uri: StaticImageService.getFlagIcon(selectedCountry.code),
            }}
            style={styles.flagImageIcon}
          />
          <Text style={styles.countryText}>{selectedCountry.callingCode}</Text>
          <MaterialIcons name="arrow-drop-down" size={25} />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
          onChangeText={(text)=>setPhoneNumber(text)}
            placeholder="Phone number"
            placeholderTextColor={colors.DEFAULT_GREY}
            selectionColor={colors.DEFAULT_GREY}
            style={styles.phoneInputText}
            keyboardType="numeric"
          />
        </View>
      </View>
      {showCountrylist == true && (
        <View style={styles.countryDropDown}>
          <FlatList
            data={countrylist}
            
            showsVerticalScrollIndicator={false}
            pagingEnabled
            overScrollMode="never"
            renderItem={({ item }) => (
              <CountryCard
                {...item}
                onPress={() =>
                {
                  setSelectedCountry(
                    countrylist.find((country) => country.name === item.name)
                  )
                  setShowCountryList(false)
                }
                }
              />
            )}
          />
        </View>
      )}
      <Separator height={display.setHeight(5)}/>
       <TouchableOpacity style={styles.continueButton}
       onPress={()=>{
        navigation.navigate('Verification',{phoneNumber})
       }}
      activeOpacity={0.8}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterPhoneScreen;

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
  title: {
    fontSize: 25,
    fontFamily: fonts.Bitter_ErxtraBold,
    lineHeight: 20 * 1.5,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  countryListContainer: {
    backgroundColor: colors.LIGHT_GREY,
    width: display.setWidth(25),
    height: display.setHeight(6),
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: colors.LIGHT_GREY2,
    flexDirection: "row",
  },
  phoneInputContainer: {
    backgroundColor: colors.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.LIGHT_GREY2,
    height: display.setHeight(6),
    justifyContent: "center",
    flex: 1,
  },
  flagImageIcon: { width: 30, height: 20, resizeMode: "contain" },
  countryText: {
    fontSize: 16,
    fontFamily: fonts.Bitter_Medium,
  },
  phoneInputText: {
    fontSize: 18,
    fontFamily: fonts.Bitter_Medium,
  },
  countryDropDown: {
    position: "absolute",
     padding:5,
    width: display.setWidth(91),
    height: display.setHeight(40),
    borderWidth: 1,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: colors.LIGHT_GREY2,
    borderColor: colors.DEFAULT_BLACK,
    //bottom: display.setHeight(4),
    top: display.setHeight(43), // Đặt vị trí top
    zIndex: 1,
  },
  continueButton: {
    
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 10,
    marginHorizontal: 20,
    height: display.setHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  continueText: {
    fontSize: 20,
    color: colors.DEFAULT_WHITE,
    fontFamily: fonts.Bitter_Bold,
  },
});
