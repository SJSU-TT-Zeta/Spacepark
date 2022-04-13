import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";

import ProfileIcon from "../../assets/images/profile1.svg";

import styles from "./styles";

const psuedoData = {
  username: "Erica_Xue",
  email: "erica.xue@sjsu.edu",
};

const Profile = (props) => {
  useEffect(() => {
    // Check if user is logged in
  }, []);

  const psuedoLogout = () => {
    props.navigation.navigate("Login");
  };

  const psuedoSignup = () => {
    props.navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.profileWrap}>
        <Text style={styles.title}>Hello Erica_Xue!</Text>
        <ProfileIcon width={155} height={155} color={"#2E2E2E"} />
        <Text style={styles.text}>Erica_Xue</Text>
        <Text style={styles.text}>erica.xue@sjsu.edu</Text>
      </View>

      <View style={styles.logout}>
        <TouchableOpacity onPress={psuedoLogout} style={styles.logoutWrap}>
          <Text style={styles.logText}>Logout</Text>
          <MaterialIcons
            style={styles.logIcon}
            name="logout"
            size={28}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.delete}>
        <TouchableOpacity onPress={psuedoSignup} style={styles.del}>
          <Text style={styles.delText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
