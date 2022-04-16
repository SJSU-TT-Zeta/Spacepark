import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";
import styles from "./styles";

const Info = (props) => {
  const psuedoHome = () => {
    props.navigation.navigate("GarageView");
  };

  const goToNorthFrequency = () => {
    console.log(props);
    props.navigation.navigate("Frequency", { screen: "FrequencyNorthParking" });
  };

  return (
    <View styles={{ flex: 1 }}>
      <ScrollView
        style={{
          width: "100%",
        }}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={psuedoHome} style={styles.back}>
            <Ionicons name="chevron-back" size={38} color="#2E2E2E" />
          </TouchableOpacity>
          <Image style={styles.logo} source={logo} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>SJSU North Parking Garage</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={goToNorthFrequency}
            >
              <Text style={styles.buttonText}>Charts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={psuedoHome}>
              <Text style={styles.buttonText}>Reviews</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            width: "85%",
            marginTop: "5%",
            padding: 10,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={styles.contentItemTitle}>Total parking spots</Text>
          <View style={{ width: "80%" }}>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              General ----------{" "}
              <Text style={{ fontWeight: "bold" }}> 1,445</Text>
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              Disabled --------- <Text style={{ fontWeight: "bold" }}>8 </Text>
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              Employee -------- <Text style={{ fontWeight: "bold" }}>335</Text>
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              R-Permit --------- <Text style={{ fontWeight: "bold" }}>7</Text>
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              30-Min Time Zone --------{" "}
              <Text style={{ fontWeight: "bold" }}>22</Text>
            </Text>
          </View>
        </View>

        <View style={styles.contentItem}>
          <Text style={styles.contentItemTitle}>Pricing</Text>
          <View style={{ width: "80%" }}>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              Mon - Fri
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              30 Mins --------- $1.00
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              24 Hours --------- $8.00
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              After 5:30 PM ------ $5.00
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              Sat - Sun
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              24 Hours --------- $5.00
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              No Change & Refund
            </Text>
          </View>
        </View>

        <View style={[styles.contentItem, { marginBottom: 20 }]}>
          <Text style={styles.contentItemTitle}>Hours</Text>
          <View style={{ width: "80%" }}>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              Mon - Fri
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              Open 6:00 Am - 1:00 AM
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              'E', 'R', 'H', Carpool, Overnight
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              Permits
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>Open 24 Hours</Text>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 18 }}>
              Pay Method
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              {" "}
              1. ParkMobile App
            </Text>
            <Text style={{ marginTop: 5, fontSize: 18 }}>
              {" "}
              2. Pay Station on Each Parking Level
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Info;
