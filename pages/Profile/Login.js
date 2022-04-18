import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../../api/api-config";
import { getUser, userSignIn } from "../../api/User/user-auth";

import logo from "../../assets/sp_logo.png";

import styles from "./styles";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(async () => {
    if(auth.currentUser) {
      const user = await getUser(auth.currentUser.uid);
      if(user) {
        props.navigation.navigate("ProfileView");
      }
    }
  }, []);

  const psuedoSignup = () => {
    props.navigation.navigate("Signup");
  };

  const onEmailChange = (value) => {
    setEmail(value);
  }

  const onPasswordChange = (value) => {
    setPassword(value)
  }

  const onSubmit = async () => {
    await userSignIn(email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleTwo}>Login</Text>
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
          <View style={styles.formItem3}>
            <View style={styles.buttonHelper}>
              <TouchableOpacity onPress={onSubmit} style={styles.button}>
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
