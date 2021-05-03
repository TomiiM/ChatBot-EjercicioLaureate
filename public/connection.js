var firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyA4iS6YJfAfITqwS8p1FpSUXgcHA1059E4",
    authDomain: "ejerciciolaureate.firebaseapp.com",
    projectId: "ejerciciolaureate",
    storageBucket: "ejerciciolaureate.appspot.com",
    messagingSenderId: "366595474783",
    appId: "1:366595474783:web:ff9d30c9e6c4ea9b31e2ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;

