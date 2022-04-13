import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../pages/Profile/Profile";
import Login from "../pages/Profile/Login";
import Signup from "../pages/Profile/Signup";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileView">
      <Stack.Screen
        name="ProfileView"
        component={Profile}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
