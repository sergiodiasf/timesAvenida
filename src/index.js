import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZzKxlWOGZnOu6B85ZL-17EWq0DeOYMPo",
  authDomain: "trabalhoedecio2.firebaseapp.com",
  databaseURL: "https://trabalhoedecio2.firebaseio.com",
  projectId: "trabalhoedecio2",
  storageBucket: "trabalhoedecio2.appspot.com",
  messagingSenderId: "274761494120",
  appId: "1:274761494120:web:fd4ef898bc9cb4fd7095dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();