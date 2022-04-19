import { db } from '../api-config';
import { getReview } from "../Reviews/reviews";
import { doc, collection, getDoc, query, where, getDocs } from "firebase/firestore";

export const garageOccupancy = async (garageUid) => {

    if (!garageUid) {
        return 0;
    }

    const garageData = doc(db, "garage", garageUid);
    const getOccupancy = await getDoc(garageData.occupancy);

    if (getOccupancy.exists) {
        return garage.data().occupancy;
    }
   
    return 0;
}

export const garageOccupancyByName = async (garageName) => {

    if (!garageName) {
        return 0;
    }

    const garageData = query(collection(db, "garage"), where("name", "==", garageName));
    const getOccupancy = await getDocs(garageData);
    
    let garage = 0;
    getOccupancy.forEach((doc) => {
        garage = doc.data().occupancy;
    });
    
    return garage;

}

export const garageByName = async (garageName) => {

    if (!garageName) {
        return;
    }

    const garageData = query(collection(db, "garage"), where("name", "==", garageName));
    const getOccupancy = await getDocs(garageData);
    
    let garage = null;
    getOccupancy.forEach((doc) => {
        garage = doc.data();
    });
    
    return garage;

}

export const garageRating = async (garageName) => {

    if (!garageName) {
        return 0;
    }

    const garageData = await garageByName(garageName);
    let rating = 0;
    let total = 0;
    garageData.reviews.forEach(async (reviewId) => {
        const review = await getReview(reviewId);
        rating += review.rating;
        total++;
    });
    return total === 0 ? 5 : Math.round(rating / total);

}
