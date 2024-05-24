import { initializeApp } from "firebase/app";
import Constants from 'expo-constants'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: Constants.manifest.exstra.apiKey,
    authDomain: Constants.manifest.exstra.authDomain,
    projectId: Constants.manifest.exstra.projectId,
    storageBucket: Constants.manifest.exstra.storageBucket,
    messagingSenderId: Constants.manifest.exstra.messagingSenderId,
    appId: Constants.manifest.exstra.appId,
    databaseURL: Constants.manifest.exstra.databaseURL
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const database = getFirestore()