import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `AIzaSyD9gJW-xwbLuMpg6CYxzTf9aFlGAST6ywI`,
  authDomain: "public-chat-367a0.firebaseapp.com",
  projectId: "public-chat-367a0",
  storageBucket: "public-chat-367a0.appspot.com",
  messagingSenderId: "922001078021",
  appId: "1:922001078021:web:b4159b53e662e6d8d6a96c",
  measurementId: "G-XV1Z4Q6PEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
