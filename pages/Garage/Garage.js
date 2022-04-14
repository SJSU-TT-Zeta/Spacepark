import { Button, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";

import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

import logo from "../../assets/sp_logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LineChart } from "react-native-chart-kit";

const dummyData = {
  labels: ["0", "1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [0.2, 0.4, 0.28, 0.8, 0.99, 0.43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(3, 232, 121, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const Garage = (props) => {
  const goToLoginView = () => {
    // console.log(props);
    props.navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={[styles.headerItem, styles.logo]} source={logo} />
        <MaterialIcons
          name="refresh"
          style={[styles.headerItem, styles.refresh]}
          size={40}
          color="#15AB69"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Parking Garages</Text>
        <View style={styles.contentItem}>
          <Text style={styles.subtitle}>SJSU North Parking Garage</Text>

          <View style={styles.contentItemWrap}>
            <View style={styles.circle}>
              <CircularProgress
                value={60}
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
              <View>
                <TouchableOpacity style={styles.button}>
                  <Text>More Info</Text>
                </TouchableOpacity>
                <Text >
                  <Text style={{ fontWeight: "bold"}}>37 </Text>
                  spots available
                </Text>
              </View>

              <LineChart
                data={dummyData}
                chartConfig={chartConfig}
                width={200}
                height={70}
                hidePointsAtIndex={[0, 1, 2, 3, 4, 5]}
                segments={2}
                withVerticalLabels={false}
                // withHorizontalLabels={false}
                withVerticalLines={false}
                // this maybe true
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
            <View style={styles.emptyCircle}>
              <Text style={styles.comingSoon}> Coming Soon</Text>
            </View>

            <View style={styles.contentItemWrapWrap}>
              <View>
                <TouchableOpacity style={styles.button}>
                  <Text>More Info</Text>
                </TouchableOpacity>
                <Text>
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
            <View style={styles.emptyCircle}>
              <Text style={styles.comingSoon}> Coming Soon</Text>
            </View>

            <View style={styles.contentItemWrapWrap}>
              <View>
                <TouchableOpacity style={styles.button}>
                  <Text>More Info</Text>
                </TouchableOpacity>
                <Text style={styles.spotsAvail}>
                  <Text style={{ fontWeight: "bold"}}>N/A </Text>
                  spots available
                </Text>
              </View>
            </View>
            
          </View>
        </View>
      </View>
      <Text style={{fontWeight: "300", textAlign: "right", marginRight: "2%"}}>Last updated 5 seconds ago...</Text>
    </SafeAreaView>
  );
};

export default Garage;
