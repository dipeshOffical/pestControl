// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4FDVa1TvjQNJyCZqdbDfwrzA_zA03lUo",
  authDomain: "opalpestcontrol-bb11d.firebaseapp.com",
  projectId: "opalpestcontrol-bb11d",
  storageBucket: "gs://opalpestcontrol-bb11d.firebasestorage.app", // Corrected storage bucket URL
  messagingSenderId: "375581975308",
  appId: "1:375581975308:web:4215b996709710236ddf29",
  measurementId: "G-VX47BZ1KEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);
 

export { storage };
