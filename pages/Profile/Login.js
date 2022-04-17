import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../../api/api-config";
import { getUser } from "../../api/User/user-auth";

import logo from "../../assets/sp_logo.png";

import styles from "./styles";

const Login = (props) => {

  useEffect(() => {
    if(auth.currentUser) {
      const user = getUser(auth.currentUser.uid);
      if(user) {
        props.navigation.navigate("ProfileView");
      }
    }
  }, []);

  const psuedoLogin = () => {
    props.navigation.navigate("ProfileView");
  };

  const psuedoSignup = () => {
    props.navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleTwo}>Login</Text>
        <View style={styles.formItem}>
          <View style={styles.formItem1}>
            <Text style={styles.formText}>Username</Text>
          </View>
          <View style={styles.formItem2}>
            <TextInput
              style={styles.formInput}
              placeholder={"Enter Username"}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <View style={styles.formItem1}>
            <Text style={styles.formText}>Password</Text>
          </View>
          <View style={styles.formItem2}>
            <TextInput
              style={styles.formInput}
              placeholder={"Enter Password"}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <View style={styles.formItem3}>
            <View style={styles.buttonHelper}>
              <TouchableOpacity onPress={psuedoLogin} style={styles.button}>
                <Text style={styles.buttonLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.signQ}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={psuedoSignup}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
