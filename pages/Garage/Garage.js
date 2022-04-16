import { Button, Text, View, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";

import { MaterialIcons } from "@expo/vector-icons";

import { styles, chartConfig } from "./styles";

import logo from "../../assets/sp_logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LineChart } from "react-native-chart-kit";
import { useEffect, useState } from "react";
import { set } from "react-native-reanimated";

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
        capacity: 500,
        total: 800,
      },
      {
        labels: ["0", "1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            data: [0.2, 0.4, 0.28, 0.8, 0.99, 0.43],
            color: () => `#15AB69`,
            strokeWidth: 2,
          },
        ],
      },
    ];

    setData(request);
  }, []);

  const goToLoginView = () => {
    // console.log(props);
    props.navigation.navigate("Login");
  };

  const refreshCharts = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={[styles.headerItem, styles.logo]} source={logo} />
        <TouchableOpacity style={styles.headerItem} onPress={refreshCharts}>
          <MaterialIcons name="refresh" size={40} color="#15AB69" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Parking Garages</Text>
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
            </View>

            <View style={styles.contentItemWrapWrap}>
              <View style={{ width: "100%" }}>
                <TouchableOpacity style={styles.button}>
                  <Text>More Info</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    alignSelf: "stretch",
                    textAlign: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{`${
                    data[0].total - data[0].capacity
                  } `}</Text>
                  spots available
                </Text>
              </View>

              <LineChart
                data={data[1]}
                chartConfig={chartConfig}
                width={Dimensions.get("window").width * 0.9 - 140}
                height={80}
                hidePointsAtIndex={[...data[1].datasets[0].data.keys()]}
                segments={2}
                withVerticalLabels={false}
                withVerticalLines={false}
                withShadow={false}
                fromZero={true}
                bezier
              />
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
            </View>

            <View style={styles.contentItemWrapWrap}>
              <View style={{ width: "100%" }}>
                <TouchableOpacity style={styles.button}>
                  <Text>More Info</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    alignSelf: "stretch",
                    textAlign: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>N/A </Text>
                  spots available
                </Text>
              </View>
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
            </View>

            <View style={styles.contentItemWrapWrap}>
              <View style={{ width: "100%" }}>
                <TouchableOpacity style={styles.button}>
                  <Text>More Info</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    alignSelf: "stretch",
                    textAlign: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>N/A </Text>
                  spots available
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Garage;
