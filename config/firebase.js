import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const expoConfig  = Constants.expoConfig 

const firebaseConfig = {
  apiKey: expoConfig.extra.apiKey,
  authDomain: expoConfig.extra.authDomain,
  projectId: expoConfig.extra.projectId,
  storageBucket: expoConfig.extra.storageBucket,
  messagingSenderId: expoConfig.extra.messagingSenderId,
  appId: expoConfig.extra.appId,
  databaseURL: expoConfig.extra.databaseURL,
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
