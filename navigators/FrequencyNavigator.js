import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Frequency from "../pages/Frequency/Frequency";
import FrequencyNorthParking from "../pages/Frequency/FrequencyNorthParking.js";
import FrequencyChart from "../pages/Frequency/FrequencyChart";

const Stack = createStackNavigator();

const FrequencyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FrequencyView">
      <Stack.Screen
        name="FrequencyView"
        component={Frequency}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="FrequencyChart"
        component={FrequencyChart}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="FrequencyNorthParking"
        component={FrequencyNorthParking}
        options={{ headerShown: false, gestureEnabled: false}}
      /> 
    </Stack.Navigator>
  );
};

export default FrequencyStackNavigator;
