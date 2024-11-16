import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCRau9FEIsm1sBUjgQTHQzsD8pCWf0DKpk",
    authDomain: "myblogsite-ed3b2.firebaseapp.com",
    projectId: "myblogsite-ed3b2",
    storageBucket: "myblogsite-ed3b2.firebasestorage.app",
    messagingSenderId: "325306585921",
    appId: "1:325306585921:web:1762f841e8a4c436b647c0",
    measurementId: "G-MSVJ8HNRF8"
});

const fb = firebase;

export default fb;