import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBcnKT_eiC7DeNuoytw6c22y4lud9RGTdg",
//   authDomain: "cart-a2e69.firebaseapp.com",
//   projectId: "cart-a2e69",
//   storageBucket: "cart-a2e69.appspot.com",
//   messagingSenderId: "807262068054",
//   appId: "1:807262068054:web:4be12eb0f10f0f260a0af7"
// };

// const app=initializeApp(firebaseConfig);
// const db=getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


