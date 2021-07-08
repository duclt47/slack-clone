import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD93CmuLUYG4g4vZBWv83_baakaG5AMFbw",
    authDomain: "slack-clone-6f14c.firebaseapp.com",
    projectId: "slack-clone-6f14c",
    storageBucket: "slack-clone-6f14c.appspot.com",
    messagingSenderId: "507721512918",
    appId: "1:507721512918:web:c6fc66116c9f4bd5599677",
    measurementId: "G-B70KC7XPPN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db;



