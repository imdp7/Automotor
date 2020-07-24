import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAmqn8aKSRZxMhdfCSiiIiRIdqfvPqwP04",
    authDomain: "automotor-a9084.firebaseapp.com",
    databaseURL: "https://automotor-a9084.firebaseio.com",
    projectId: "automotor-a9084",
    storageBucket: "automotor-a9084.appspot.com",
    messagingSenderId: "342114596383",
    appId: "1:342114596383:web:f38cd05869f33a450c072a",
    measurementId: "G-1SG77BYDRZ"
  }
  export function Firebase() {
  firebase.initializeApp(config);
  firebase.analytics();
  }