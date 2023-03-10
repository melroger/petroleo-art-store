import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBYKTYuiAhvCCdcZgBnRNIrrkG5IVh1HkY",
  authDomain: "petroleo-37975.firebaseapp.com",
  projectId: "petroleo-37975",
  storageBucket: "petroleo-37975.appspot.com",
  messagingSenderId: "1091912948889",
  appId: "1:1091912948889:web:6ad85bc5ced0b2f547ec08"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
