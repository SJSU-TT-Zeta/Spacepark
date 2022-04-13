import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import GarageStackNavigator from "./GarageNavigator";
import ProfileStackNavigator from "./ProfileNavigator";
import FrequencyStackNavigator from "./FrequencyNavigator";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Garage"
      activeColor="#15AB69"
      inactiveColor="rgba(44,44,44,0.3)"
      shifting={true}
      backBehavior={"history"}
      barStyle={{
        backgroundColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Garage"
        component={GarageStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="garage" size={30} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Frequency"
        component={FrequencyStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="bar-chart" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="user-circle" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
