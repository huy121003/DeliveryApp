import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants";
import { Separator } from "../components";
import MapView, { Marker } from "react-native-maps";
import { display } from "../utils";

const AddressUser = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState({
    latitude: 21.036237,
    longitude: 105.800619,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [markerCoordinate, setMarkerCoordinate] = useState({
    latitude: 21.036237,
    longitude: 105.800619,
  });

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
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Address</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search address"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Ionicons
          name="search"
          size={24}
          style={styles.searchIcon}
          onPress={() => {
            // Thêm logic tìm kiếm khi người dùng nhấn vào biểu tượng tìm kiếm
            console.log("Tìm kiếm:", searchText);
          }}
        />
      </View>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
        zoomEnabled={true}
        zoomControlEnabled={true}
      >
        <Marker
          coordinate={markerCoordinate}
          title="Quan Hoa"
          description="Cầu Giấy, Hà Nội"
        />
      </MapView>
    </View>
  );
};

export default AddressUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: colors.DEFAULT_WHITE,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 10,
    backgroundColor: colors.DEFAULT_WHITE,
    borderRadius: 10,
    elevation: 2, // Tạo hiệu ứng bóng cho Android
    shadowColor: "#000", // Tạo hiệu ứng bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
