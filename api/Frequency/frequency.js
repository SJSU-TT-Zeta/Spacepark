//import database
import { db } from '../api-config';
//import garage from specified name - code in garage.js
import { garageByName } from '../Garage/garage';
//get documentation data from Firebase
import { doc, getDoc } from "firebase/firestore";

export const garageFrequency = async (garageName) => {
    //if a garage by that name does not exist, does not return anything
    if (!garageName) {
        return;
    }

    //get garage and store in variable
    const garage = await garageByName(garageName);
    //data of garage stored in variable
    const garageData = doc(db, "frequency", garage.frequencyId);
    //get the frequencey 
    const frequencyDoc = await getDoc(garageData);
    
    //return the frequency of specified garage
    return frequencyDoc.data();

}

    