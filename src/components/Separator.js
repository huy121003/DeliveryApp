import { View } from "react-native";
import React from "react";

const Separator = ({ height, width, ...extraProps }) => {
  return <View style={{ height, width, ...extraProps }} />;
};

Separator.defaultProps = {
  height: 0,
  width: 0
};

export default Separator;
