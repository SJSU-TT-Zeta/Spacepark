//import specified database
import { db, auth } from "../api-config";
//get document from Firebase
import { getDoc, setDoc, doc } from 'firebase/firestore';
//import user creation and sign in from Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//retrieve user based on user ID
export const getUser = async (uid) => {
    //no such user ID exists, return null
    if (!uid) {
        return null;
    }

    //store (in variable) user Data from the database, using user ID
    const userData = doc(db, "user", uid);
    //store (in variable) specific user based on userData
    const getUser = await getDoc(userData);

    //if specified user exists, return user's data 
    if (getUser.exists) {
        return getUser.data();
    }

    //return null if no other conditions passed
    return null;
}

//returns all data for specified user that is updated
export const userProfileDocument = async (user, theUsername) => {
    //no such user exists, so return nothing
    if (!user) {
        return;
    }
    //get user data based on user ID in database
    const userData = doc(db, "user", user.uid);
    //date for updating user profile
    const dateCreatedAt = new Date();
    //create variable to store future user reviews in 
    const theReviews = [];
    try {
        //set document with data user enters to update profile
        await setDoc(userData, {
            username: theUsername,
            email: user.email,
            createdAt: dateCreatedAt,
            reviews: theReviews,
        })
    //catch any errors in creation 
    } catch (error) {
        console.error(error);
    }
    //get user from documentation of userData
    const getUser = await getDoc(userData);
    //return all data for the specified user
    return getUser.data();

}

//allow user to sign in with email and password
export const userSignIn = async (email, password) => {
    
    //try to allow user to sign in with specified parameters
    try {
        await signInWithEmailAndPassword(auth, email, password);
    //catch error if no such user with specified email and password exists
    } catch (error) {
        //return false for no such user
        return false;
    }
    //user was able to sign in, return true (valid user)
    return true;

}

//allow user to create an account
export const createUserAccount = async (email, username, password, confirmPassword) => {

    //ensure password and confirmation is same data entered
    if (password !== confirmPassword) {
        //if passswords don't match, alert and return nothing
        alert('Passwords do not match');
        return;
    }
    //passwords match, so allow user to create an account
    try {
        //have a variable to store newAccount detials and allow user to create account with email and password
        const newAccount = await createUserWithEmailAndPassword(auth, email, password);
        //allow user to sign in and wait for result of action
        await signInWithEmailAndPassword(auth, email, password);
        //return user data based on userProfileDocument function 
        return await userProfileDocument(newAccount.user, username);
        //catch any sort of error in creating an account for user
    } catch (error) {
        console.error(error);
    }
    //return nothing if no other conditional passed 
    return;
}