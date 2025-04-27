// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsqhlDW4SnMl6Cvc4ErRQNj-BrUTE-K00",
  authDomain: "netflix-ai-6b2ce.firebaseapp.com",
  projectId: "netflix-ai-6b2ce",
  storageBucket: "netflix-ai-6b2ce.firebasestorage.app",
  messagingSenderId: "254130430485",
  appId: "1:254130430485:web:dd549b00403bd8197a241c",
  measurementId: "G-T2ESK89N8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
