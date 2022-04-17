import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../../api/api-config";
import { getUser } from "../../api/User/user-auth";

import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";

import ProfileIcon from "../../assets/images/profile1.svg";

import styles from "./styles";

const userObject = {
  username: "Sign Up Today!",
  email: "",
};

const Profile = (props) => {
  const [user, setUser] = useState(userObject);
  
  useEffect(() => {
    if(auth.currentUser) {
      const user = getUser(auth.currentUser.uid);
      if(user) {
        setUser(user);
      } else {
        setUser(userObject);
      }
    } else {
      setUser(userObject);
    }
  }, []);

  const logout = () => {
    auth.signOut();
    props.navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>

      <View style={styles.profileWrap}>
        <Text style={styles.title}>Hello {user.username}</Text>
        <ProfileIcon width={155} height={155} color={"#2E2E2E"} />
        <Text style={styles.text}>{user.username}</Text>
        <Text style={styles.text}>{user.email}</Text>
      </View>

      <View style={styles.logout}>
        <TouchableOpacity onPress={logout} style={styles.logoutWrap}>
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
        <TouchableOpacity onPress={logout} style={styles.del}>
          <Text style={styles.delText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
