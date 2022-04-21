import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import logo from "../../assets/sp_logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from "react-native-star-rating";

import { MaterialIcons } from "@expo/vector-icons";

const fakeData = [
  {
    name: "BEGIN OF DATA",
    rating: 2,
    review: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Jane Doe",
    rating: 3.5,
    review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    name: "Jim Doe",
    rating: 4,
    review: "Excepteur sint occaecat cupidatat non proident",
  },
  {
    name: "John Doe",
    rating: 2,
    review: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Jane Doe",
    rating: 3.5,
    review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    name: "END OF FAKE DATA",
    rating: 4,
    review: "Excepteur sint occaecat cupidatat non proident",
  },
];

const Review = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [rating, setRating] = useState(0);
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const goToGarageView = () => {
    props.navigation.navigate("GarageView");
  };
  const onStarRatingPress = (rating) => {
    setRating(rating);
  };
  const writeReview = () => {
    props.navigation.navigate("WriteReview");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <MaterialIcons
          style={styles.arrow}
          name="arrow-back-ios"
          size={24}
          color="black"
          onPress={goToGarageView}
        />
        <Image style={styles.headerItem} source={logo} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>SJSU North Parking Garage</Text>
        <TextInput
          style={styles.review}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Write your review here!"
          keyboardType="numeric"
        />
        <StarRating
          disabled={false}
          maxStars={5}
          fullStarColor="#ebdf3b"
          starStyle={styles.stars}
          rating={rating}
          containerStyle={styles.starBox}
          selectedStar={(rating) => onStarRatingPress(rating)}
        />

        <View style={styles.submitButton}>
          <TouchableOpacity
            style={{
              height: "100%",
            }}
          >
            <Text style={styles.submitTitle}>Submit</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ height: 500, marginTop: 10 }} bounces={true}>
          {fakeData.map((item, index) => {
            return (
              <View style={styles.review}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewName}>{item.name}</Text>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    fullStarColor="#ebdf3b"
                    starStyle={styles.stars}
                    rating={item.rating}
                    containerStyle={styles.starDisplay}
                    starSize={20}
                    selectedStar={(rating) => onStarRatingPress(rating)}
                  />
                </View>
                <Text>{item.review}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Review;
