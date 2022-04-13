import { Button, Text, View, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";

import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

import logo from "../../assets/sp_logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LineChart } from "react-native-chart-kit";
import globalStyles from "../globalStyle";

const Frequency = (props) => {
  const goToNorthGarage = () => {
    // console.log(props);
    props.navigation.navigate("FrequencyNorthParking");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.header}>
        <Image style={globalStyles.logo} source={logo} />
      </View>

      <Text style={styles.title}>Parking Garages</Text>

      <View style={styles.garageWrap}>
        <Text style={styles.otherLabel}> Select your garage.</Text>

        <View style={[styles.item, styles.freqItem]}>
          <TouchableOpacity style={styles.button} onPress={goToNorthGarage}>
            <Text style={styles.garageLabel}>SJSU North Garage</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.item, styles.freqItem]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.garageLabel}>SJSU South Garage</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.item, styles.freqItem]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.garageLabel}>SJSU West Garage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Frequency;
