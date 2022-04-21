//import the app initialization
import { initializeApp } from "firebase/app";
///import app authentication
import { getAuth } from "firebase/auth";
//import Firebase 
import { getFirestore } from "firebase/firestore";
//configure Firebase and store in variable 
const firebaseConfig = {
    //INSERT API KEY HERE
    //KEY SHOULD BE KEPT PRIVATE
    //UPLOADING KEY TO REPOSITORY IS PROHIBITED
};

//initialize firebase 
initializeApp(firebaseConfig);
//get firebase authentication 
export const auth = getAuth();
//get databse 
export const db = getFirestore();
