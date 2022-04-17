import { db } from "../api-config";
import { getDoc, doc } from 'firebase/firestore';

export const userReviews = async (userUid) => {
    if (!userUid) {
        return [];
    }

    const userData = doc(db, "user", userUid);
    const getUser = await getDoc(userData);

    if (getUser.exists) {
        return getUser.data().reviews;
    }

    return [];
}

export const garageReviews = async (garageUid) => {
    if (!garageUid) {
        return [];
    }

    const garageData = doc(db, "garage", garageUid);
    const getGarage = await getDoc(garageData);

    if (getGarage.exists) {
        return getGarage.data().reviews;
    }

    return [];
}

export const getReview = async (uid) => {
    if(!uid){
        return null;
    }

    const reviewData = doc(db, "reviews", uid);
    const review = await getDoc(reviewData);

    if (review.exists) {
        return review.data();
    }

    return null;
}