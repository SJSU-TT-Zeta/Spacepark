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

import { BarChart } from "react-native-chart-kit";

import globalStyles from "../globalStyle";
import { React, useCallback, useRef, useState } from "react";

import WrappedBarChart from "../../components/BarChart";

const fakeData = [
  {
    id: "id0",
    spotsAvailable: 800,
  },
  {
    id: "id1",
    spotsAvailable: 700,
  },
  {
    id: "id2",
    spotsAvailable: 600,
  },
  {
    id: "id3",
    spotsAvailable: 500,
  },
  {
    id: "id4",
    spotsAvailable: 400,
  },
  {
    id: "id5",
    spotsAvailable: 300,
  },
  {
    id: "id6",
    spotsAvailable: 200,
  },
];

const dates = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const FrequencyNorthParking = (props) => {
  const help = new Animated.Value(0);
  const scrollX = useRef(help).current;
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goToGarageView = () => {
    props.navigation.navigate("FrequencyView");
  };

  const incrementChart = () => {
    if (index < fakeData.length - 1) {
      flatListRef.current.scrollToIndex({ index: index + 1 });
      setIndex(index + 1);
    }
  };

  const decrementChart = () => {
    if (index > 0) {
      flatListRef.current.scrollToIndex({ index: index - 1 });
      setIndex(index - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.header}>
        <TouchableOpacity
          style={globalStyles.backArrow}
          onPress={goToGarageView}
        >
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
            {dates[index]}
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
              <Text style={{ fontWeight: "bold" }}>
                {`${fakeData[index].spotsAvailable} `}{" "}
              </Text>
              spots available
            </Text>
          </View>
        </View>

        <View style={{ height: 300, marginTop: 10 }}>
          <Animated.FlatList
            ref={flatListRef}
            initialNumToRender={7}
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get("window").width}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            style={{
              height: 300,
              width: Dimensions.get("window").width,
            }}
            data={fakeData}
            renderItem={() => <WrappedBarChart />}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          />
        </View>

        <View
          style={{
            width: "100%",
            marginTop: "2%",
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
            <TouchableOpacity style={{}} onPress={decrementChart}>
              <Text>PREV</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <TouchableOpacity style={{}} onPress={incrementChart}>
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FrequencyNorthParking;
