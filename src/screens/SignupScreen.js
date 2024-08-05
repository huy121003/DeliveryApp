import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  Platform
} from "react-native";
import React, { useState } from "react";
import { colors, fonts, images } from "../constants";
import { Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { display } from "../utils";

const SignupScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);



  return (
    <View style={styles.container}>
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
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <Separator height={display.setHeight(5)} />
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.contenContainer}>
        <Text style={styles.content}>
          Enter your Name, Email and password for sign up. 
         <TouchableOpacity
       
         activeOpacity={0.8}
         onPress={()=>navigation.goBack()}>
         <Text style={styles.alreadyaccount}> Already have Account?</Text>
         </TouchableOpacity>
        </Text>
       
      </View>
      <Separator height={display.setHeight(5)} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="User name"
            placeholderTextColor={colors.DEFAULT_GREY}
            selectionColor={colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={display.setHeight(4)} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={22}
            color={colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Email address"
            placeholderTextColor={colors.DEFAULT_GREY}
            selectionColor={colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={display.setHeight(4)} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.DEFAULT_GREY}
            selectionColor={colors.DEFAULT_GREY}
            secureTextEntry={isPasswordShow == false ? true : false}
            style={styles.inputText}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordShow(!isPasswordShow)}
            activeOpacity={0.8}
          >
            <Feather
              name={isPasswordShow == false ? "eye" : "eye-off"}
              size={22}
              color={colors.DEFAULT_GREY}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text></Text>

      <TouchableOpacity style={styles.signupButton} activeOpacity={0.8}
        onPress={()=>navigation.goBack()}>
        <Text style={styles.signupText}>Create Account</Text>
      </TouchableOpacity>

      <Separator height={display.setHeight(3)} />
      <Text style={styles.orText}>OR</Text>
      <Separator height={display.setHeight(3)} />
      <TouchableOpacity activeOpacity={0.8} style={styles.googleButton}>
        <View style={styles.socialButtonContainer}>
          <Image
            source={images.google}
            resizeMode="contain"
            style={styles.socialButtonLogo}
          />
          <Text style={styles.socialButtonText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.facebookButton}>
        <View style={styles.socialButtonContainer}>
          <Image
            source={images.facebook}
            resizeMode="contain"
            style={styles.socialButtonLogo}
          />

          <Text style={styles.socialButtonText}>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

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
    fontSize: 30,
    fontFamily: fonts.Bitter_ErxtraBold,
    lineHeight: 20 * 1.5,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 18,
    fontFamily: fonts.Bitter_Medium,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: colors.LIGHT_GREY2,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.LIGHT_GREY2,
    justifyContent: "center",
  },
  inputSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: "center",
    padding: 0,
    height: display.setHeight(6),
    color: colors.DEFAULT_BLACK,
    flex: 1,
  },


  signupButton: {
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 10,
    marginHorizontal: 20,
    height: display.setHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 20,
    color: colors.DEFAULT_WHITE,
    fontFamily: fonts.Bitter_Bold,
  },


  orText: {
    fontFamily: fonts.Bitter_Medium,
    color: colors.DEFAULT_BLACK,
    fontSize: 17,
    marginRight: 5,
    alignSelf: "center",
  },
  facebookButton: {
    backgroundColor: colors.FACEBOOK_BLUE,
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  googleButton: {
    backgroundColor: colors.GOOGLE_BLUE,
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  socialButtonContainer: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  socialButtonLogo: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 30,
  },
  socialButtonText: {
    fontSize: 15,
    fontFamily: fonts.Bitter_Medium,
    color: colors.DEFAULT_WHITE,
  },
  alreadyaccount:{
    color:colors.DEFAULT_GREEN,
    fontFamily:fonts.Bitter_Bold,
    fontSize:18,
    bottom:-2.5
  }
});
