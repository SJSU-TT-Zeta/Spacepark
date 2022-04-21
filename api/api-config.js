import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
