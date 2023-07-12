import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from "firebase";
import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7J_6YlkIvHBfXYeOJWfQbPmiw4tNy4WU",
  authDomain: "cart-a6190.firebaseapp.com",
  projectId: "cart-a6190",
  storageBucket: "cart-a6190.appspot.com",
  messagingSenderId: "401509341354",
  appId: "1:401509341354:web:ab487aa90d58f1f64198d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
