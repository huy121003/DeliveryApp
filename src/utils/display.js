import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const setWidth = (w) => (width / 100) * w;
const setHeight = (h) => (height / 100) * h;
export default{ setHeight, setWidth };
