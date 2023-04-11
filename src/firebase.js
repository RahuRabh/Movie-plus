// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth , GoogleAuthProvider} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG40UYaTWiLaloAss_3a1wTZ0HURb_ZD4",
  authDomain: "movie-plus-668f6.firebaseapp.com",
  projectId: "movie-plus-668f6",
  storageBucket: "movie-plus-668f6.appspot.com",
  messagingSenderId: "273750223199",
  appId: "1:273750223199:web:e73e8bc9f91cd3e0b4eeea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getFirestore(app);

export { auth, provider, storage};
export default db;