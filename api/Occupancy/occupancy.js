import { db } from '../api-config';
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
   let garage = null;
   getOccupancy.forEach((doc) => {
    garage = doc;
   }); 

   return garage ? garage.data().occupancy : 0;
}
