import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";

import styles from "./styles";

const Login = (props) => {
  useEffect(() => {
    // Check if user is logged in
  }, []);

  const psuedoLogin = () => {
    props.navigation.navigate("ProfileView");
  };

  const psuedoSignup = () => {
    props.navigation.navigate("ProfileView");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={psuedoSignup} style={styles.back}>
          <Ionicons name="chevron-back" size={38} color="#2E2E2E" />
        </TouchableOpacity>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleTwo}>Sign Up</Text>
        <View style={styles.formItem}>
          <View style={styles.formItem1}>
            <Text style={styles.formText}>Email</Text>
          </View>
          <View style={styles.formItem2}>
            <TextInput style={styles.formInput} placeholder={"Enter Email"} />
          </View>
        </View>
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
          <View style={styles.formItem1}>
            <Text style={styles.formText}>Confirm Password</Text>
          </View>
          <View style={styles.formItem2}>
            <TextInput
              style={styles.formInput}
              placeholder={"Re-enter Password"}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <View style={styles.formItem3}>
            <View style={styles.buttonHelper}>
              <TouchableOpacity
                onPress={psuedoSignup}
                style={styles.buttonSign}
              >
                <Text style={styles.buttonText1}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
