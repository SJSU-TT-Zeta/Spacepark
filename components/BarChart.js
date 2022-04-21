import { Animated, Dimensions } from "react-native";

import { BarChart } from "react-native-chart-kit";

import { memo, React, useEffect, useRef, useState } from "react";

const data = {
  labels: ["6-8am", "8-10am", "10-12am", "12-2pm", "2-4pm", "4-6pm"],
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0],
      colors: [
        (opacity = 1) => `#15AB69`,
        (opacity = 1) => `#15AB69`,
        (opacity = 1) => `#15AB69`,
        (opacity = 1) => `#15AB69`,
        (opacity = 1) => `#15AB69`,
        (opacity = 1) => `#15AB69`,
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
  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    // console.log(props);

    if (props.data) {
      setChartData((oldState) => {
        const copyData = { ...oldState };
        const copyFreq = [...props.data.freq];

        let i;
        for (i = 0; i < copyFreq.length; i++) {
          copyFreq[i] = (copyFreq[i] / 1000) * 100;
        }

        console.log(copyFreq);

        copyData.datasets[0].data = copyFreq;
        return copyData;
      });
      props.renderCheck(true);
    }

    // console.log(chartData);
  }, []);

  return (
    <BarChart
      data={chartData}
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
