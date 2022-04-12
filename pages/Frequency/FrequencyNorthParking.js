import {
  Button,
  Text,
  View,
  Image,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";

import RNAnimatedScrollIndicators from "react-native-animated-scroll-indicators";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

import logo from "../../assets/sp_logo.png";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { LineChart } from "react-native-chart-kit";

import globalStyles from "../globalStyle";
import { React, useRef, useState } from "react";

const fakeData = {
  monday: {
    id: "monId",
  },
};

const FrequencyNorthParking = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const flatListRef = useRef();

  const goToGarageView = () => {
    props.navigation.navigate("FrequencyView");
  };

  const test = () => {
    flatListRef.scrollToIndex({ index: "id2" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity style={globalStyles.backArrow} onPress={test}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" />
        </TouchableOpacity>
        <Image style={globalStyles.logo} source={logo} />
      </View>

      <Text style={styles.title}>SJSU North Parking Garage Frequency</Text>

      <View style={styles.content}>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              marginTop: "auto",
              marginBottom: "auto",
              width: "50%",
              textAlign: "center",
            }}
          >
            Monday
          </Text>
          <View
            style={{
              flexGrow: 1,
              marginTop: "auto",
              marginBottom: "auto",
              width: "50%",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                alignSelf: "stretch",
                textAlign: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>800 </Text>
              spots available
            </Text>
          </View>
        </View>

        <View style={{ height: 300 }}>
          <Animated.FlatList
            red={(ref) => (flatListRef = ref)}
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").width}
            horizontal
            pagingEnabled
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={{ height: 300, backgroundColor: "grey" }}
            data={[
              {
                id: "id1",
                title: "Hello World",
                color: "blue",
              },
              {
                id: "id2",
                title: "Hello World2",
                color: "green",
              },
              {
                id: "id3",
                title: "Hello World3",
                color: "red",
              },
              {
                id: "id4",
                title: "Hello World3",
                color: "black",
              },
              {
                id: "i54",
                title: "Hello World3",
                color: "red",
              },
              {
                id: "id6",
                title: "Hello World3",
                color: "blue",
              },
              {
                id: "id7",
                title: "Hello World3",
                color: "green",
              },
            ]}
            renderItem={(item) => {
              return (
                <View
                  style={{
                    width: Dimensions.get("window").width,
                    height: 300,
                    backgroundColor: item.item.color,
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "#fff",
                      borderWidth: 1,
                      width: "100%",
                    }}
                  >
                    {item.item.title}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          />
        </View>

        <View
          style={{
            // backgroundColor: "blue",
            width: "100%",
            marginTop: "2%",
            // position: "absolute",
            // bottom: "40%",
          }}
        >
          <RNAnimatedScrollIndicators
            numberOfCards={7}
            scrollWidth={Dimensions.get("window").width}
            activeColor={"#00518F"}
            inActiveColor={"#fab040"}
            scrollAnimatedValue={scrollX}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: Dimensions.get("window").width,
          }}
        >
          <View
            style={{
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <TouchableOpacity style={{}}>
              <Text>PREV</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <TouchableOpacity style={{}}>
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FrequencyNorthParking;
