import React, { useEffect } from "react";
import Navigators from "./src/navigations";
import { Provider } from "react-redux";
import {
  useFonts,
  Bitter_100Thin,
  Bitter_200ExtraLight,
  Bitter_300Light,
  Bitter_400Regular,
  Bitter_500Medium,
  Bitter_600SemiBold,
  Bitter_700Bold,
  Bitter_800ExtraBold,
  Bitter_900Black,
} from "@expo-google-fonts/bitter";
import store from "./src/redux/store";

export default function App() {
  let [fontsLoaded] = useFonts({
    Bitter_100Thin,
    Bitter_200ExtraLight,
    Bitter_300Light,
    Bitter_400Regular,
    Bitter_500Medium,
    Bitter_600SemiBold,
    Bitter_700Bold,
    Bitter_800ExtraBold,
    Bitter_900Black,
  });

  if (!fontsLoaded) {
    return null; // or any loading indicator if needed
  } else
    return (
      <Provider store={store}>
        <Navigators />
      </Provider>
    );
}
