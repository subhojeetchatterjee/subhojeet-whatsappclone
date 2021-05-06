import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };
var firebaseConfig = {
  apiKey: "AIzaSyCpgzPt19m_m3QcI0BObr47lhG7S9ohslc",
  authDomain: "whatsappclone-2ccf8.firebaseapp.com",
  projectId: "whatsappclone-2ccf8",
  storageBucket: "whatsappclone-2ccf8.appspot.com",
  messagingSenderId: "1027901910687",
  appId: "1:1027901910687:web:87b49e6b1964431c1abcaa",
  measurementId: "G-M7QNFLK8L8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
