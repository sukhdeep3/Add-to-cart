import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB4biHczTLvBRCcFnNY0rZajR56pKOzslw",
  authDomain: "cart-79eb2.firebaseapp.com",
  projectId: "cart-79eb2",
  storageBucket: "cart-79eb2.appspot.com",
  messagingSenderId: "333904837496",
  appId: "1:333904837496:web:4c118ce829aa516cd8a68d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
