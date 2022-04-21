//retrieve the database
import { db } from "../api-config";
//get documentation data from Firebase
import { getDoc, doc } from 'firebase/firestore';

//retrieve user review based on user id
export const userReviews = async (userUid) => {
    //user ID does not exist - no user by that ID, return an empty array
    if (!userUid) {
        return [];
    }
    //get user data from the database based on the user ID
    const userData = doc(db, "user", userUid);
    //retrieve the user from userData documentation 
    const getUser = await getDoc(userData);

    //if user exists, return the reviews of that user
    if (getUser.exists) {
        return getUser.data().reviews;
    }
    //return an empty array if no other conditions passed 
    return [];
}

//retrieve garage reviews based on garage ID
export const garageReviews = async (garageUid) => {
    //if garage ID does not exist, return empty array
    if (!garageUid) {
        return [];
    }

    //get garage data from documentation of garage ID
    const garageData = doc(db, "garage", garageUid);
    //get specific garage from the garage's data
    const getGarage = await getDoc(garageData);
    //if specified garage exists 
    if (getGarage.exists) {
        //return the reviews for speciifed garage
        return getGarage.data().reviews;
    }
    //return empty array if no other conditional has been passed
    return [];
}

//get review based on user ID
export const getReview = async (uid) => {
    //if user ID does not exist, return null - no such user
    if(!uid){
        return null;
    }

    //get and store in constant, review data from documentation of user ID 
    const reviewData = doc(db, "reviews", uid);
    //get specific review after review data documentation 
    const review = await getDoc(reviewData);

    //given that the specified review (based on user ID) exists, return the data of the review
    if (review.exists) {
        return review.data();
    }
    //return null if no other case has been passed 
    return null;
}