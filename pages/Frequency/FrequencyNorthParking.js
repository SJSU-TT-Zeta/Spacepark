import { React, useEffect, useRef, useState } from "react";
import { Text, View, Image, Animated, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import RNAnimatedScrollIndicators from "react-native-animated-scroll-indicators";
import { MaterialIcons } from "@expo/vector-icons";

import WrappedBarChart from "../../components/BarChart";

import logo from "../../assets/sp_logo.png";

import styles from "./styles";
import globalStyles from "../globalStyle";

import { garageFrequency } from "../../api/Frequency/frequency";

import global from "../../global/global";

const initData = [
  {
    id: "sunday",
    freq: [0, 0, 0, 0, 0, 0],
  },
  {
    id: "monday",
    freq: [0, 0, 0, 0, 0, 0],
  },
  {
    id: "tuesday",
    freq: [0, 0, 0, 0, 0, 0],
  },
  {
    id: "wednesday",
    freq: [0, 0, 0, 0, 0, 0],
  },
  {
    id: "thursday",
    freq: [0, 0, 0, 0, 0, 0],
  },
  {
    id: "friday",
    freq: [0, 0, 0, 0, 0, 0],
  },
  {
    id: "saturday",
    freq: [0, 0, 0, 0, 0, 0],
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

const ex = {
  monday: [140, 643, 723, 756, 720, 374],
  sunday: [140, 356, 376, 340, 303, 287],
  thursday: [""],
  tuesday: [""],
  wednesday: [""],
};

const FrequencyNorthParking = (props) => {
  const help = new Animated.Value(0);
  const scrollX = useRef(help).current;
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [chartData, setChartData] = useState(initData);
  const [rendered, setRender] = useState(false);

  useEffect(async () => {
    if (global.charts !== undefined) {
      setChartData(global.charts);
    }

    const frequency = await garageFrequency("North");

    let i;
    const copyData = [...chartData];

    for (i = 0; i < dates.length; i++) {
      copyData[i].freq = frequency[dates[i].toLowerCase()];
    }
    setChartData(copyData);
    global.charts = copyData;
  }, [rendered]);

  const goToGarageView = () => {
    props.navigation.navigate("FrequencyView");
  };

  const incrementChart = () => {
    if (index < chartData.length - 1) {
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
              width: "50%",
              textAlign: "center",
            }}
          >
            {dates[index]}
          </Text>
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
            data={chartData}
            renderItem={(item) => (
              <WrappedBarChart data={item.item} renderCheck={setRender} />
            )}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: Dimensions.get("window").width,
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <TouchableOpacity
              style={{}}
              onPress={decrementChart}
              disabled={index == 0}
            >
              <Text
                style={{
                  fontSize: 20,
                  margin: 10,
                  color: index != 0 ? "black" : "grey",
                }}
              >
                PREV
              </Text>
            </TouchableOpacity>
          </View>

          <RNAnimatedScrollIndicators
            numberOfCards={7}
            scrollWidth={Dimensions.get("window").width}
            activeColor={"#00518F"}
            inActiveColor={"#fab040"}
            scrollAnimatedValue={scrollX}
          />

          <View
            style={{
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <TouchableOpacity onPress={incrementChart} disabled={index == 6}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: index != 6 ? "black" : "grey",
                  },
                ]}
              >
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FrequencyNorthParking;
