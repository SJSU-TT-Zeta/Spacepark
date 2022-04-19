import {
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";

import { MaterialIcons } from "@expo/vector-icons";

import { styles, chartConfig } from "./styles";

import Constants from "expo-constants"

import logo from "../../assets/sp_logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LineChart } from "react-native-chart-kit";
import { useEffect, useState } from "react";

import StarRating from "react-native-star-rating";

const initData = [
  {
    capacity: 0,
    total: 1,
  },
  {
    datasets: [
      {
        data: [0, 1, 0],
        color: () => `#15AB69`,
        strokeWidth: 2,
      },
    ],
  },
];

const Garage = (props) => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    // psuedo calling API

    const request = [
      {
        capacity: 200,
        total: 800,
      },
      {
        labels: ["8am", "", "", "11am", "", "", "2pm"],
        datasets: [
          {
            data: [2, 4, 28, 8, 99, 43, 2],
            color: () => `#15AB69`,
            strokeWidth: 2,
          },
        ],
      },
    ];

    setData(request);
  }, []);

  const goToMoreInfo = () => {
    props.navigation.navigate("Info");
  };

  const refreshCharts = () => {};

  const goToNorthFrequency = () => {
    props.navigation.navigate("Frequency", {
      screen: "FrequencyNorthParking",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS == "ios" ? (
        <View
          style={{
            height: Constants.statusBarHeight,
            backgroundColor: "#F7F8FA",
          }}
        />
      ) : (
        <></>
      )}

      <ScrollView>
        <View style={styles.header}>
          <Image style={[styles.headerItem, styles.logo]} source={logo} />
          <Text style={styles.title}>Parking Garages</Text>
          <TouchableOpacity style={styles.headerItem} onPress={refreshCharts}>
            <MaterialIcons name="refresh" size={35} color="#15AB69" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.contentItem}>
            <Text style={styles.subtitle}>SJSU North Parking Garage</Text>

            <View style={styles.contentItemWrap}>
              <View style={styles.circle}>
                <CircularProgress
                  value={(data[0].capacity / data[0].total) * 100}
                  maxValue={100}
                  radius={60}
                  duration={1500}
                  activeStrokeWidth={12}
                  inActiveStrokeWidth={12}
                  textStyle={styles.progressText}
                  title={"Full"}
                  titleStyle={styles.progressTitle}
                  valueSuffix={"%"}
                />
                <StarRating
                  disabled={true}
                  maxStars={5}
                  fullStarColor="#ebdf3b"
                  rating={3.5}
                  starSize={20}
                />
              </View>

              <View style={styles.contentItemWrapWrap}>
                <TouchableOpacity style={styles.button} onPress={goToMoreInfo}>
                  <Text style={styles.textNorm}>More Info</Text>
                </TouchableOpacity>
                <Text style={[styles.textForeignFix, styles.textNorm]}>
                  <Text style={{ fontWeight: "bold" }}>{`${
                    data[0].total - data[0].capacity
                  } `}</Text>
                  spots available
                </Text>

                <TouchableOpacity onPress={goToNorthFrequency}>
                  <LineChart
                    data={data[1]}
                    chartConfig={chartConfig}
                    width={Dimensions.get("window").width * 0.9 - 140}
                    height={170}
                    // hidePointsAtIndex={[...data[1].datasets[0].data.keys()]}
                    segments={2}
                    withVerticalLabels={true}
                    withVerticalLines={true}
                    yAxisSuffix={"%"}
                    withShadow={false}
                    fromZero={true}
                    bezier
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.subtitle}>SJSU South Parking Garage</Text>

            <View style={styles.contentItemWrap}>
              <View style={styles.emptyCircleWrap}>
                <View style={styles.emptyCircle}>
                  <Text style={styles.comingSoon}>Coming Soon</Text>
                </View>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  fullStarColor="#ebdf3b"
                  rating={0.5}
                  starSize={20}
                />
              </View>

              <View style={styles.contentItemWrapWrap}>
                <TouchableOpacity
                  disabled={true}
                  style={[styles.button, styles.deactive]}
                >
                  <Text style={[styles.deactive, styles.textNorm]}>
                    More Info
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.textForeignFix, styles.textNorm]}>
                  <Text style={{ fontWeight: "bold" }}>N/A </Text>
                  spots available
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.subtitle}>SJSU West Parking Garage</Text>

            <View style={styles.contentItemWrap}>
              <View style={styles.emptyCircleWrap}>
                <View style={styles.emptyCircle}>
                  <Text style={styles.comingSoon}>Coming Soon</Text>
                </View>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  fullStarColor="#ebdf3b"
                  rating={4}
                  starSize={20}
                />
              </View>

              <View style={styles.contentItemWrapWrap}>
                <TouchableOpacity
                  disabled={true}
                  style={[styles.button, styles.deactive]}
                >
                  <Text style={[styles.deactive, styles.textNorm]}>
                    More Info
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.textForeignFix, styles.textNorm]}>
                  <Text style={{ fontWeight: "bold" }}>N/A </Text>
                  spots available
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Garage;
