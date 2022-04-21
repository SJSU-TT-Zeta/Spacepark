//import the database 
import { db } from '../api-config';
//import specific review 
import { getReview } from "../Reviews/reviews";
//import overall documentation from firebase
import { doc, collection, getDoc, query, where, getDocs } from "firebase/firestore";

//retrieve garage occupancy based on garage ID
export const garageOccupancy = async (garageUid) => {
    //no such garage ID exists so no garage by that ID exists, return 0
    if (!garageUid) {
        return 0;
    }
    //get garage data based on garage ID
    const garageData = doc(db, "garage", garageUid);
    //retrieve occupancy from the specific garage's data 
    const getOccupancy = await getDoc(garageData.occupancy);
    //no such occupancy exists, so return occupancy from garage data 
    if (getOccupancy.exists) {
        return garage.data().occupancy;
    }
   //no other condition passed, return 0
    return 0;
}

//retrieve garage occupancy based on garage name
export const garageOccupancyByName = async (garageName) => {
    //no such garage by that name exists, return 0
    if (!garageName) {
        return 0;
    }
    //garageData variable initialized and set to data from the database where the garage's name matches parameter input
    const garageData = query(collection(db, "garage"), where("name", "==", garageName));
    const getOccupancy = await getDocs(garageData);
    //set garage value to 0
    let garage = 0;
    //get occupancy for each value in array from documentation 
    getOccupancy.forEach((doc) => {
        //each garage is set to the data from the documentation of garage occupancies in the array 
        garage = doc.data().occupancy;
    });
    //return garage 
    return garage;

}
//retrieve garage by name 
export const garageByName = async (garageName) => {
    //case if garage by this name does not exist 
    if (!garageName) {
        return;
    }
    
    //get garage data from database
    const garageData = query(collection(db, "garage"), where("name", "==", garageName));
    //get occupancy amount from the garage data
    const getOccupancy = await getDocs(garageData);
    
    //make garage to a null value 
    let garage = null;
    //get occupancy for each value in the array of garages 
    getOccupancy.forEach((doc) => {
        //set garage value to garage from documentation data
        garage = doc.data();
    });
    
    //return specific garage by name 
    return garage;

}
//retrieve garage rating based on garageName
export const garageRating = async (garageName) => {
    //check if garage by name exists
    if (!garageName) {
        //return 0 if does not
        return 0;
    }
    //store data of garage in variavle 
    const garageData = await garageByName(garageName);
    //create ratiing and total variables 
    let rating = 0;
    let total = 0;
    //get the ID for each review 
    garageData.reviews.forEach(async (reviewId) => {
        //store review numerical amout in constant review
        const review = await getReview(reviewId);
        //update rating with review rating 
        rating += review.rating;
        //update the total amount of reviews 
        total++;
    });
    //return an average of reviews - all ratings/total amount 
    return total === 0 ? 5 : Math.round(rating / total);

}
