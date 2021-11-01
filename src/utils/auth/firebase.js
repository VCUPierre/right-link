/* eslint-disable no-alert */
/* eslint-disable no-console */
import app from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = app.initializeApp(firebaseConfig);

export default firebaseApp;

// const appAuth = app.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = app.firestore();

const googleProvider = new app.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const { user } = res;
        const query = await db
            .collection('users')
            .where('uid', '==', user.uid)
            .get();
        if (query.docs.length === 0) {
            await db.collection('users').add({
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email,
            });
        }
        localStorage.setItem('TRC-User', JSON.stringify(user));
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signInWithEmailAndPassword = async (email, password) => {
    try {
        const res = await auth.signInWithEmailAndPassword(email, password);
        const { user } = res;
        localStorage.setItem('TRC-User', JSON.stringify(user));
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const { user } = res;
        await db.collection('users').add({
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        });
        localStorage.setItem('TRC-User', JSON.stringify(user));
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert('Password reset link sent!');
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = async () => {
    await auth.signOut();
    localStorage.removeItem('TRC-User');
};

export {
    // auth,
    // db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
};
