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
} from "react-native";
import React, { useState } from "react";
import { colors, fonts, images } from "../constants";
import { Separator } from "../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { display } from "../utils";

import OTPTextInput from "react-native-otp-textinput";

const VerificationScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
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
        <Text style={styles.headerTitle}>Verification</Text>
      </View>
      <Separator height={display.setHeight(5)} />
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.content}>
        Enter your OTP Code From The Phone ,we just Sent you at
        <Text style={styles.phoneText}> {phoneNumber}</Text>
      </Text>
      <Separator height={display.setHeight(5)} />
      <Text style={styles.correctNumberText}>
        Did you Enter The Correct Number?
      </Text>
      <Separator height={display.setHeight(5)} />
      <View style={{ alignItems: "center" }}>
        <OTPTextInput
          //handleTextChange={setOtp}
          inputCount={4}
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInputField}
          tintColor={colors.DEFAULT_GREEN}
          offTintColor={colors.DEFAULT_GREEN}
        />
      </View>
      <Separator height={display.setHeight(5)} />
      <View style={styles.resentCodeContainer}>
        <Text style={styles.resentCodeText}>Don't receive SMS?</Text>
        <TouchableOpacity style={styles.resentCodeButton}>
          <Text style={styles.resentCodeButtonText}>Resent Code</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => navigation.navigate("BottomTab")}
        activeOpacity={0.8}
      >
        <Text style={styles.signinText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

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
    color: colors.DEFAULT_GREY,
  },
  phoneText: {
    color: colors.DEFAULT_YELLOW,
    fontSize: 18,
    fontFamily: fonts.Bitter_Medium,
  },
  correctNumberText: {
    color: colors.DEFAULT_BLACK,
    fontSize: 18,
    fontFamily: fonts.Bitter_Medium,
    marginLeft: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: display.setWidth(80),
    // marginLeft: 20,
    alignItems: "center",
  },
  otpInputField: {
    width: 60,
    height: 70,
    borderWidth: 1,
    borderColor: colors.DEFAULT_GREY,
    borderRadius: 10,
    color: display.DEFAULT_BLACK,
    textAlign: "center",
  },
  signinButton: {
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 10,
    marginHorizontal: 20,
    height: display.setHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signinText: {
    fontSize: 20,
    color: colors.DEFAULT_WHITE,
    fontFamily: fonts.Bitter_Bold,
  },
  resentCodeContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  resentCodeText: {
    fontSize: 16,
    fontFamily: fonts.Bitter_Medium,
  },
  resentCodeButtonText: {
    fontSize: 16,
    fontFamily: fonts.Bitter_Medium,
    color: colors.DEFAULT_GREEN,
  },
});
