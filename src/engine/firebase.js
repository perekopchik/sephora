
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyABjblYAKK4wpDN5gVprx09uV8NFxkj148",
    authDomain: "sephora-3e789.firebaseapp.com",
    projectId: "sephora-3e789",
    storageBucket: "sephora-3e789.appspot.com",
    messagingSenderId: "793858927769",
    appId: "1:793858927769:web:6266baf8746b9ff0cf1c08"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;
export const db = getFirestore(app)