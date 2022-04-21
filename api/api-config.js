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
  apiKey: "AIzaSyAaPg4S3LLulGFM_1dF6gCEWLvOrR2CuVk",
  authDomain: "spacepark-8c822.firebaseapp.com",
  databaseURL: "https://spacepark-8c822-default-rtdb.firebaseio.com",
  projectId: "spacepark-8c822",
  storageBucket: "spacepark-8c822.appspot.com",
  messagingSenderId: "22277664175",
  appId: "1:22277664175:web:19ba3947bac9129cd7535a",
  measurementId: "G-9DBQ52LW1F",
};

//initialize firebase 
initializeApp(firebaseConfig);
//get firebase authentication 
export const auth = getAuth();
//get databse 
export const db = getFirestore();
