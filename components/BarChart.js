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

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { BarChart } from "react-native-chart-kit";

import { memo, React, useCallback, useRef, useState } from "react";

const data = {
  labels: ["6-8am", "8-10am", "10-12am", "12-2pm", "2-4pm", "4-6pm"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      colors: [
        (opacity = 1) => `grey`,
        (opacity = 1) => `#FB9D47`,
        (opacity = 1) => `grey`,
        (opacity = 1) => `grey`,
        (opacity = 1) => `grey`,
        (opacity = 1) => `grey`,
      ],
    },
  ],
};

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `black`,
  barPercentage: 1,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
  fillShadowGradient: "rgba(26, 255, 146, 1)",
  fillShadowGradientOpacity: 1,
};

const WrappedBarChart = (props) => {
  const help = new Animated.Value(0);
  const scrollX = useRef(help).current;
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <BarChart
      style={{}}
      data={data}
      width={Dimensions.get("window").width}
      height={300}
      yAxisSuffix="%"
      chartConfig={chartConfig}
      verticalLabelRotation={0}
      fromZero
      withInnerLines={true}
      flatColor={true}
      withCustomBarColorFromData={true}
    />
  );
};

export default memo(WrappedBarChart);
