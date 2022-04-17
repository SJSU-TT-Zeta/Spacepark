import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    //INSERT API KEY HERE
    //KEY SHOULD BE KEPT PRIVATE
    //UPLOADING KEY TO REPOSITORY IS PROHIBITED
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);