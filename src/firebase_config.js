import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUhfV-XZSXjkMg91MFHKLn2f82H7LEhKI",
    authDomain: "todosapp-1868e.firebaseapp.com",
    projectId: "todosapp-1868e",
    storageBucket: "todosapp-1868e.appspot.com",
    messagingSenderId: "637304206657",
    appId: "1:637304206657:web:f356d4c2466baf6c571dc0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };