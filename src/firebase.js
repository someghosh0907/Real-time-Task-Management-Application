// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD16ODugQvrt5f-nfAofy4bxZgKXchj-A4",
  authDomain: "resoluteaiproject-20e5b.firebaseapp.com",
  projectId: "resoluteaiproject-20e5b",
  storageBucket: "resoluteaiproject-20e5b.appspot.com",
  messagingSenderId: "325520927618",
  appId: "1:325520927618:web:94a9202d1f53d95556bd9b",
  measurementId: "G-4PXMWK5R85",
  databaseURL: "https://resoluteaiproject-20e5b-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)
//const analytics = getAnalytics(app);

 