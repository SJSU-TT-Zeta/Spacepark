import React from "react";

import { StatusBar, View } from "react-native";
import Constants from "expo-constants";

const HeaderBar = () => {
  return (
    <View
      style={
        Platform.OS == "ios"
          ? { height: Constants.statusBarHeight, backgroundColor: "#F7F8FA" }
          : {}
      }
    >
      <StatusBar backgroundColor="#F7F8FA" barStyle="dark-content" />
    </View>
  );
};

export default HeaderBar;
