// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyABeV8kPn0Tq1f98YWK28GlRWhTlxdCjhM',
    authDomain: 'movie-hub-fde4d.firebaseapp.com',
    projectId: 'movie-hub-fde4d',
    storageBucket: 'movie-hub-fde4d.appspot.com',
    messagingSenderId: '488228613668',
    appId: '1:488228613668:web:6b6753b46dc6e4aca372b1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, 'movies');
export default app;
