import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { colors, fonts, general } from "../constants";
import { WelcomeCard, Separator } from "../components";
import { display } from "../utils";

const pageStyle = (isActive) =>
  isActive
    ? styles.page
    : { ...styles.page, backgroundColor: colors.DEFAULT_GREY };
const Pagination = ({ index }) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(general.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i}></View>
        ) : (
          <View style={pageStyle(false)} key={i}></View>
        )
      )}
    </View>
  );
};

const WelcomeScreen = ({ navigation }) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef(null);

  const onViewRef = useRef(({ viewableItems }) => {
    setWelcomeListIndex(viewableItems[0]?.index || 0);
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={display.setHeight(8)} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={general.WELCOME_CONTENTS}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={display.setHeight(8)} />
      <Pagination index={welcomeListIndex} />
      <Separator height={display.setHeight(8)} />
      {welcomeListIndex === 2 ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
          style={styles.startedButton}
          activeOpacity={0.8}
        >
          <Text style={styles.startedText}>GET STARTED</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ marginLeft: 10 }}
            onPress={() => welcomeList.current.scrollToEnd()}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={pageScroll}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: display.setHeight(60),
  },
  pageContainer: {
    flexDirection: "row",
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: display.setWidth(90),
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Medium,
  },
  startedButton: {
    backgroundColor: colors.DEFAULT_GREEN,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  startedText: {
    fontSize: 20,
    fontFamily: fonts.Bitter_Bold,
    color: colors.DEFAULT_WHITE,
  },
});
