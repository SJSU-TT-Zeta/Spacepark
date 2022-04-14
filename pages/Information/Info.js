import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";


import { Ionicons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";
import styles from "./styles";


const Info = (props) => {
  const psuedoHome = () => {
    props.navigation.navigate("GarageView");
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={psuedoHome} style={styles.back}>
            <Ionicons name="chevron-back" size={38} color="#2E2E2E" />
          </TouchableOpacity>
          <Image style={styles.logo} source={logo} />
        </View>

        <View style={styles.content}>
                <Text style={styles.title}>SJSU North Parking Garage</Text>
                <TouchableOpacity style={styles.button} onPress={psuedoHome}>
                    <Text style={styles.buttonText}>Reviews</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.contentItem}>
          <Text>Total parking spots</Text>
          <Text>General ---------- 1,445</Text>
          <Text>Disabled --------- 8 </Text>
          <Text>Employee -------- 335</Text>
          <Text>R-Permit --------- 7</Text>
          <Text>30-Min Time Zone -------- 22</Text>
        </View>

        <View style={styles.contentItem}>
            <Text>Pricing</Text>
            <Text style={{ fontWeight: "bold" }}>Mon - Fri</Text>
            <Text>30 Mins --------- $1.00</Text>
            <Text>24 Hours --------- $8.00</Text>
            <Text>After 5:30 PM ------ $5.00</Text>
            <Text style={{ fontWeight: "bold" }}>Sat - Sun</Text>
            <Text>24 Hours --------- $5.00</Text>
            <Text style={{ fontWeight: "bold" }}>No Change & Refund</Text>
        </View>

        <View style={styles.contentItem}>
            <Text>Hours</Text>
            <Text style={{ fontWeight: "bold" }}>Mon - Fri</Text>
            <Text>Open 6:00 Am - 1:00 AM</Text>
            <Text style={{ fontWeight: "bold" }}>'E', 'R', 'H', Carpool, Overnight</Text>
            <Text style={{ fontWeight: "bold" }}>Permits</Text>
            <Text>Open 24 Hours</Text>
            <Text style={{ fontWeight: "bold" }}>Pay Method</Text>
            <Text> 1. ParkMobile App</Text>
            <Text> 2. Pay Station on Each Parking Level</Text>
        </View>
    </SafeAreaView>
  );
};

export default Info;
