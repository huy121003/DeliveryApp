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
import React, { useState } from "react";
import { colors, countrylist, fonts, images } from "../constants";
import { CountryCard, Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { display } from "../utils";
import { StaticImageService } from "../services";

const UserSetting = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.DEFAULT_GREEN}
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
          color={colors.DEFAULT_WHITE}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.userContainer}>
        <Image source={images.avatar} style={styles.userImage} />
        <View style={styles.infoUser}>
          <Text style={styles.nameText}>quanghuy</Text>
          <Text style={styles.emailText}>quanghuy2003.hh@gmail.com</Text>
        </View>
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.titleText}>My account</Text>
        <TouchableOpacity style={styles.optionContainer} onPress={()=>navigation.navigate('Information')}>
          <View style={styles.leftOption}>
            <Ionicons
              name="person-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>Manage profile</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}
        onPress={()=>{
          navigation.navigate("Payment")
        }}>
          <View style={styles.leftOption}>
            <Ionicons
              name="card-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>Payment</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={colors.DEFAULT_GREY}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Notification</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.leftOption}>
            <Ionicons
              name="notifications-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>Notification</Text>
          </View>
          <Switch
            trackColor={{
              false: colors.DEFAULT_GREY,
              true: colors.DEFAULT_GREEN,
            }}
            thumbColor={isEnabled ? colors.DEFAULT_WHITE : colors.LIGHT_GREY2}
            ios_backgroundColor={colors.LIGHT_GREY2}
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.leftOption}>
            <Ionicons
              name="notifications-outline"
              color={colors.DEFAULT_GREEN}
              size={20}
            />
            <Text style={styles.nameOption}>Promothinal Notification</Text>
          </View>
          <Switch
            trackColor={{
              false: colors.DEFAULT_GREY,
              true: colors.DEFAULT_GREEN,
            }}
            thumbColor={isEnabled ? colors.DEFAULT_WHITE : colors.LIGHT_GREY2}
            ios_backgroundColor={colors.LIGHT_GREY2}
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>More</Text>
        <TouchableOpacity style={styles.optionContainer}
     >
          <View style={styles.leftOption}>
          <Ionicons name="log-out-outline" color={colors.DEFAULT_GREEN}
            size={20}/>
            <Text style={styles.nameOption}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContaner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.DEFAULT_GREEN,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Medium,
    width: display.setWidth(80),
    textAlign: "center",
    color: colors.DEFAULT_WHITE,
  },
  userContainer: {
    backgroundColor: colors.DEFAULT_GREEN,
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: colors.DEFAULT_WHITE,
  },
  infoUser: {
    marginLeft: 20,
  },
  nameText: {
    color: colors.DEFAULT_WHITE,
    fontFamily: fonts.Bitter_Medium,
    fontSize: 18,
  },
  emailText: {
    color: colors.DEFAULT_WHITE,
    fontFamily: fonts.Bitter_Regular,
    fontSize: 16,
  },
  settingContainer: {
    margin: 10,
    borderRadius: 20,
    padding: 20,
    flex: 1,
    backgroundColor: colors.DEFAULT_WHITE,
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
