import { db } from '../api-config';
import { garageByName } from '../Garage/garage';
import { doc, getDoc } from "firebase/firestore";

export const garageFrequency = async (garageName) => {

    if (!garageName) {
        return;
    }

    const garage = await garageByName(garageName);
    const garageData = doc(db, "frequency", garage.frequencyId);
    const frequencyDoc = await getDoc(garageData);
    
    return frequencyDoc.data();

}

    