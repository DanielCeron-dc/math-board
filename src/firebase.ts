// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAm5HErQ6I5J7Y_03RKExORisvdrE1QzyU",
    authDomain: "math-board-53de4.firebaseapp.com",
    projectId: "math-board-53de4",
    storageBucket: "math-board-53de4.appspot.com",
    messagingSenderId: "78511328296",
    appId: "1:78511328296:web:01a7d08eafcbc3b8f7f91d",
    measurementId: "G-GXPV8T9LX7"
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;