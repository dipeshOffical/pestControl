// firebaseConfig.js

// Import the functions you need from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4FDVa1TvjQNJyCZqdbDfwrzA_zA03lUo",
  authDomain: "opalpestcontrol-bb11d.firebaseapp.com",
  projectId: "opalpestcontrol-bb11d",
  storageBucket: "opalpestcontrol-bb11d.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "375581975308",
  appId: "1:375581975308:web:4215b996709710236ddf29",
  measurementId: "G-VX47BZ1KEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage and export it
const storage = getStorage(app);

export { storage };
