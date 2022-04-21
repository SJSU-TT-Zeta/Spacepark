import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Garage from "../pages/Garage/Garage";
import Info from "../pages/Information/Info";
import Review from "../pages/Review/Review";

const Stack = createStackNavigator();

const GarageStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="GarageView">
      <Stack.Screen
        name="GarageView"
        component={Garage}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default GarageStackNavigator;
