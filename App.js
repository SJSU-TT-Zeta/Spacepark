import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import { auth } from "./api/api-config";

import BottomTab from "./navigators/TabNavigator";

import "react-native-gesture-handler";

const App = () => {
  useEffect(() => {
    return () => auth.signOut();
  });

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
};

export default App;
