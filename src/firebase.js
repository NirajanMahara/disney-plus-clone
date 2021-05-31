import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJFfdNAgHX9FcIMC3xkErGTTOF1y97SXg",
    authDomain: "disney-plus-clone-2003jan29.firebaseapp.com",
    projectId: "disney-plus-clone-2003jan29",
    storageBucket: "disney-plus-clone-2003jan29.appspot.com",
    messagingSenderId: "828510005812",
    appId: "1:828510005812:web:22f3ddd6b78c95e5cf7861",
    measurementId: "G-R0EJ81YHV6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;