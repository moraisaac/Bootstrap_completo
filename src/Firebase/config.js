
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAOxUrQE_0qKdSE7RIcA_kqU_aQ4JLBTgg",
    authDomain: "ecommerce-73099.firebaseapp.com",
    projectId: "ecommerce-73099",
    storageBucket: "ecommerce-73099.appspot.com",
    messagingSenderId: "337396848942",
    appId: "1:337396848942:web:6d5570bf1ede2737aac2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}