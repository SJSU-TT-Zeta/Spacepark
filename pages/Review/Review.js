import React, { useState } from "react";
import { Image, View, Text, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import StarRating from "react-native-star-rating";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../assets/sp_logo.png";

import styles from "./styles";
import globalStyles from "../globalStyle";

const fakeData = [
  {
    name: "Johnny Doe",
    rating: 2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  \
       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    name: "James Doe",
    rating: 4,
    review:
      "Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor \
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
       Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
];

const Review = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [rating, setRating] = useState(0);
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);

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
    <View>
      <HeaderBar />
      <ScrollView bounces={true}>
        <View style={globalStyles.header}>
          <MaterialIcons
            style={globalStyles.backArrow}
            name="arrow-back-ios"
            size={28}
            color="black"
            onPress={goToGarageView}
          />
          <Image style={globalStyles.logo} source={logo} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>SJSU North Parking Garage</Text>
          <TextInput
            style={styles.review}
            onChangeText={onChangeNumber}
            placeholder="Write your review here!"
            keyboardType="default"
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
            <TouchableOpacity style={styles.submitButtonWrap}>
              <Text style={styles.submitTitle}>Submit</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 10 }}>
            {fakeData.map((item, index) => {
              return (
                <View style={styles.review} key={index}>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Review;
