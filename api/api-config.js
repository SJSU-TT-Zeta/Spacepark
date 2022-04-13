import { initializeApp, auth, firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    //INSERT API KEY HERE
    //KEY SHOULD BE KEPT PRIVATE
    //UPLOADING KEY TO REPOSITORY IS PROHIBITED
};

initializeApp(firebaseConfig);
export const auth = auth();
export const firestore = firestore();