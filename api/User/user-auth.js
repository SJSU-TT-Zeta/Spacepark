import {firestore, auth} from "../api-config";

export const getUser = async (uid) => {
    if (!uid) {
        return null;
    }

    const userData = firestore.doc(`user/${uid}`);
    const getUser = await userData.get();

    if (getUser.exists) {
        return getUser.data();
    }

    return null;
}

export const userProfileDocument = async (user, info) => {
    
    if (!user) {
        return;
    }

    const userData = firestore.doc(`user/${user.uid}`);
    const getUser = await userData.get();

    if (!getUser.exists) {
        const { username, email } = user;
        const createdAt = new Date();
        const reviews = [];
        try {
            await userData.set({
                username,
                email,
                createdAt,
                reviews,
                ...info
            })
        } catch (error) {
            console.error(error);
        }
    }

    return userData;

}

export const userSignIn = async (username, password) => {
    
    try {
        await auth.signInWithEmailAndPassword(username, password);
    } catch (error) {
        console.error(error);
    }

}

export const createUserAccount = async (email, username, password, confirmPassword) => {

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await userProfileDocument(user, {username});
    } catch (error) {
        console.error(error);
    }

}