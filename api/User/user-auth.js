import { db, auth } from "../api-config";
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const getUser = async (uid) => {
    if (!uid) {
        return null;
    }

    const userData = doc(db, "user", uid);
    const getUser = await getDoc(userData);

    if (getUser.exists) {
        return getUser.data();
    }

    return null;
}

export const userProfileDocument = async (user, theUsername) => {
    
    if (!user) {
        return;
    }

    const userData = doc(db, "user", user.uid);
    
    const dateCreatedAt = new Date();
    const theReviews = [];
    try {
        await setDoc(userData, {
            username: theUsername,
            email: user.email,
            createdAt: dateCreatedAt,
            reviews: theReviews,
        })
    } catch (error) {
        console.error(error);
    }
    
    const getUser = await getDoc(userData);

    return getUser.data();

}

export const userSignIn = async (email, password) => {
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return false;
    }
    return true;

}

export const createUserAccount = async (email, username, password, confirmPassword) => {

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const newAccount = await createUserWithEmailAndPassword(auth, email, password);
        await signInWithEmailAndPassword(auth, email, password);
        return await userProfileDocument(newAccount.user, username);
    } catch (error) {
        console.error(error);
    }

    return;
}