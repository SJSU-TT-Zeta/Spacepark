import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import { auth } from "../../api/api-config";
import { getUser } from "../../api/User/user-auth";

import logo from "../../assets/sp_logo.png";
import ProfileIcon from "../../assets/images/profile1.svg";

import styles from "./styles";
import globalStyles from "../globalStyle";

const userObject = {
  email: "erica.xue@sjsu.edu",
};

const Profile = (props) => {
  const [user, setUser] = useState(userObject);

  useEffect(() => {
    if (auth.currentUser) {
      const user = getUser(auth.currentUser.uid);
      if (user) {
        setUser(user);
      } else {
        setUser(userObject);
      }
    } else {
      setUser(userObject);
    }
  }, []);

  const onLogout = () => {
    auth.signOut();
    props.navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Image style={globalStyles.logo} source={logo} />
      </View>

      <View style={styles.profileWrap}>
        <Text style={styles.title}>Hello!</Text>
        <ProfileIcon width={155} height={155} color={"#2E2E2E"} />
        <Text style={styles.text}>{user.email}</Text>
      </View>

      <View style={styles.logout}>
        <TouchableOpacity onPress={onLogout} style={styles.logoutWrap}>
          <Text style={styles.logText}>Logout</Text>
          <MaterialIcons
            style={styles.logIcon}
            name="logout"
            size={28}
            color="#E41919"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
