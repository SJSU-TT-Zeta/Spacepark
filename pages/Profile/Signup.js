import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../../api/api-config";
import { getUser, createUserAccount } from "../../api/User/user-auth";
import { MaterialIcons } from "@expo/vector-icons";

import logo from "../../assets/sp_logo.png";

import styles from "./styles";
import globalStyles from "../globalStyle";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (auth.currentUser) {
      const user = getUser(auth.currentUser.uid);
      if (user) {
        props.navigation.navigate("ProfileView");
      }
    }
  }, []);

  const goToLogin = () => {
    props.navigation.navigate("Login");
  };

  const onEmailChange = (value) => {
    setEmail(value);
  };

  const onUsernameChange = (value) => {
    setUsername(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
  };

  const onConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const onSubmit = async () => {
    await createUserAccount(email, username, password, confirmPassword);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity onPress={goToLogin} style={globalStyles.backArrow}>
          <MaterialIcons
            style={globalStyles.backArrow}
            name="arrow-back-ios"
            size={28}
            color="black"
          />
        </TouchableOpacity>
        <Image style={globalStyles.logo} source={logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleTwo}>Sign Up</Text>
        <View style={styles.formItem}>
          <View style={styles.formItem1}>
            <Text style={styles.formText}>Email</Text>
          </View>
          <View style={styles.formItem2}>
            <TextInput
              style={styles.formInput}
              onChangeText={onEmailChange}
              placeholder={"Enter Email"}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <View style={styles.formItem1}>
            <Text style={styles.formText}>Username</Text>
          </View>
          <View style={styles.formItem2}>
            <TextInput
              style={styles.formInput}
              onChangeText={onUsernameChange}
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
              onChangeText={onPasswordChange}
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
              onChangeText={onConfirmPasswordChange}
              placeholder={"Re-enter Password"}
            />
          </View>
        </View>
        <View style={styles.formItem}>
          <View style={styles.formItem3}>
            <View style={styles.buttonHelper}>
              <TouchableOpacity onPress={onSubmit} style={styles.buttonSign}>
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
