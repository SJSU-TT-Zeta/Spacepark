import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    //INSERT API KEY HERE
    //KEY SHOULD BE KEPT PRIVATE
    //UPLOADING KEY TO REPOSITORY IS PROHIBITED
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();