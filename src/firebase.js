import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAKUxvQFiYpgPGZi8JEd8q4NbjEpTaDXgQ",
    authDomain: "newproject1-8d8bb.firebaseapp.com",
    databaseURL: "https://newproject1-8d8bb.firebaseio.com",
    projectId: "newproject1-8d8bb",
    storageBucket: "newproject1-8d8bb.appspot.com",
    messagingSenderId: "971626746683"
};

firebase.initializeApp(config);


export default firebase;